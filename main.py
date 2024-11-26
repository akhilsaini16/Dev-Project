from flask import Flask, render_template, request, redirect, url_for
from test import *

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    if request.method == "POST":
        user_input = request.form.get("text_input")  # Get text input from the form

        # pass the input to API
        # function_output = API_call(user_input)

        # result = f"You entered: {user_input}"  # Process the input (example: just echo it)
        # print(user_input)
        
        # result = function_output
        result = user_input
    print(f"method: {request.method}")
    return render_template("index3.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)