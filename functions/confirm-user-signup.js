const DynamoDB = require('aws-sdk/clients/dynamodb'); // NOTE: if entire sdk not necessary, just "require" specific mods
const DocumentClient = new DynamoDB.DocumentClient(); // init a new Dynamodb instance
const { USERS_TABLE } = process.env;

module.exports.handler = async (event) => {
	if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {

		// how Cognito triggers work, our Lambda's must return the event itself.
		// if we wanted to verify the user's email, the event obj is also a suitable technique.
		return event;
	}
	else {
		return event; // if we get any other event source, just ignore & do nothing.
	}
}