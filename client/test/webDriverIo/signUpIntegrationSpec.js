var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var chai = require('chai');
var assert = chai.assert;

var pageUrl = "http://localhost:8080/#/new-volunteer";

describe('NewVolunteerPage', () => {

  afterEach(function(done) {
    client.end(done);
  });

  it("displays form with 12 input fields and 2 selects", (done) => {
    client
        .init()
        .url(pageUrl)
        .elements('input', (err, elements) => {
          assert.strictEqual(elements.value.length, 12);
        })
        .elements('select', (err, elements) => {
          assert.strictEqual(elements.value.length, 2);
        })
        .call(done);
  });

  it("correctly loads next page on form submission", (done) => {
    client
        .init()
        .url(pageUrl)
        .setValue('input', 'asdf bowow') 
  });
});
