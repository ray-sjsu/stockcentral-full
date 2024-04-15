from flask import Flask, render_template, request, jsonify
import data_retriever as dr
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/stocks', methods=['GET', 'POST'])
def index():
    stock_data = None
    message = None
    print('request.form: ' + str(request.form))

    if request.method == 'POST':
        if 'stock_symbol' in request.form:
            stock_symbol = request.form['stock_symbol']
            stock_data = dr.get_stock_data(stock_symbol)
            if stock_data:
                #return render_template('index.html', stock_data=stock_data)
                return jsonify(stock_data)
            else:
                message = 'Stock not found.'

    #return render_template('index.html', message=message)
    return jsonify(stock_data)

if __name__ == '__main__':
    app.run(debug=True)