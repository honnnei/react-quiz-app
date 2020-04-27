# Installation:
1. npm create-react-app
npm install react-test-renderer
enzyme
reactstrap
3.	npm install redux react-redux

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