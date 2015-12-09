var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var chai = require('chai');
var assert = chai.assert;
import http from "http";
import querystring from "querystring";

const regUrl = "http://localhost:8080/#/new-volunteer";
const loginUrl = "http://localhost:8080/#/returning-volunteer";
const prodHost = 'pth.mi-squared.com';
const prodPort = '80';
const devHost = 'localhost';
const devPort = '7771';

let randNum100 = () => {
  return Math.floor(Math.random() * 100)
}


describe('NewVolunteerPage', () => {

  afterEach((done) => {
    client.end(done);
  });

  it("displays form with 12 input fields and 2 selects", (done) => {
    client
        .init()
        .url(regUrl)
        .elements('input', (err, elements) => {
          assert.strictEqual(elements.value.length, 12);
        })
        .elements('select', (err, elements) => {
          assert.strictEqual(elements.value.length, 2);
        })
        .elements('input', (err, elements) => {
          assert.strictEqual(elements.value.length, 12);
        })
        .elements('select', (err, elements) => {
          assert.strictEqual(elements.value.length, 2);
        })
        .call(done);
  });

  it("sends correct payload matching user inputs", (done) => {
    let emailPassword = "",
        clientApplicationObj = {},
        serverApplicationObj = {},
        token,
        applicationID;

    client
        .init()
        .url(regUrl)
        .selectByIndex('select', 1)
        .getAttribute('input', 'id').then(
          (ids) => {
            ids.forEach((id) => {
              if (id === 'email') {
                emailPassword = id + randNum100() * randNum100() * randNum100() + '@gmail.com';
                clientApplicationObj[id] = emailPassword;
                client.setValue(`#${id}`, emailPassword)
              } else if (id === 'password') {
                client.setValue(`#${id}`, emailPassword)
              } else if (id === 'dob') {
                let dob = '12121981';
                clientApplicationObj[id] = dob;
                client.moveToObject(`#${id}`, 0, 0) //dob value gets scrambled without moveToObject and date validation prevents form from submitting
                .leftClick()
                .setValue(`#${id}`, dob)
              } else {
                clientApplicationObj[id] = id + randNum100();
                client.setValue(`#${id}`, clientApplicationObj[id])
              }
            })
          }
        )
        .waitForValue('input', 10000)
        .waitForValue('input#dob', 10000)
        .click('#submit')
        .waitUntil(() => {
          return client.getUrl().then(
            (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/do-register.+/)}
          )
        }, 10000)
        .then(
          () => {
            let loginData = querystring.stringify({
              'username' : emailPassword,
              'password' : emailPassword
            });
            let options = {
              host: devHost,
              port: devPort,
              path: '/api/v1/accounts/login',
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(loginData)
              }
            };
            let post_req = http.request(options, postCallback)
            post_req.write(loginData)
            post_req.end()
          }
        )
      .click("#submit-register")
      .waitUntil(() => {
        return client.getUrl().then(
          (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/main.+/)}
        )
      }, 10000)
      .waitForValue('#dob', 10000)
      .getAttribute('select', 'id').then(
        (ids) => {
          ids.forEach((id) => {
            if (id !== 'tshirt') { // selecting a tshirt size breaks it, check laravel columns
              client.selectByIndex(`#${id}`, 1).then(() => {
                client.getValue(`#${id}`).then((value) => {
                  clientApplicationObj[id] = value
                })
              })
            }
          })
        }
      )
      .addValue('.select2-search__field', 'Vietnamese').then(
        () => clientApplicationObj['languages'] = 'English,Vietnamese'
      )
      .click('.select2-results__option--highlighted')
      .waitForValue('input', 10000)
      // .getAttribute('input[type="radio"]:checked', 'id').then(
      //   (ids) => {
      //     ids.forEach((id) => {
      //       client.getValue(`#${id}`).then((value) => {
      //         let groomedId = id.replace('_no', "").replace('_yes', "");      // server is receiving "" instead of false
      //         console.log(groomedId, " -- " + value)
      //         clientApplicationObj[groomedId] = value;
      //       })
      //     })
      //   }
      // )
      .click('#submit-main')
      .waitUntil(() => {
       return client.getUrl().then(
         (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/volunteering-detail.+/)}
       )
      }, 10000)
      .getValue('#application-id')
      .then(
        (appId) => {
          applicationID = appId;
        }
      )
      .getAttribute('input[value="true"]', "id").then((ids) => {
        ids.forEach((id) => {
          // console.log(id)
          client.click(`#${id}`)
        })
      })
      .waitUntil(() => {
        return client.getValue('#available_postactivity_centers_checkbox').then((value) => {
          // console.log(value)
          return value === 'true'
        })
      }, 10000)
      .getAttribute('input:not([type="radio"]):not([type="search"]):not([type="hidden"]):not([type="checkbox"])', 'id').then(
        (ids) => {
          ids.forEach((id) => {
            if (!id.match(/expiration/)) {
              clientApplicationObj[id] = id + randNum100();
              client.setValue(`#${id}`, clientApplicationObj[id])
            }
          })
        }
      )
      .getAttribute('select', 'id').then(
        (ids) => {
          ids.forEach((id) => {
            client.selectByIndex(`#${id}`, 1).then(() => {
              client.getValue(`#${id}`).then((value) => {
                if (Array.isArray(value)) {
                  clientApplicationObj[id] = value.pop()
                } else {
                  clientApplicationObj[id] = value
                }
              })
            })
          })
        }
      )


      .waitForValue('#available_postactivity_centers', 10000)
      .setValue('#cpr_expiration', '12122020')
      .waitForValue('#cpr_expiration', 10000)
      .setValue('#licensed_expiration_date', '12122020')
      .waitForValue('#licensed_expiration_date', 10000)
      .click('#submit-detail')
      .waitUntil(() => {
        return client.getUrl().then(
          (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/esign.+/)}
        )
      }, 10000)
      .click('#submit-esign')
      .waitUntil(() => {
        return client.getUrl().then(
          (url) => {return url.match(/^http:\/\/localhost:8080\/\#\/done-application.+/)}
        )
      }, 10000)
      .then(() => {
        let options = {
          host: devHost,
          port: devPort,
          path: '/api/v1/applications/' + applicationID,
          method: 'GET',
          headers: {
              'Authorization':'Bearer ' + token,
              'Content-Type':'application/json'
          }
        };
        http.request(options, getCallback).end();
        // console.log("client OBJ : " + JSON.stringify(clientApplicationObj))
      }).call(done)

////////Callback territory /////////////////////////////

    let postCallback = (response) => {
      let str = '';
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        let json = JSON.parse(str)
        token = json["token"];
      });
    }

    let getCallback = (response) => {
      var str = '';
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        serverApplicationObj = JSON.parse(str)
        console.log('/////////////////////////////')
        console.log(str);
        console.log('/////////////////////////////')
        comparePayloads(serverApplicationObj, clientApplicationObj)
      });
    }

    let comparePayloads = (serverObj, clientObj) => {
      Object.keys(clientObj).forEach((key) => {
          // if (key !== 'medical_npi' && key !== 'medical_dea' && key !== 'licensed_expiration_date' && key !== 'ybpth_ref') { // BUG** these aren't getting returned from the server
        console.log(`key ${key} client ${clientObj[key]} server ${serverObj['q_' + key]}`)
        assert.strictEqual(clientObj[key], serverObj['q_' + key].replace(/\//g, "")) // date mask adds "/" between date values
        // }
      })
    }

  });



});
