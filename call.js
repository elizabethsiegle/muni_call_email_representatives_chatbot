exports.handler = function(context, event, callback) {
    //Memory from the answered question
    let memory = JSON.parse(event.Memory);
    let respObj = {};
    //get answers from Memory
    let name = memory.twilio.collected_data.call_collect.answers.name.answer; 
    let zip_code = memory.twilio.collected_data.call_collect.answers.zip_code.answer;
    console.log(`name ${name}`);
    
    const bodyCall = `Hello {{Supe}}. My name is ${name} and my zip code is ${zip_code}. Muni is a critical service to SF. Tax billionaires, defund SFPD. Keep SF healthy, affordable, liveable, and accessible for all, including working families. The populations who ride Muni the most are the people our city is ALREADY failing to serve. Muni is a critical service to San Franciscans. Additionally, 40% of emissions in SF come from transportation. We should not force more cars (and more air pollutants) on the road, especially during a pandemic when people exposed to air pollutants are dying at higher rates. I demand that billionaires are taxed and funding from the SFPD is redirected to fund public transit and reinstate the 40 Muni bus lines that are meant to be cut as a result of lack of funding. It is routes like the 8, 9, 14, 29, etc.. that serve lower-income communities that are the most PACKED and clearly need MORE lines, not fewer. Every SFUSD student benefits from Muni. A progressive state does not let its most critical services fail. Muni is about accessibility and connecting people--connecting us to family, friends, and what makes SF special. Thank you for your time.`;
    
    const numbers = {
        'Aaron': '+14155547450',
        'Rafael': '+14155546968', 
        'Dean': '+14155547630',
        'Sandra': '+14155547410', 
        'Matt':'+14155547970', 
        'Gordon': '+14155547460', 
        'Hilary':'+14155545144',
        'Ahsha':'+14155546975',
        'Catherine': '+14155547752', 
        'Shamann': '+14155547670', 
        'Norman':'+14155546516'
    };
    const client = context.getTwilioClient();
    var ctr = 0;
    Object.keys(numbers).forEach(function(key) {
        console.log(key, numbers[key]);
        client.calls
        .create({
            machineDetection: 'Enable',
            url: `https://handler.twilio.com/twiml/EH19fc2a326d3871000810eb5495c2d861/?Supe=${key}&Name=${name}&Zip=${zip_code}`,
            to: numbers[key], 
            from: '+14153068517'
        }).then(function(call) {
            console.log(call.sid);
            ctr ++;
            console.log(ctr);
            if (ctr == Object.keys(numbers).length) {
                const resp = {
                    actions: [
                        {
                            say: "Thank you for calling all of SF County Transit Authority. \n\n The call to them said: " + bodyCall + "You can also leave them a voicemail, sign this petition https://bit.ly/2ZNEfbv, spread the word to your friends, send more emails, and more. Want to get more involved? Fill out this form: https://forms.gle/FHqt7W62D9W2t164A"
                        }	 
                    ]
                };
                callback(null, resp);
            }
        })
        .catch(err => {
            callback(err);
        });
    });
};