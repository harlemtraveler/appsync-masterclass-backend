const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const { USERS_TABLE } = process.env;

module.exports.handler = async (event) => {
	if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {
		await DocumentClient.put({
			TableName: USERS_TABLE,
			Item: user, // TODO: we still need to create a user Object
			ConditionExpression: 'attribute_not_exists(id)' // this conditional statement checks to see if the id already exists in dynamodb table
		}).promise(); // using javascript "promise()" obj to return a "promise" we can "await".
		return event;
	}
	else {
		return event;
	}
}