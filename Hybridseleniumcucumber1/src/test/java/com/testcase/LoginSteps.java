
package com.testcase;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
import java.io.IOException;
import com.baseclass.Library;
import com.pages.LoginPage;

import com.reusablefunctionlogin.SeleniumUtilityLogin;

public class LoginSteps extends Library {
	SeleniumUtilityLogin su;
	LoginPage lpage;
	@BeforeClass
	public void startUp() {
		browserSetUp();
		logger.info("Launched browser");
	}
	@Test
	public void login() {
		lpage=new LoginPage(driver);
		lpage.login(properties.getProperty("username"), properties.getProperty("password"));
		logger.info("enter username and password");
	}
	@AfterClass
	public void close() throws IOException {
		su = new SeleniumUtilityLogin(driver);
		su.to_take_screenshot("src/test/resources/Screenshot/freecrm.png");
		logger.info("screenshot");
		tearDown();

	}

}
