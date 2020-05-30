'use strict';

class LoginPage {

	get email () {
        return new Promise((resolve, reject) => {
            element(by.xpath('//input[@name = \'userid\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//input[@name = \'userid\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error in retrieving the email.' + url);
                    });
                }
            });
        });
    };

    get password () {
        return new Promise((resolve, reject) => {
            element(by.xpath('//input[@name = \'passwd\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//input[@name = \'passwd\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error in retrieving the password.' + url);
                    });
                }
            });
        });
    };

    get btnLogIn () {
    	return new Promise((resolve, reject) => {
    		element(by.xpath('//button[text()=\'Log In\']')).isPresent().then((present) => {
    			if (present) {
    				resolve(element(by.xpath('//button[text()=\'Log In\']')))
    			} else {
    				browser.getCurrentUrl().then((url) => {
    					reject('Error retrieving login button.' + url);
    				});
    			}
    		});
    	}); 
    }

	set_email(email_address) {
		let _this = this;
		let email = _this.email;
		return email.then((_email) => {
		    email = _email;
		    return email.clear();
		}).then(() => {
		    return email.sendKeys(email_address);
		}).catch((err) => {
		    return Promise.reject(err);
		});
	};

	set_password(pw) {
		let _this = this;
		let password = _this.password;
		return password.then((_password) => {
			password = _password;
			return password.clear();
		}).then(() => {
			return password.sendKeys(pw);
		}).catch((err) => {
			return Promise.reject(err);
		});
	};

	login() {
		let _this = this;
		let btnLogIn = _this.btnLogIn;
		return btnLogIn.then((_btnLogin) => {
			btnLogIn = _btnLogin;
			return btnLogIn.click();
		}).catch((err) => {
			return Promise.reject(err);
		});
	};

};

module.exports = new LoginPage();