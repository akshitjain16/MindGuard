<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">MindGuard</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> A web application designed to provide mental health assessments, chatbot support, and community features for users to share their experiences anonymously.
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 Problem Statement ](#-problem-statement-)
- [💡 Idea / Solution ](#-idea--solution-)
- [⛓️ Dependencies / Limitations ](#️-dependencies--limitations-)
- [🚀 Future Scope ](#-future-scope-)
- [🏁 Getting Started ](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [🎈 Usage ](#-usage-)
- [⛏️ Built With ](#️-built-with-)
- [✍️ Authors ](#-authors-)
- [🎉 Acknowledgments ](#-acknowledgments-)

## 🧐 Problem Statement <a name = "problem_statement"></a>

- **IDEAL**: Create an accessible platform where individuals can assess their mental health and receive immediate feedback based on their responses.
- **REALITY**: Many individuals struggle to find resources and support for their mental health needs, leading to isolation and unaddressed issues.
- **CONSEQUENCES**: Without proper support, users may experience deteriorating mental health, increased anxiety, and a lack of community.

## 💡 Idea / Solution <a name = "idea"></a>

MindGuard provides users with a quick mental health assessment, analyses their responses using a sentiment analysis model, and offers chatbot support for further engagement. The community feature allows users to share their experiences and seek advice anonymously.

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- **Dependencies**: 
  - Flask for backend development
  - React for frontend development
  - Joblib for loading models
  - sklearn for machine learning
  - Pretrained sentiment analysis model (Naive Bayes)

- **Limitations**:
  - The current sentiment analysis is based on a pretrained model, which may not be fully tailored to specific mental health contexts.
  - User data privacy and security must be prioritized, and measures to ensure compliance with regulations need to be established.

## 🚀 Future Scope <a name = "future_scope"></a>

In the future, we aim to implement more sophisticated AI models for better sentiment analysis, enhance the chatbot features for personalized guidance, and expand community capabilities to include live chat rooms and support groups.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.x
- Node.js and npm
- MongoDB (optional, if you plan to implement database functionality)

### Installing

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akshitjain16/mindguard.git
   cd mindguard

```
cd backend
pip install -r requirements.txt
python app.py
```

Set up the frontend:
```
cd frontend
npm install
npm start
```

## 🎈 Usage <a name="usage"></a>

Navigate to http://localhost:3000 to access the application.
Complete the mental health assessment by answering the provided questions.
Receive immediate feedback based on your responses.
Engage with the chatbot for additional support.

## ⛏️ Built With <a name = "tech_stack"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@akshitjain](https://github.com/akshitjain16) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors)
who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Inspiration from various mental health resources and communities.
- Special thanks to those whose code or ideas were helpful in the development process.
