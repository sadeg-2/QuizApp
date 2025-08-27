# Quiz App Technical requirements
The app is a single page to show multi questions With the possibility of answering them 
and show final feedback

## Folder Structure 
 - `modules` folder :
    - `Answers.js` class represent the user answer with result
    - `QustionBank.js` class contains questions to select from it
    - `Questions.js` class represent the main question 
    - `Quiz.js` class contains functionality to render the ui of the single app
    - `Storage.js` class to manage the local storage and save user answers

 - `diagram.drawio` diagram to show the logical relation between the classes
 - `index.html` the main structure of the app (entry point)
 - `style.css` the css style of the app
 - `main.js` the logic added to the app 

## Requirements  
    1. form container to show list of questions:
        - container should have a good appearance 
        - should appear order to question in the container
        - container also have an progress bar 
    2.render the questions:
            - initiate Quiz class
            - select random questions from Bank 
            - create the question element
            - append it in the container
    3. question should show multiple options 
        - allows only one selected option
    4.When question answered:
            - update the progress bar
            - save the answer in storage
            - add the result in the quiz class
    5. Handle reset button:
        - clear the answers in storage 
        - reset the progress bar 
        - clear the result in quiz class
    6. Handle submit button:
        - hide the containers of questions
        - show container of result:
            - get the result of the attempt 
            - calculate the percentage of correct answers 
            - if percentage ≥ 70% then render to the user pass else render fail
    7. When reloading the page : 
        -  before finishing : 
            - get list of answers from local storage
            - loop in the list create questions element
            - if question answered show the user answer 

        - after finishing :
            - initiate the page
            - render the questions
    