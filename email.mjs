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
    
    if (demands.toLowerCase().trim() =='default') {
        demands = "I demand that billionaires are taxed and funding from the SFPD is redirected to fund public transit and reinstate the 40 Muni bus lines that are meant to be cut as a result of lack of funding. It is routes like the 8, 9, 14, 29, etc.. that serve lower-income communities that are the most PACKED and clearly need MORE lines, not fewer.";
    }
    
    if (important_to_you.toLowerCase().trim() == 'default') {
        important_to_you = "Every SFUSD student benefits from Muni. A progressive state does not let its most critical services fail. Muni is about accessibility and connecting people--connecting us to family, friends, and what makes SF special.";
    }
    var email_body = `Hi {rep name}! My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}. \n Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. \n Muni is a critical service to SF. Tax billionaires, defund SFPD \n Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.\n ${demands} ${important_to_you} \n Thank you for your time.`;
    const messages = [
        {
            to: 'Aaron.Peskin@sfgov.org', 
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Aaron! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to: 'mandelmanstaff@sfgov.org', 
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Rafael! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to: 'prestonstaff@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Dean! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'Sandra.Fewer@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Sandra! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'haneystaff@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Matt! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'marstaff@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a CRITICAL service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Gordon! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'RonenStaff@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Hilary! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve.<p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'Ahsha.Safai@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Ahsha! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'Catherine.Stefani@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Catherine! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'waltonstaff@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Shamann! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        },
        {
            to:'Norman.Yee@sfgov.org',
            from: `${name} <we_love_and_need_muni@sf.com>`,
            subject: '🍩 Muni is a critical service to SF. Tax billionaires, defund SFPD🍩',
            html: `Hi Norman! Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. <p>Muni is a <em>critical</em> service to SF. <em>Tax billionaires, defund SFPD</em></p><p>Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates.</p><p>My name is ${name}, I live and work in ${live_work}, and my zip code is ${zip_code}.</p><p>${demands} ${important_to_you}</p> <p>Thank you for your time.</p>`,
        }
    ];
    sgMail.send(messages)
    .then(response => {
        const resp = {
            actions: [
            {
                say: "Thank you for emailing all 11 members of the SF County Transit Authority. You can also leave them a voicemail, sign this petition https://bit.ly/2ZNEfbv, spread the word to your friends, send more emails, and more. Want to get more involved? Fill out this form: https://forms.gle/FHqt7W62D9W2t164A. \n\n If you want to contact just one representative, try SF Transport Authority Chair/District 3 supervisor Aaron Peskin at (415) 554-7450 and Aaron.Peskin@sfgov.org or District 9 supervisor Hillary Ronen (also on the Metropolitan Transportation Commission) at (415) 554-5144 and RonenStaff@sfgov.org. You can also send more calls and emails by chatting with this bot."
            },
            {
                redirect: "task://email_receipt"
            }
        	]
        };
        callback(null, resp);
    })
    .catch(err => {
      callback(err);
    });
};