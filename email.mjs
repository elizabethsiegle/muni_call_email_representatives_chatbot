exports.handler = function(context, event, callback) {
    //Memory from the answered question
    let memory = JSON.parse(event.Memory);
    //get answers from Memory
    let name = memory.twilio.collected_data.call_collect.answers.name.answer; 
    let zip_code = memory.twilio.collected_data.call_collect.answers.zip_code.answer;
    
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
            url: `https://handler.twilio.com/twiml/EH19fc2a326d3871000810eb5495c2d861/?Supe=${key}&Caller=${name}&Zip=${zip_code}`,
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
                            say: "Thank you for calling all of SF County Transit Authority. You can also leave them a voicemail, sign this petition https://bit.ly/2ZNEfbv, spread the word to your friends, send more emails, and more. Want to get more involved? Fill out this form: https://forms.gle/FHqt7W62D9W2t164A"
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