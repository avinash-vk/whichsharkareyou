from flask import Flask,request
from predictor import predictImage
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/api/predict',methods = ['POST'])
def createUser():
    try:    
        file_name = request.files.get('image','')
        classname = predictImage(file_name)
        return {'class':str(classname)}
    except:
        return {'error':'error!'}

app.run()