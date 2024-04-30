from flask import Flask, render_template, request, jsonify
import data_retriever as dr
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/stocks', methods=['GET', 'POST'])
def index():
    stock_data = None
    print('/stocks route: ' + str(request.form))

    if request.method == 'POST':
        if 'stock_symbol' in request.form:
            stock_symbol = request.form['stock_symbol']
            stock_data = dr.get_stock_data(stock_symbol)
            if stock_data:
                return jsonify(stock_data)
    return jsonify(stock_data)

@app.route('/search', methods=['GET', 'POST'])
def index1():
    stock_data = None
    print('/search route: ' + str(request.form))

    if request.method == 'POST':
        if 'stock_symbol' in request.form:
            stock_symbol = request.form['stock_symbol']
            stock_data = dr.symbol_lookup(stock_symbol)
            if stock_data:
                return jsonify(stock_data)
    return jsonify(stock_data)

@app.route('/company', methods=['GET', 'POST'])
def index2():
    stock_data = None
    print('/company: ' + str(request.form))

    if request.method == 'POST':
        if 'stock_symbol' in request.form:
            stock_symbol = request.form['stock_symbol']
            stock_data = dr.get_company(stock_symbol)
            if stock_data:
                return jsonify(stock_data)
    return jsonify(stock_data)

if __name__ == '__main__':
    app.run(debug=True)