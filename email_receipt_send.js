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
    let new_demands = '';
    let new_important_to_you = '';
    
    if (demands == 'default') {
        console.log("in demands default");
        new_demands = "I demand that billionaires are taxed and funding from the SFPD is redirected to fund public transit and reinstate the 40 Muni bus lines that are meant to be cut as a result of lack of funding. It is routes like the 8, 9, 14, 29, etc.. that serve lower-income communities that are the most PACKED and clearly need MORE lines, not fewer.";
    }
    
    if (important_to_you == 'default') {
        console.log("in default important to you");
        new_important_to_you = "Every SFUSD student benefits from Muni. A progressive state does not let its most critical services fail. Muni is about accessibility and connecting people--connecting us to family, friends, and what makes SF special.";
    }
    const msg = {
        personalizations: [
            {
                to: email
            }
        ],
        from: 'Lizzie Siegle <lizzie.siegle@gmail.com>',
        subject: 'Save Muni: email receipt',
        html: `Hi {rep name ie. Aaron, Rafael, etc}! My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}. \n\n Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. \n Muni is a critical service to SF. Tax billionaires, defund SFPD \n Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.\n ${new_demands} ${new_important_to_you} \n Thank you for your time. ${name}`,
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