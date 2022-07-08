from ast import If
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'the super secret'

@app.route('/')
def index():
    if 'count' in session:
        session['count'] = session['count']+int(1)
    else:
        session['count'] = 1
    return render_template("index.html")

@app.route('/destroy_session', methods=['POST'])
def destroy():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
