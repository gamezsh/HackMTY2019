import csv
import json 
from flask import Flask
from flask_cors import CORS
from flask import request
import pandas as pd
import numpy as np
import matplotlib.pylab as plt

app = Flask(__name__)
CORS(app)

@app.route("/train")
def App():
  data = pd.read_csv('input_data_train.csv')
  print(data.head())
  return "data"


@app.route("/upload", methods=['POST'])
def Upload():
  if request.method == 'POST':
    print('got')
    if 'file' not in request.files:
      return "no files selected"
    file = request.files['file']
    print(file)
    return "upload"



