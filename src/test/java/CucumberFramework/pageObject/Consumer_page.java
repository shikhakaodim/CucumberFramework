package CucumberFramework.pageObject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Consumer_page {
   WebDriver driver;

	
	public Consumer_page(WebDriver driver) {
	this.driver = driver;
	}

	public void login(String username,String password) throws InterruptedException
	{
		driver.get("https://staging.kaodim.com/");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//a[text()='Login']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("shikha@kaodim.com");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[text()='Next']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("12345");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[text()='Next']")).click();
		Thread.sleep(1000);
		WebElement userProfile = driver.findElement(By.xpath("//*[@href='/user/profile']"));
		Thread.sleep(1000);
		Assert.assertEquals(true, userProfile.isDisplayed());
	}
	
	public void search(String serviceType,String serviceArea) throws InterruptedException
	{
		Thread.sleep(1000);
		driver.findElement(By.xpath(".//*[@id='root']/div/div/div/header/section/span/button")).click();
		
	}
}
