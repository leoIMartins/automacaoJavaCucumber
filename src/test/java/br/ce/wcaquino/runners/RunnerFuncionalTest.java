package br.ce.wcaquino.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",	//Caminho das features
		glue = "br.ce.wcaquino.steps",		//Caminho dos steps
		tags = {"@funcionais"},				//Executa apenas os cenários/funcionalidades que possuem "@tag" -- ignora os que possuem "~@tag"
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},					//Muda a apresentação do teste no console. Entre chaves {} para permitir mais que um
		monochrome = true,					//Tira os caracteres especiais do console após execução ou adiciona cores no terminal do SO
		snippets = SnippetType.CAMELCASE,	//Métodos seguem padrão "queCrieiOArquivoCorretamente"
		dryRun = false,						//Não executa os testes. Valida se o mapeamento está correto
		strict = false						//Se algum passo do .feature não estiver na classe, Junit acusa erro
		)
public class RunnerFuncionalTest {

	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver", "path/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
		driver.findElement(By.id("email")).sendKeys("leonardo_ignacio2010@hotmail.com");
		driver.findElement(By.name("senha")).sendKeys("lsb123");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}

}
