import csv
import json 
from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)

@app.route("/train")
def App():
  with open('input_data_train.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
      print(row[0])
      out = "works" #json.dumps([row for row in reader])        
  return out


@app.route("/upload", methods=['POST'])
def Upload():
  if request.method == 'POST':
    print('got')
    if 'file' not in request.files:
      return "no files selected"
    file = request.files['file']
    print(file)
    return "upload"



