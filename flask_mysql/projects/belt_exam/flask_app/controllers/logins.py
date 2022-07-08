from flask_app import app

from flask import render_template, redirect, request, session, flash

from flask_app.models.login import Login
from flask_app.models.show import Show

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/register', methods=['POST'])
def register():
    if not Login.validate_register(request.form):
        # we redirect to the template with the form.
        return redirect('/')
    # ... do other things
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password": request.form["password"],
        "conf_pass": request.form["conf_pass"],
    }
    data["password"] = pw_hash = bcrypt.generate_password_hash(request.form['password'])

    new_login_id = Login.create_login(data)

    session["login_id"] = new_login_id

    return redirect('/dashboard')


@app.route('/dashboard')
def dashboard():
    data ={
        "login_id" : session["login_id"]
    }

    login = Login.get_by_id(data)
    all_shows = Show.get_show()
    print(all_shows)

    return render_template('dashboard.html', login = login, shows = all_shows)

@app.route("/read_one/<int:id>")
def get_one(id):
    user = Show.get_one_show({'id':id})
    return render_template("read_one.html", one_show=user)


@app.route('/login', methods=["POST"])
def login():
    data = {
        "email" : request.form["email"],
        "password" : request.form["password"]
    }

    if not Login.validate_login(data):
        return redirect("/")

    login = Login.get_login(data)

    session["login_id"] = login.id

    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
