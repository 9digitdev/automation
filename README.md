# UI automation coding challange

## Exercise QA Automation: A smoke test to verify the landing page functionality

This code runs 2 simple ui automated smoke tests using jest playwright framework. The framework uses a page object model. Tests are in  ./src/tests and models are in ./src/models. the main purpose for this approach is to keep tests clean and easy to read. With the adoption of vue and react for modern user interfaces (UI) having automated test created in the same coding language as the UI helps with adoption of the test suite. Using the Jest Playwright framework it allows for testing with chromium, firefox and  webkit browser with no additional coding changes. 

### steps to run tests  

Run the following commands from a command prompt on Mac or Linux  
* yarn install  
* yarn test


### To run tests headless or headed (with a visible browser) update the launch options in the jest-playwright.config.js file.  



**Headed or with a visible browser**  

---
launchOptions: {  
      headless: false  
    }  

---



**Headless**  

---
launchOptions: {  
      headless: true  
    }  

---

### view test results

Test results are stored in ./testresults  
jest-junit.xml  
results.html  


### Screen recording  
A screen recording is provided of the tests running both tests in all three browsers  
Smoke-test-recording.mov