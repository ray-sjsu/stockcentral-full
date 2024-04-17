import requests
from datetime import date, timedelta

base_url = 'https://finnhub.io/api/v1/'
api_key = 'cnj5u49r01qkq94gad40cnj5u49r01qkq94gad4g'


def calculate_quarterly(q_reports, a_reports, report_type, criteria):
    quarter_values = {}
    prev_value = 0
    for report in q_reports:
        quarter_data = report.get('report', {}).get(report_type, [])
        for entry in quarter_data:
            year = str(report['year'])
            quarter = str(report['quarter'])
            if entry.get('concept') == criteria:
                value = int(entry.get('value'))
                if report['quarter'] == 1:
                    prev_value = value
                    current_value = value
                    quarter_values[year + ' Q' + quarter] = current_value
                elif bool(quarter_values):
                    current_value = value
                    quarter_values[year + ' Q' + quarter] = current_value - prev_value
                    prev_value = value
                break
    for report in a_reports:
        annual_data = report.get('report', {}).get(report_type, [])
        for entry in annual_data:
            if entry.get('concept') == criteria:
                value = int(entry.get('value'))
                year = str(report['year'])
                quarter = '4'
                if year + ' Q3' in quarter_values and year + ' Q2' in quarter_values and year + ' Q1' in quarter_values:
                    quarter_values[year + ' Q' + quarter] = value - quarter_values[year + ' Q1'] - quarter_values[
                        year + ' Q2'] - quarter_values[year + ' Q3']
    return quarter_values


def get_stock_price(symbol):
    # To get current stock price
    endpoint = 'quote?'
    query = 'symbol={}&token={}'.format(symbol, api_key)

    response = requests.get(base_url + endpoint + query)
    if response.status_code == 200:
        data = response.json()
        current_price = data['c']
        # print(current_price)
        return current_price
    else:
        print(f"Error: {response.status_code} - {response.text}")


def get_quarterly_data(symbol):
    # To get stock financials graph data
    start_date = str(date.today() - timedelta(days=7 * 365 + 2 * 366))
    end_date = date.today()
    freq = 'quarterly'
    endpoint = 'stock/financials-reported?'
    query = 'symbol={}&freq={}&from={}&to={}&token={}'.format(symbol, freq, start_date, end_date, api_key)
    quarter_revenue = {}
    quarter_income = {}

    response = requests.get(base_url + endpoint + query)
    if response.status_code == 200:
        raw_data = response.json()
        q_reports = raw_data.get('data', [])
        q_reports = q_reports[::-1]
        freq = 'annually'
        query = 'symbol={}&freq={}&token={}'.format(symbol, freq, api_key)
        response = requests.get(base_url + endpoint + query)
        if response.status_code == 200:
            raw_data = response.json()
            a_reports = raw_data.get('data', [])
            a_reports = a_reports[::-1]
            # Calculate Quarterly Revenue
            quarter_revenue = calculate_quarterly(q_reports, a_reports, 'ic',
                                                  'us-gaap_RevenueFromContractWithCustomerExcludingAssessedTax')
            quarter_revenue = {key: val for key, val in sorted(quarter_revenue.items(), key=lambda ele: ele[0])}
            #print("Quarterly Revenue")
            quarter_income = calculate_quarterly(q_reports, a_reports, 'ic', 'us-gaap_NetIncomeLoss')
            quarter_income = {key: val for key, val in sorted(quarter_income.items(), key=lambda ele: ele[0])}
        else:
            print(f"Error: {response.status_code} - {response.text}")
    else:
        print(f"Error: {response.status_code} - {response.text}")
    quarterly_data = {'revenue': quarter_revenue, 'income': quarter_income}
    # for item in quarterly_data:
    #     print(item + ': ' + str(quarterly_data[item]))
    return quarterly_data


def get_basic_financials(symbol):
    # To get basic financials (52 week high/low, P/E ratios)
    endpoint = 'stock/metric?'
    query = 'symbol={}&metric={}&token={}'.format(symbol, 'all', api_key)
    response = requests.get(base_url + endpoint + query)
    basic_financials = {}
    if response.status_code == 200:
        raw_data = response.json()
        bf_report = raw_data.get('metric', [])
        for item in bf_report:
            if item == '52WeekHigh':
                basic_financials['52 week high'] = bf_report[item]
            if item == '52WeekLow':
                basic_financials['52 week low'] = bf_report[item]
            if item == 'currentDividendYieldTTM':
                basic_financials['annual dividend yield'] = str(bf_report[item]) + '%'
                # A higher dividend yield indicates that the stock pays a higher dividend relative to its price, which may be attractive to income-seeking investors.
            if item == 'beta':
                basic_financials['beta'] = bf_report[item]
                # A beta of 1 implies the stock moves in line with the market, while a beta greater than 1 suggests higher volatility, and less than 1 suggests lower volatility compared to the market.
            if item == 'netProfitMarginAnnual':
                basic_financials['annual net profit margin'] = str(bf_report[item]) + '%'
                # Indicator represent the percentage of revenue that translates into profit after all expenses have been deducted. Higher values indicate better profitability, as more revenue is retained as profit.                                                + '%'
            if item == 'peAnnual':
                basic_financials['price to earning annual'] = bf_report[item]
                # Average value of S&P 500 Index is 17.6. A lower PE ratio may suggest the stock is undervalued relative to its earnings potential, while a higher PE ratio may indicate overvaluation.
            if item == 'currentRatioQuarterly':
                basic_financials['liquidity ratio quarterly'] = bf_report[item]
                # Higher than 1 indicate better short-term liquidity and financial stability while lower than 1 means company does not have capitol to meet short-term obligations.
        # for item in basic_financials:
        #     print(item + ': ' + str(basic_financials[item]))
        return basic_financials
    else:
        print(f"Error: {response.status_code} - {response.text}")


def get_insider_trading():
    # To get insider trading
    endpoint = 'stock/insider-transactions?'
    limit = 20
    query = 'symbol=''&limit={}&token={}'.format(limit, api_key)
    response = requests.get(base_url + endpoint + query)
    if response.status_code == 200:
        raw_data = response.json()
        insider_reports = raw_data.get('data', [])
        i = 0
        # for item in insider_reports:
        #     print(item)
        #     i += 1
        #     if i >= 10:
        #         break
    # labels that might be useful:
    # Income Statement: Revenue, Expenses, Net income, Total operating expenses
    # Balance Sheet: Assets, Total liabilities, Total stockholders' equity

    # NASDAQ Data Link
    # Financial Modeling Prep
    else:
        print(f"Error: {response.status_code} - {response.text}")


def get_news(symbol):
    endpoint = 'company-news?'
    start_date = str(date.today() - timedelta(days=3 * 365 + 1 * 366))
    end_date = date.today()
    query = 'symbol={}&from={}&to={}&token={}'.format(symbol, start_date, end_date, api_key)
    response = requests.get(base_url + endpoint + query)
    raw_data = response.json()
    if response.status_code == 200:
        data = raw_data[:5]
        # for item in data[:5]:
        #     print(item)
        return data[:5]

def get_logo(symbol):
    endpoint = 'stock/profile2?'
    query = 'symbol={}&token={}'.format(symbol, api_key)
    response = requests.get(base_url + endpoint + query)
    if response.status_code == 200:
        raw_data = response.json()
        if raw_data:
            print(raw_data['logo'])
            return raw_data['logo']
    return
def symbol_lookup(input):
    endpoint = 'search?'
    query = 'q={}&token={}'.format(input, api_key)
    response = requests.get(base_url + endpoint + query)
    if response.status_code == 200:
        raw_data = response.json()
        data = raw_data['result']
        filtered_data = [d for d in data if d.get('type') != '' and '.' not in d.get('symbol')][:5]
        # for x in filtered_data:
        #     print(x)
        return filtered_data
    return
def get_stock_data(symbol):
    return get_stock_price(symbol), get_basic_financials(symbol), get_quarterly_data(symbol), get_news(symbol), symbol_lookup(symbol)

def test():
    test_symbol = 'APPL'
    get_stock_price(test_symbol)
    get_basic_financials(test_symbol)
    get_quarterly_data(test_symbol)
    get_news(test_symbol)
    get_logo(test_symbol)
    symbol_lookup(test_symbol)

