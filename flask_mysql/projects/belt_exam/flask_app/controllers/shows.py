from flask_app import app

from flask import render_template, redirect, request, session, flash

from flask_app.models.show import Show

@app.route("/new")
def new():

    return render_template("new_show.html")

@app.route('/create_show', methods=['POST'])
def create():
    if not Show.validate_show(request.form):
        # we redirect to the template with the form.
        return redirect('/new')
    # ... do other things
    data = {
        "title": request.form["title"],
        "network": request.form["network"],
        "release_date": request.form["release_date"],
        "description": request.form["description"],
        "login_id" : session["login_id"]
    }

    Show.create_show(data)

    return redirect('/dashboard')

@app.route("/edit_one/<int:id>")
def edit_one(id):
    show = Show.get_one_show({'id':id})
    return render_template("edit_one.html", one_show=show)

@app.route("/update_one/<int:id>", methods=["POST"])
def update_one(id):
    if not Show.validate_show(request.form):
        # we redirect to the template with the form.
        return redirect(f'/edit_one/{id}')
    data = {
        "id": id,
        "title": request.form["title"],
        "network": request.form["network"],
        "release_date": request.form["release_date"],
        "description": request.form["description"],
        "login_id" : session["login_id"]
        }
    Show.update_one(data)
    return redirect(f'/read_one/{id}')

@app.route("/delete_one/<int:id>")
def delete_one(id):
    Show.delete_one({'id':id})
    return redirect('/dashboard')