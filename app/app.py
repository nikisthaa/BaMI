import os
from flask import Flask, render_template

app = Flask(__name__)

app.config['STATIC_FOLDER'] = "static"

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 3111))
    app.run(host='0.0.0.0', port=port)
