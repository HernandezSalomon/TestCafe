import { Selector } from 'testcafe';
import config from '../Utilities/config.json';
import LoginPage from '../Pages/LoginPage';

const loginPage = new LoginPage();


fixture `Login Page Auatomation`
    .page(config.url)


    
test('1) Login with Valid UserName and Password', async t => { 
    await loginPage.LoginWithValidUser();
    await t
       .maximizeWindow()
       .wait(10000) 
       .expect(loginPage.AccountSummayLink.exists).ok();         
})
.meta('smoke', 'true').meta('regression', 'true').meta('platform', 'Web');