import { Selector} from ' testcafe';

const loginInput = Selector("#user_login");
const passwordInput = Selector("#user_password");
const signInButton = Selector("[name='submit]");
const cashAccountTitle = Selector("div.offset2 > h2:nth-of-type(1)");

fixture`Login tests`
.page`http://zero.webappsecurity.com/login.html`



test('A user can login successfully', async t =>{
await t
   .typeText(loginInput,"username",{paste:true})
   .typeText(passwordInput,"password",{paste:true})
   .click(signInButton)
   .expect(cashAccountTitle.exists).ok();
}) ;