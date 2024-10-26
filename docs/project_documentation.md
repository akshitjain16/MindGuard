# MindGuard Project Documentation

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [System Architecture](#system-architecture)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Model Integration](#model-integration)
  - [Database](#database)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [Dependencies and Limitations](#dependencies-and-limitations)
- [Future Enhancements](#future-enhancements)
- [Authors and Contributors](#authors-and-contributors)
- [Acknowledgments](#acknowledgments)

---

## Introduction

**MindGuard** is a web-based mental health support application that provides a platform for users to assess their mental health, receive feedback, interact with a chatbot for additional support, and engage in a community where they can share experiences anonymously. The project aims to detect signs of a mental health crisis through user interaction while maintaining privacy and encouraging community support.

---

## Project Overview

### Project Name
**MindGuard**

### Description
MindGuard helps individuals self-assess their mental health through a quick questionnaire and sentiment analysis of their responses. It offers feedback and suggests further actions based on the assessment. The application also includes a chatbot for instant support and a community feature where users can participate in discussions anonymously.

---

## Problem Statement

### IDEAL
- Provide a reliable platform for users to self-assess mental health.
- Create a supportive online community to discuss mental health issues anonymously.
- Offer resources to guide users towards help when needed.

### REALITY
- Many people face challenges in finding adequate mental health support or hesitate to seek help due to stigma.
- There's a lack of easily accessible online tools for preliminary mental health assessment.

### CONSEQUENCES
- Mental health issues may remain unaddressed, leading to adverse effects on individuals' well-being.
- The absence of early intervention can result in increased risks associated with severe anxiety, depression, and other mental health conditions.

---

## Solution

MindGuard provides:
1. **Mental Health Assessment:** Users answer a series of questions to gauge their mental well-being, with real-time sentiment analysis applied to their responses.
2. **Chatbot Support:** An AI-powered chatbot offers support, guidance, and resources.
3. **Community Feature:** Anonymous chat rooms for users to share their experiences and seek peer support.

---

## System Architecture

The application is divided into three main components:
1. **Frontend:** Built with React, provides the user interface for assessment, chat, and community features.
2. **Backend:** Developed using Flask, it handles request processing, user management, and AI model integration.
3. **Machine Learning Model:** A sentiment analysis model (pretrained Naive Bayes) analyzes user responses.

---

## Features

1. **Mental Health Assessment**
   - Users complete a set of questions regarding their mental state.
   - Real-time sentiment analysis is performed using a machine learning model.
   - Feedback is provided based on the analysis.

2. **Chatbot**
   - Provides conversational support.
   - Suggests resources and guides users towards help.

3. **Community**
   - Anonymous chat rooms allow users to share their experiences.
   - Supports text and potential voice chat in future updates.

4. **Games for Stress Relief**
   - Users can access stress-relief games from the "Games" section.

---

## Project Structure


---

## Technical Details

### Frontend
- **Framework:** React
- **Styling:** Tailwind CSS, Bootstrap, Material-UI
- **Authentication:** Managed using Clerk for user authentication.

### Backend
- **Framework:** Flask
- **APIs:** REST APIs to handle user data and model predictions.
- **Sentiment Analysis Model:** Uses a pretrained Naive Bayes model for analyzing user responses.
- **CORS Handling:** Configured to allow cross-origin requests.

### Model Integration
- **Model Used:** A Naive Bayes model trained on sentiment analysis data.
- **Preprocessing:** Input text is preprocessed before being analyzed (lowercasing, removal of special characters, etc.).
- **Model Training:** Implemented using scikit-learn with data from various mental health datasets.

### Database
- **MongoDB (Future Integration):** Will be used for storing user data and community interactions.

---

## Getting Started

### Prerequisites
- **Python 3.x**
- **Node.js and npm**
- **MongoDB** (optional)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/mindguard.git
   cd mindguard
