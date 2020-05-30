
'use strict'

let config = require('../../../config/urls.js');
let loginPage = require('../../pages/login_page.js')
let data = require("../../..//data/data.js");

browser.ignoreSynchronization = true;


describe('Login test: ', function() {

  beforeEach((done) => {
    browser.waitForAngularEnabled(false);
    browser.get(config.url.login.baseUrl).then(() => {
        done();
    });
  });

  it('Successful login test- ', function() {

    browser.driver.manage().deleteAllCookies().then(() => {
    }).then(() => {
        return browser.driver.manage().window().maximize();
    }).then(() => {
        return loginPage.set_email(data.data.prod.email);
    }).then(() => {
        return loginPage.set_password(data.data.prod.password);
    }).then(() => {
        return loginPage.login();
    }).catch((err) => {
        return Promise.reject (err);
    });

  });


  afterEach((done) => {
    browser.get("https://login.yahoosmallbusiness.com/logout").then(() => {
        done();
    });
  });


});

  