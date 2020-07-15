## Mass Call and Email your Representatives via SMS
![header img](https://lh6.googleusercontent.com/91oToVVzgvSmLRYSdFeb7_9A-IPcuNypQChTc8YPjQZV1TbrWuz_CG4yhJARXn8TXW2aHfYo80GEU_VVhDmzVdqvwmo04A11BeJ7iKbieX_a5suFY7AazF5hEFlt3HlrUwBn-bRZ)
This repo contains code to make a civic-minded chatbot to mass call and email SF County Transportation Authority representatives using
- [Twilio SendGrid](https://sendgrid.com/)
- [Twilio Autopilot](https://www.twilio.com/autopilot)
- [Twilio Functions](https://www.twilio.com/docs/runtime/functions)
- [TwiML Bins](https://www.twilio.com/docs/runtime/tutorials/twiml-bins)

You need three things:

- A Twilio account - [sign up for a free one here and receive an extra $10 if you upgrade through this link](http://www.twilio.com/referral/iHsJ5D)
- A Twilio phone number with SMS capabilities - [configure one here](https://www.twilio.com/console/phone-numbers/search)
- A SendGrid account - [make one here](https://app.sendgrid.com)

### Test it out
Text +14153068517 something like a greeting or "don't defund muni".
![text sms example bot](https://lh3.googleusercontent.com/JmAobz1D5wqTo4go-X0bfCV6MLArXGs9mJRh_FSysxDuv7WaRQMrpHYjFCtwICBjc70hIAibOkZKO8xSU6pZ1HppeGAhBgn6kZmDlEAgbEW5GkX8OzZBkolkQimauS2z-dySIhOk)

### Where does each file in this repo go to make bulk/mass calls and emails?
You need to [make a Twilio Autopilot bot](https://www.twilio.com/console/autopilot/list). Replace the code in the `Greeting` task with the code in `greeting.json`. Then make a task `Call` and replace that JSON with the code in `call.json`. That JSON task [redirects](https://www.twilio.com/docs/autopilot/actions/redirect) to a [Twilio Function](https://www.twilio.com/console/functions/manage) that contains the JavaScript code in `call.js`. It is there that calls are made to a JS object containing the SFCTA members and their phone #s, passing in a TwiML bin URL that contains the XML in `call.xml`. 

To email, make a task in your Autopilot bot console called `email` and replace that JSON code with the code in `email.json`. That [redirects](https://www.twilio.com/docs/autopilot/actions/redirect) to a second [Twilio Function](https://www.twilio.com/console/functions/manage) that contains the JavaScript code in `email.js`. `email.js` also has the option to send an email receipt. Make a task in your Autopilot bot console called `email_receipt` that contains the JSON code in `email_receipt_collect.json` that asks if the user would like an email receipt and redirects to a third Twilio Function that contains the code in `email_receipt_check.js` checking if they sent "yes" or "no". If they sent "no", they are given a list of resources. Else if they sent "yes", that Function then redirects to a different Autopilot task that contains the JSON in `email_receipt_send.json` to ask for the user's email and redirects to a fourth and final Twilio Function that contains the code in `email_receipt_send.js`. 

![image receipt](https://lh6.googleusercontent.com/dq_negrlRVL5Q7DOCgTzJjxsnVOXlDMUAEd_77ZKlxISx96IHzicmQ8GIrlLy2Vm_oHe-s0acsYnIWtfmbHMnapttrQ-qXQVs2d6KaInDnLo8iW_gEnnTd7g4jL26bjkrziYwPkl)

### Who is called and emailed?
The SF County Transportation Authority board. Many are also on the SF board of supervisors. 
- [Aaron Peskin](https://sfbos.org/supervisor-peskin), Chair of the San Francisco County Transportation Authority. Phone: +14155547450, email: Aaron.Peskin@sfgov.org.
- [Rafael Mandelman](https://sfbos.org/supervisor-mandelman-district-8), Vice Chair of SF CTA. Phone: +14155546968, email: mandelmanstaff@sfgov.org. 
- [Dean Preston](https://sfbos.org/supervisor-preston-district-5): phone: +14155547630, email: prestonstaff@sfgov.org
- [Sandra Lee Fewer](https://sfbos.org/supervisor-fewer-district-1): phone: +14155547410, email: Sandra.Fewer@sfgov.org.  
- [Matt Haney](https://sfbos.org/supervisor-haney-district-6). phone: +14155547970, email: haneystaff@sfgov.org. 
- [Gordon Mar](https://sfbos.org/supervisor-mar-district-4). phone: +14155547460, email: marstaff@sfgov.org 
- [Hillary Ronen](https://sfbos.org/supervisor-ronen-district-9). phone: +14155545144, email: RonenStaff@sfgov.org.
- [Ahsha Safai](https://sfbos.org/supervisor-safai-district-11). phone: +14155546975, email: Ahsha.Safai@sfgov.org.
- [Catherine Stefani](https://sfbos.org/supervisor-stefani-district-2). phone: +14155547752, email: Catherine.Stefani@sfgov.org. 
- [Shamann Walton](https://sfbos.org/supervisor-walton-district-10). phone: +14155547670, email: waltonstaff@sfgov.org. 
- [Norman Yee](https://sfbos.org/supervisor-yee-district-7). phone: +14155546516, email: Norman.Yee@sfgov.org.
- [Vallie Brown](https://sfbos.org/supervisor-brown-district-5). phone: 415-554-7630, email: vallie.brown@sfgov.org.

Here's to more civic-minded tech, and saving mass public transit!

