describe('When confirmUserSignup runs', () => {
	it("The user's profile should be saved in DynamoDB", async () => {
		const { name, email } = given.a_random_user()
		const username = ...

		// this will construct an event & call the confirm-user-signup() function
		await when.we_invoke_confirmUserSignup(username, name, email)

		// we now expect the user to exist in the Users DynamoDB Table
		// create a variable to the store the returned value of this Promise
		const ddbUser = await then.user_exists_in_UsersTable(username);

		// create an expectation test make sure it is equal to "something"
		expect(ddbUser).toEqual({});
	})
})