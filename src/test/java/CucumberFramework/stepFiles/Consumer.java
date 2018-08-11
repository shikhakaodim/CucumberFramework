package CucumberFramework.stepFiles;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;


import CucumberFramework.pageObject.Consumer_page;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import CucumberFramework.pageObject.*;
public class Consumer {
	
	WebDriver driver;

	@Before
	public void setup() {
		ChromeOptions options=new ChromeOptions();
		Map<String, Object> prefs=new HashMap<String,Object>();
		prefs.put("profile.default_content_setting_values.notifications", 1);
		//1-Allow, 2-Block, 0-default
		options.setExperimentalOption("prefs",prefs);
		String path = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver",path+"/chromedriver.exe");		
		//ChromeOptions options = new ChromeOptions();
		//options.addArguments("--enable-notifications");
		this.driver = new ChromeDriver(options);
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		this.driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);

		
	} 
	
	
	@After
	public void tearDown() throws InterruptedException {
		Thread.sleep(3000);
		this.driver.manage().deleteAllCookies();
		this.driver.quit();
		this.driver = null;

		
	}
	

@Given("^Consumer login to Kaodim webiste with email \"([^\"]*)\" and password \"([^\"]*)\"$")
public void consumer_login_to_Kaodim_webiste_with_email_and_password(String arg1, String arg2) throws Throwable {
	Consumer_page Consumerpage = new Consumer_page(driver);

	Consumerpage.login(arg1,arg2);
}

@When("^Consumer search for service using serviceType \"([^\"]*)\" and ServiceArea \"([^\"]*)\"$")
public void consumer_search_for_service_using_serviceType_and_ServiceArea(String arg1, String arg2) throws Throwable {
	Consumer_page Consumerpage = new Consumer_page(driver);

	Consumerpage.search(arg1,arg2);

}

@When("^Consumer click next$")
public void consumer_click_next() throws Throwable {
    
}

@When("^Consumer select date$")
public void consumer_select_date() throws Throwable {
 
}

@When("^Consumer enters numericValue \"([^\"]*)\"$")
public void consumer_enters_numericValue(String arg1) throws Throwable {
 
}

@When("^Consumer enters Text \"([^\"]*)\"$")
public void consumer_enters_Text(String arg1) throws Throwable {

}

@When("^Consumer click on SubmitRequest$")
public void consumer_click_on_SubmitRequest() throws Throwable {

}

@Then("^Consumer should see message \"([^\"]*)\"$")
public void consumer_should_see_message(String arg1) throws Throwable {

}

@Then("^Consumer should be able to successful Login$")
public void consumer_should_be_able_to_successful_Login() throws Throwable {

}


	/**
	@Given("^Consumer navigates to kaodim website$")
	public void consumer_navigates_to_kaodim_website() throws Throwable {
		Thread.sleep(3000);

		driver.get("https://staging.kaodim.com/");
	}

	@When("^Consumer clicks on Login button on Homepage$")
	public void consumer_clicks_on_Login_button_on_Homepage() throws Throwable {
		Thread.sleep(3000);

		driver.findElement(By.xpath("//a[text()='Login']")).click();
	}

	@And("^Consumer enters a valid username$")
	public void consumer_enters_a_valid_username() throws Throwable {
		Thread.sleep(3000);

		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("shikha@kaodim.com");

	}

	@And("^Consumer clicks on Next$")
	public void consumer_clicks_on_Next() throws Throwable {
		Thread.sleep(3000);

		driver.findElement(By.xpath("//button[text()='Next']")).click();
	} 
	
	@And("^Consumer enters a valid password$")
	public void consumer_enters_a_valid_password() throws Throwable {
		Thread.sleep(3000);

		driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("12345");
	}


	@Then("^Consumer should be able to successful Login$")
	public void consumer_should_be_able_to_successful_Login_page() throws Throwable {
		Thread.sleep(3000);

		WebElement userProfile = driver.findElement(By.xpath("//*[@href='/user/profile']"));
		Assert.assertEquals(true, userProfile.isDisplayed());

	}
	
**/
}
