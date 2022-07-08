from flask_app import app

from flask import render_template,redirect,request,session

from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route("/dojos")
def dojo():
    dojos = Dojo.get_all_dojos()

    return render_template("index.html", dojos = dojos)


@app.route("/ninjas/new")
def new_ninja():
    dojos = Dojo.get_all_dojos()

    return render_template("new_ninja.html", dojos = dojos)

@app.route("/create_ninja", methods=['POST'])
def create_ninja():
    data ={
        "Dojos_id" : request.form['Dojos_id'],
        "Fname" : request.form['Fname'],
        "Lname" : request.form['Lname'],
        "Age" : request.form['Age'],
    }

    Ninja.create_ninja(data)

    return redirect("/dojos")

@app.route("/dojos/<int:id>")
def get_one_dojo(id):
    ninjas = Ninja.get_one_dojo({'id':id})
    dojos = Ninja.get_dojo({'id':id})
    return render_template("dojos_show.html", ninjas = ninjas, dojos = dojos)
