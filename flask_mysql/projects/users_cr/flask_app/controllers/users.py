from flask_app import app

from flask import render_template,redirect,request

from flask_app.models.user import Users

@app.route("/")
def index():
    # call the get all classmethod to get all
    users = Users.get_all()
    print(users)
    return render_template("index.html", all_users=users)

# relevant code snippet from server.py
@app.route('/create_user', methods=["POST"])
def create_users():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    Users.save(data)
    return redirect('/read')


@app.route("/read")
def read():
    users = Users.get_all()
    print(users)
    return render_template("read.html", all_users=users)


@app.route("/read_one/<int:id>")
def read_one(id):
    user = Users.get_one({'id':id})
    return render_template("read_one.html", one_user=user)


@app.route("/edit_one/<int:id>")
def edit_one(id):
    user = Users.get_one({'id':id})
    return render_template("edit_one.html", one_user=user)

@app.route("/update_one/<int:id>", methods=["POST"])
def update_one(id):
    data = {
        "id": id,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
        }
    Users.update_one(data)
    return redirect(f'/read_one/{id}')

@app.route("/delete_one/<int:id>")
def delete_one(id):
    Users.delete_one({'id':id})
    return redirect('/read')