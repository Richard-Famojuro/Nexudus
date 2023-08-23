# Nexudus Automation Tester Interview 

## Webdriver automatic testing with Playwright

### Problem
Using your preferred web driver, build an automation test suite for the following test cases.
Record the execution of the test suite. Preferably test cases written in a BDD format and produce test automation report.
Nexudus uses Playwright tests written in JavaScript, so this would be the ideal driver and language to use.
Please upload code for the test suite to the github.com and send us the link with instructions, how to run the code.

### Introduction
The solution was done with Playwright just to conform with the company framework of choice, however as this was my first 
project with playwright, I used typescript.
This solution is written with BDD design using Cuccumber feature files and PageObject concept.

### Assumption
* The password provided for the scenario does not allow user login, hence the credentials for the manual test was used
* There were slight modifications for the scenarios, for example the step on submitting the form was missing, this was added

### How to run the test
# Method 1
* Make sure you have on your machine the latest version of nodejs and yarn
* Install the dependencies with `$ yarn install`
* To run all the test suits use: `$ yarn test`
* For specific tags in this solution, use:
  * `$ yarn test:login` to run only login feature
  * `$ yarn test:product` to run on ly the product feature
# Method 2
You can use playwright to run this code
* Install Playwright Test extension on VS code or Maestro on Intellij
* To run all the test suits use: `npx cucumber-js`
* For specific tags in this solution, use:
  * `npx cucumber-js --tags @login` to run only login feature
  * `npx cucumber-js --tags @product` to run on ly the product feature
* You can also run the tests in parallel and specific files

# Report
# Method 1
*After running the test with ‘yarn test’
* use this link generated from the terminal to view the reports for the scenarios 
(https://reports.cucumber.io/reports/d3cde3f3-a673-4cab-82a0-45ac0ff4b9f9)
# Method 2
After running the test with the playwright code E.g  npx cucumber-js --tags @product --publish
* use this link generated from the terminal to view the reports for the scenarios 
https://reports.cucumber.io/reports/027f117d-a6c8-41bb-9d02-66369ed61054

### Improvement
* Configure baseUrl and supply only url paths when using `goto(*)` function of playwright
