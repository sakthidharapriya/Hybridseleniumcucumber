package com.stepdefinition;


	

	import com.baseclass.Library;
	import com.pages.LoginPage;
	import com.reusablefunctionlogin.SeleniumUtilityLogin;

	import io.cucumber.java.en.Given;
	import io.cucumber.java.en.Then;
	import io.cucumber.java.en.When;

	public class LoginStepDef extends Library {
		SeleniumUtilityLogin su;
		LoginPage lpage;
		@Given("To enter URL and navigate to application.")
		public void to_enter_URL_and_navigate_to_application() {
			browserSetUp();
			logger.info("Launched browser");
		  
		}

		@When("To enter {string} and {string}.")
		public void to_enter_and(String username, String password) {
			lpage=new LoginPage(driver);
			lpage.login(username,password);
			logger.info("enter username and password");
		   
		}

		@Then("click the submit button.")
		public void click_the_submit_button() {
			su = new SeleniumUtilityLogin(driver);
			
		}

		@Then("To test screenshot.")
		public void to_test_screenshot() {
			su.to_take_screenshot("src/test/resources/Screenshot/facebook.png");
			logger.info("screenshot");
			
		}

		@Then("Close the browser.")
		public void close_the_browser() {
			tearDown();    
			logger.info("browserclose");
		}



	}


