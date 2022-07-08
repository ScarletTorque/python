from flask import Flask
app = Flask(__name__)





@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return f"Dojo!"

@app.route('/say/<text>')
def say(text):
    return f'Hi. {text}!'

@app.route('/repeat/<int:amount>/<string:word>')
def repeat(amount,word):
    return f'{amount * word}'














if __name__=="__main__":
    app.run(debug=True)

# localhost:5000