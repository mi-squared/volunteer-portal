var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var chai = require('chai');
var assert = chai.assert;

import {login, getApplication}  from '../../src/client.js';


const pageUrl = "http://localhost:8080/#/new-volunteer";

let randNum100 = () => {
  return Math.floor(Math.random() * 100)
}


describe('NewVolunteerPage', () => {

  afterEach(function(done) {
    client.end(done);
  });

  // it("displays form with 12 input fields and 2 selects", (done) => {
  //   client
  //       .init()
  //       .url(pageUrl)
  //       .elements('input', (err, elements) => {
  //         assert.strictEqual(elements.value.length, 12);
  //       })
  //       .elements('select', (err, elements) => {
  //         assert.strictEqual(elements.value.length, 2);
  //       })
  //       .call(done);
  // });
  //
  // it("correctly loads next page on form submission", (done) => {
  //   client
  //       .init()
  //       .url(pageUrl)
  //       .setValue('input', 'asdfbowow')
  //       .addValue('#email', Math.random() * 10000 + '@gmail.com')
  //       .selectByIndex('select', 1)
  //       .click('#submit')
  //       // .waitForVisible('#thank-you', 10000)
        // .waitUntil(() => {
        //   return client.getUrl().then(
        //     (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/do-register.+/)}
        //   )
        // }, 10000)
  //       .getText('h1').then((text) => {
  //         assert.strictEqual(text, 'Volunteer Application')
  //       }).call(done)
  //
  // });

  // it("sends correct payload matching user inputs", (done) => {
  //   let emailPassword;
  //   client
  //       .init()
  //       .url(pageUrl)
  //       .selectByIndex('select', 3)
        // .getAttribute('input', 'id').then(
        //   (ids) => {
        //     ids.forEach((id) => {
  //             if (id === 'email') {
  //               email = id + randNum100() * randNum100() + '@gmail.com';
  //               client.setValue(`#${id}`, emailPassword)
  //             } else if (id === 'password') {
  //               client.setValue(`#${id}`, emailPassword)
  //
  //             // } else if (id === 'dob') {
  //             //   var dob = "12121980"
  //             //   client.setValue(`#${id}`, dob) //dob value gets scrambled and date validation prevents form from submitting
  //
  //             } else {
  //               client.setValue(`#${id}`, id + randNum100()) // date validation doesn't kick in here mysteriously
  //             }
  //           })
  //         }
  //       ).call(done)
  // });

});
