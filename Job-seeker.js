import { Selector} from ' testcafe';

const firstNameInput = Selector("body > app-root > app-layout-blank > div > app-authentication > div > div > div.d-flex.col-lg-4.align-items-center.bg-white.p-4.p-md-5 > div > div > app-register > div:nth-child(3) > app-jack-signup > form > div.form-row > div:nth-child(1) > input");
const lastNameInput = Selector("body > app-root > app-layout-blank > div > app-authentication > div > div > div.d-flex.col-lg-4.align-items-center.bg-white.p-4.p-md-5 > div > div > app-register > div:nth-child(3) > app-jack-signup > form > div.form-row > div:nth-child(2) > input");
const mobileSelect = Selector("body > app-root > app-layout-blank > div > app-authentication > div > div > div.d-flex.col-lg-4.align-items-center.bg-white.p-4.p-md-5 > div > div > app-register > div:nth-child(3) > app-jack-signup > form > div:nth-child(2) > div > select");
const mobileInput = Selector("body > app-root > app-layout-blank > div > app-authentication > div > div > div.d-flex.col-lg-4.align-items-center.bg-white.p-4.p-md-5 > div > div > app-register > div:nth-child(3) > app-jack-signup > form > div:nth-child(2) > div > input");
const emailInput = Selector("body > app-root > app-layout-blank > div > app-authentication > div > div > div.d-flex.col-lg-4.align-items-center.bg-white.p-4.p-md-5 > div > div > app-register > div:nth-child(3) > app-jack-signup > form > div:nth-child(4) > input");
const registerButton = Selector("[name='submit]");

fixture`Jobseeker tests`
.page`https://app.jobjack.co.za/auth?jack=true`



test('A user should be able to  signup successfully', async t =>{
await t
   .typeText(firstNameInput,"Hannah",{paste:true})
   .typeText( lastNameInput,"Dalwai",{paste:true})
   .click(mobileSelect.withText('+27'))
   .typeText( mobileInput,"0745250800",{paste:true})
   .typeText( emailInput,"hannahdalwai4@gmail.com",{paste:true})
   .click(registerButton)
   .expect(Entry-LevelJobs.exists).ok();
}) 