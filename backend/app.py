from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/assess": {"origins": "http://localhost:3000"}})

# Load a pre-trained sentiment analysis model
sentiment_analyzer = pipeline("sentiment-analysis")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    tweet = data['text']
    
    # Analyze sentiment of the tweet
    sentiment_results = sentiment_analyzer(tweet)
    
    # Format the response
    sentiment = sentiment_results[0]['label']
    sentiment_response = {
        'sentiment': 'Positive: you are okay' if sentiment == 'POSITIVE' 
                    else 'Negative: ask our chatbot' if sentiment == 'NEGATIVE' 
                    else 'Neutral'
    }
    
    return jsonify(sentiment_response)

@app.route('/assess', methods=['POST'])
def assess():
    try:
        data = request.get_json()
        print("Received data for assessment:", data)  # Debugging line

        # Extract name, email, and answers from the received data
        name = data.get('name')
        email = data.get('email')
        answers = data.get('answers')

        # Check if answers were provided
        if answers is None:
            return jsonify({"error": "Answers input is required"}), 400

        # Analyze sentiment of each answer
        sentiment_results = sentiment_analyzer(answers)

        # Create assessment result with sentiments
        assessment_result = {
            "name": name,
            "email": email,
            "answers": answers,
            "sentiments": [result['label'] for result in sentiment_results]
        }

        return jsonify({'status': 'success', 'data': assessment_result})
    except Exception as e:
        print(f"Error in assess route: {e}")
        return jsonify({"error": "An error occurred while processing the request"}), 500

if __name__ == '__main__':
    app.run(debug=True)
