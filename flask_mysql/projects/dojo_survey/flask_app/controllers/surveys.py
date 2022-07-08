from flask_app import app

from flask import render_template,redirect,request,session

from flask_app.models.survey import Survey

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    if not Survey.validate_survey(request.form):
        # redirect to the route where the burger form is rendered.
        return redirect('/')
    # else no errors:
    print("Got Post Info")
    data = {
        "name" : request.form["name"],
        "location" : request.form["location"],
        "language" : request.form["language"],
        "comment" : request.form["comment"],
    }
    # Here we add two properties to session to store the name and email
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    Survey.create_survey(data)

    return redirect('/result')

@app.route('/result')
def show_user():
    return render_template('result.html')