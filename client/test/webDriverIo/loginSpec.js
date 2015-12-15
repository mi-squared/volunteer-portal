var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var chai = require('chai');
var assert = chai.assert;
// var url = require()

const loginUrl = "http://localhost:8080/#/returning-volunteer";
// const loginUrl = "http://pth.mi-squared.com/#/returning-volunteer";

describe("ReturningVolunteerPage", () => {

  afterEach(function(done) {
    client.end(done);
  });

  it("appends appropriate inputs when radio buttons are toggled", (done) => {
    client
        .init()
        .url(loginUrl)
        .setValue('#f_username', 'testlogin@gmail.com')
        .setValue('#f_password', 'catmandudu')
        .click('#submit-login')
        .waitUntil(() => {
          return client.getUrl().then(
            (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/main.+/)}
          )
        }, 10000)
        .getAttribute('input[value="true"]', "id").then((ids) => {
          ids.forEach((id) => {
            client.click(`#${id}`)
          })
        })
        .elements('input', (err, elements) => {
          console.log(elements.value.length);
          assert.strictEqual(elements.value.length, 24);
        })
        .call(done)
  });

});
