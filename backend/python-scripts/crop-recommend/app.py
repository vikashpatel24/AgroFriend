from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Loading my machine learning model
try:
    model = joblib.load('./crop_recommendation_model.joblib')
except Exception as e:
    print(f"Error loading the machine learning model: {str(e)}")
    model = None

@app.route('/')
def home():
    return "Welcome to Crop Recommendation API!"

@app.route('/api/crop-recommendation', methods=['POST'])
def crop_recommendation():
    if model is None:
        return jsonify({'error': 'Machine learning model not available'}), 500

    try:
        data = request.json

        features = [
            float(data['nitrogen']),
            float(data['phosphorus']),
            float(data['potassium']),
            float(data['temperature']),
            float(data['humidity']),
            float(data['pH']),
            float(data['rainfall']),
        ]

        # Making predictions using my machine learning model
        prediction = model.predict([features])[0]

        # Returning the prediction as JSON
        return jsonify({'prediction': prediction})

    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
