from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def checker():
    return render_template('index.html')

@app.route('/<int:col>/<int:row>')
def checkerext(col,row):
    return render_template('index.html', col=int(col/2),row=int(row/2))




if __name__=="__main__":
    app.run(debug=True)