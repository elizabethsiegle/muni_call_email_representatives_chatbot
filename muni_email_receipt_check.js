exports.handler = function(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    //get answers from Memory
    let answer = memory.twilio.collected_data.email_receipt_yes_no.answers.email_receipt.answer; 
    if(answer == 'yes') {
        const resp = {
            actions: [
            {
                redirect: "task://email_receipt_send"
            }
        	]
        };
        callback(null, resp);
    }
    else {
        const resp = {
            actions: [
            {
                say: "Okay, will not ask you for an email to email you a receipt."
            }
        	]
        };
        callback(null, resp);
        
    }
	
};