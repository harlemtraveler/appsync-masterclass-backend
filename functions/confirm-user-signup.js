const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const Chance = require('chance');
const chance = new Chance();

const { USERS_TABLE } = process.env;

module.exports.handler = async (event) => {
	if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {
		// under Cognito User Pool config within serverless.yml, we specified a "Name" attribute as part of the Schema property
		const name = event.request.userAttributes['name'];
		const suffix = chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true });
		const screenName = `${name.replace(/[^a-zA-Z0-9]/g, "")}${suffix}`;

		//** Create a User Object **//
		const user = {
		  id: event.userName,   // we obtain this value from the source Event's "userName" attribute
		  name: name,
		  screenName,           // create a name generator, that attaches a random suffix at end of the value of "name".
		  // birthdate,         // we haven't config'd for birthdate-format yet, so we'll ignore this field for now and have user re-enter when editing profile
		  createdAt: new Date().toJSON(),
		  followersCount: 0,
		  followingCount: 0,
		  tweetsCount: 0,
		  likesCount: 0
		}

		await DocumentClient.put({
			TableName: USERS_TABLE,
			Item: user, // TODO: we still need to create a user Object
			ConditionExpression: 'attribute_not_exists(id)' // this conditional statement checks to see if the id already exists in dynamodb table
		}).promise(); // using the javascript sdk "promise()" to return a "promise" we can "await".
		return event;
	}
	else {
		return event;
	}
}