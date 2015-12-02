var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var chai = require('chai');
var assert = chai.assert;

const pageUrl = "http://localhost:8080/#/returning-volunteer";

describe("ReturningVolunteerPage", () => {

  afterEach(function(done) {
    client.end(done);
  });

  it("takes user to appropriate form after login", (done) => {
    client
        .init()
        .url(pageUrl)
        .setValue('#f_username', 'testlogin@gmail.com')
        .setValue('#f_password', 'catmandudu')
        .click('#submit-login')
        .waitUntil(() => {
          return client.getUrl().then(
            (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/main.+/)}
          )
        }, 10000)
        .getAttribute('input', 'id').then(
          (ids) => {
            ids.forEach((id) => {
              if (id === 'email') {
               client.setValue(`#${id}`, 'testlogin@gmail.com')
             } else if (id === 'dob') {
               let dob = 12121988;
               client.setValue(`#${id}`, dob)
             } else {
               client.setValue(`#${id}`, id)
             }
            })
          }
        )
        .waitForValue('input', 10000)
        .click('#submit-main')
        .waitUntil(() => {
          return client.getUrl().then(
            (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/volunteering-detail.+/)}
          )
        }, 10000)
        .click('#submit-detail')
        // .waitUntil(() => {
        //   return client.getUrl().then(
        //     (url) => {
        //     console.log(url)
        //       return url.match(/^http:\/\/localhost:8080\/\#\/esign.+/)}
        //   )
        // }, 10000)
        // .click('#submit-esign')
        .waitUntil(() => {
          return client.getUrl().then(
            (url) => {
              return url.match(/^http:\/\/localhost:8080\/\#\/done-application.+/)}
          )
        }, 10000)
        .getText('h1').then(
          (text) => assert.strictEqual(text.toLowerCase(), 'thank you')
        ).call(done)

  });
});
