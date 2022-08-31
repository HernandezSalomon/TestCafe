import { Selector, t } from 'testcafe';
import config from '../Utilities/config.json';
const user = config.users; 
export default class LoginPage {
     constructor(){
        
         this.LoginBtn = Selector('#signin_button')
         this.userName = Selector('#Username');
         this.password = Selector('#Credential')
         this.nxtBtn = Selector('.fa-arrow-right')
         this.singInBtn = Selector('.btn')
         this.AccountSummayLink = Selector('#studiesButton')
         this.LoginFailedError = Selector('.alert-error')
     }
     
    async LoginWithValidUser(){
        await t  
        .wait(2000)
        .typeText(this.userName, user.username)
        .click(this.nxtBtn)
        .typeText(this.password, user.password)
        .click(this.singInBtn)

    }
    async LoginWithInValidUser(){
        await t  
        .wait(2000)
        .click(this.LoginBtn)
        .typeText(this.userName, user.username+"dgdss")
        .click(this.password)
        .pressKey('ctrl+a delete')
        .typeText(this.password, user.password+"gfd")
        .click(this.singInBtn)
        .wait(3000)
    }
}