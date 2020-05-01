# Installation:
1. download the repo
2. npm install
3. npm start
4. npm test -- --coverage --watchAll=false

## Day 1
# We did:
- added components
- changed our organisation of components due to passing state and routing
- got a working form, and displaying questions and answers from the API
- some tests passing
# Tried doing:
- attempted using Redux but decided against it as it's quite complex
- had a lot of chellenged with passing data to state between components whilst rendering the corrent elements --> fixed it using params in Route and Link
- struggled with the api encoding - fixed it by decoding it(atob), however, there are still occasional encoding errors in the text
- struggled to test the fetch api function

# Features to implement:
- different types of questions (atm its only multiple choice)
- displaying the category name during the quiz
- showing Score details - which player answered which question correctly

# Day 2 
- trying to display the questions & answers and save the data through state
- multiple users functionality
- trying to then display questions one by one


# Day 3 Stand Up:
- Priority: combine single questions and what we've got 
- Priority: adding score page
- Extra: adding feedback in scores (which question you got right and wrong)
- Extra: if we have time today - writing to a file - Past Scores Page

# Day 4 Stand Up:
- focus on tests and styling
- add Score Page winner 

# Day 5 Stand Up
- goal is - finish all the tests and make sure they pass
- finish styling
- clean up the code
- add documentation
- prepare the presentation
- fix the yellow errors
- do the retro

# Approach
- focusing on MVP minimum viable product - building the easiest form of the function and then adding on top of it 
- aiming for test coverage around 80%

# Tech
- react
- initially used reactstrap
- initially considered using Redux but decided against it

# What we've learnt:
- functionality tests
- passing props through the Link (props.location)
- working with params

# Challenged we overcome:
- passing state through the Link
- giving mock props and params to components in tests
- struggling to iterate through one Question component with different prop - hence we added the Next Question component which displays the correct answer :)

# Struggles:
- 

# What we would do differently:
- using buttons instead of radio buttons for choosing an answer for styling purposes
- being more consistent with passing data (not mixing props and params etc)
- cleaning up the state a bit (only saving a player's name once its entered etc not onChange) 
- Past Scores Page - saving past data to a file or a database

# RETRO


