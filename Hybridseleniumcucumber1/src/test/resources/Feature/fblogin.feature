Feature: To test the facebook application.

Scenario Outline:  To test the login funtionality of facebook application.
Given To enter URL and navigate to application.
When To enter "<username>" and "<password>".
Then click the submit button. 
And To test screenshot.
Then Close the browser.

Examples: 
|username|password|
|sakthi|123|
|gerry|456|
|geetha|789|