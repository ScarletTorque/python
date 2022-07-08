from flask_app import app

from flask import render_template,redirect,request,session

from flask_app.models.email import Email

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/register', methods=['POST'])
def register():
    if not Email.validate_email(request.form):
        # we redirect to the template with the form.
        return redirect('/')
    # ... do other things
    data = {
    "email" : request.form["email"],
    }
    Email.create_email(data)
    return redirect('/success')



@app.route('/success')
def show_user():
    emails = Email.get_all_emails()
    return render_template('success.html', emails = emails)