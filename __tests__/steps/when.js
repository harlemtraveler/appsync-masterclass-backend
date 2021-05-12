// use this to construct an Event Payload to call the confirmUserSignup() function
const we_invoke_confirmUserSignup = async (username, name, email) => {
	// get the handler
	const handler = require('../../functions/confirm-user-signup').handler;


	const context = {};

	// [!] NOTE: HARDCODE
	// the event payload is modeled after those of Lumigo's, a serverless data metric service provider
	// we're also manually typing in values, passing in Cognito user info via Env variables & Cognito User Pool data
	const event = {
		"version": "1",
    "region": process.env.AWS_REGION,
    "userPoolId": process.env.COGNITO_USER_POOL_ID,
    "userName": username,
    "triggerSource": "PostConfirmation_ConfirmSignUp",
    "request": {
	    "userAttributes": {
		    "sub": username,
		    "cognito:email_alias": email,
		    "cognito:user_status": "CONFIRMED",
		    "email_verified": "false",
		    "name": name,
		    "email": email
	    }
    },
		"response": {}
	};

	// [+] invoke the handler function, passing event & context objects tentatively defined above
	await handler(event, context);
}

module.exports = {
	we_invoke_confirmUserSignup
}