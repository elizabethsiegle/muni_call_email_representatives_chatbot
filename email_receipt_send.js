const sgMail = require('@sendgrid/mail');
exports.handler = function(context, event, callback) {
    sgMail.setApiKey(context.SENDGRID_API_KEY);
    //Memory from the answered question
    let memory = JSON.parse(event.Memory);
    //get answers from Memory
    let name = memory.twilio.collected_data.email_collect.answers.name.answer; 
    let live_work = memory.twilio.collected_data.email_collect.answers.live_work.answer;
    let zip_code = memory.twilio.collected_data.email_collect.answers.zip_code.answer;
    let demands = memory.twilio.collected_data.email_collect.answers.demands.answer;
    let important_to_you = memory.twilio.collected_data.email_collect.answers.important_to_you.answer;
    let email = memory.twilio.collected_data.email_receipt_send.answers.email.answer;
    const msg = {
        personalizations: [
            {
      to: email
    }
  ],
  from: 'Lizzie Siegle <lizzie.siegle@gmail.com>',
  subject: 'Save Muni: email receipt',
  html: `The email that was sent to all 11 SF MTA members: Hi {custom name for each 11, ex. Hilary, Norman}! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        
    };

sgMail.send(msg).then(response => {
    const resp = {
            actions: [
            {
                say: "Email receipt sent to you!"
            },
            {
                redirect: "task://more_info"
            }
        	]
        };
        callback(null, resp);
    })
    .catch(err => {
      callback(err);
    });
};