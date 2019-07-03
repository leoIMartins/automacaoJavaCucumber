package br.ce.wcaquino.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class inserirContaSteps {

	private WebDriver driver;
	@Dado("^que estou acessando a aplicação$")
	public void que_estou_acessando_a_aplicação() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\leonardo.martins\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informo_o_usuário(String arg1) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void a_senha(String arg1) throws Throwable {
		driver.findElement(By.name("senha")).sendKeys(arg1);
	}

	@Quando("^seleciono entrar$")
	public void seleciono_entrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^visualizo a página inicial$")
	public void visualizo_a_página_inicial() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Bem vindo, Leonardo Martins!", texto);
	}

	@Quando("^seleciono Contas$")
	public void seleciono_Contas() throws Throwable {
	    driver.findElement(By.linkText("Contas")).click();
	}

	@Quando("^seleciono Adicionar$")
	public void seleciono_Adicionar() throws Throwable {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informo_a_conta(String arg1) throws Throwable {
	    driver.findElement(By.id("nome")).sendKeys(arg1);
	}

	@Quando("^seleciono Salvar$")
	public void seleciono_Salvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^a conta é inserida com sucesso$")
	public void a_conta_é_inserida_com_sucesso() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}

	@Então("^sou notificado que o nome da conta é obrigatório$")
	public void sou_notificar_que_o_nome_da_conta_é_obrigatório() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", texto);
	}

	@Então("^sou notificado que já existe uma conta com esse nome$")
	public void sou_notificado_que_já_existe_uma_conta_com_esse_nome() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
	}
	
	@Então("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String arg1) throws Throwable {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		Assert.assertEquals(arg1, texto);
	}
	
	@Before
	public void inicio() {
		System.out.println("Começando aqui");
	}
	
	/*@After
	public void fecharBrowser() {
		driver.quit();
	}*/
}
