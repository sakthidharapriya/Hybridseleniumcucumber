package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.Library;

public class LoginPage extends Library {
	//WebDriver driver;
	@FindBy(id="email")
	WebElement username;
	@FindBy(id="pass")
	WebElement pwd;
	@FindBy(id="u_0_b")
	WebElement Loginbutton;
	
	public LoginPage(WebDriver driver)  {
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
		
}
	public void login(String uname,String pass) {
		username.sendKeys(uname);
		pwd.sendKeys(pass);
		
		Loginbutton.click();
		
	}

}
