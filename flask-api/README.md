# Student Information Flask App

## Overview

This Flask application serves as a basic management system for student information. Users can add new student records, view details of existing students, and query student information by ID. It's designed with simplicity in mind, providing a straightforward interface for interacting with student data.

## Features

- **Add New Students:** Easily input new student data into the system through a user-friendly form.
- **View Student Information:** Retrieve and display information about students by submitting their unique ID.
- **Dynamic Database Interaction:** The application interacts with a SQLite database, allowing for persistent storage and retrieval of student data.

## Setup & Installation

Ensure you have Python 3.6+ and pip installed on your system before proceeding.

1. Download the ZIP from the repository page and extract it.
2. Create a Virtual Environment (Recommended):
   - Creating a virtual environment is recommended to avoid conflicts with other Python projects or system-wide packages.
   - For Windows:
     ```
     python -m venv venv
     .\\venv\\Scripts\\activate
     ```
   - For macOS and Linux:
     ```
     python3 -m venv venv
     source venv/bin/activate
     ```
3. Install Dependencies:
   - Install all required packages using the requirements.txt file:
     ```
     pip install -r requirements.txt
     ```
     File is present in /venv/Scripts/requirement.txt

## Running the Application

1. Set the Flask application environment variables:
   - For Windows:
     ```
     set FLASK_APP=app.py
     set FLASK_ENV=development
     ```
   - For macOS and Linux:
     ```
     export FLASK_APP=app.py
     export FLASK_ENV=development
     ```
2. Run the application:
    ```
    flask run
    ```

## Interacting with the Application

- Access the web application in your browser at `http://127.0.0.1:5000/`.
- Use the form to add new students or query existing students by ID.
- Student details will be displayed on the web page upon submission.
