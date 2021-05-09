describe('When confirmUserSignup runs', () => {
	it("The user's profile should be saved in DynamoDB", async () => {
		const { name, email } = given.a_random_user()
		const username = ...

		await when.we_invoke_confirmUserSignup(username, name, email) // should create an event
	})
})