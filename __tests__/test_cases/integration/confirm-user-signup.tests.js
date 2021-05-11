// these are module we intend to create and require into the file
const given = require('../../steps/given');
const when = require('../../steps/when');
const then = require('../../steps/then');
// [+] we already installed the Chance pkg into our project, we just need to require() it for use
const chance = require('chance').Chance();

describe('When confirmUserSignup runs', () => {
	it("The user's profile should be saved in DynamoDB", async () => {
		const { name, email } = given.a_random_user();
		// [+] we used the "Chance" npm pkg to generate a random user id
		const username = chance.guid();

		await when.we_invoke_confirmUserSignup(username, name, email)

		const ddbUser = await then.user_exists_in_UsersTable(username);

		expect(ddbUser).toEqual({});
	})
})