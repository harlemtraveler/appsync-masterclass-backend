const chance = require('chance').Chance();

const a_random_user = () => {
	const firstName = chance.first({ nationality: 'en' });
	const lastName = chance.last({ nationality: 'en' });
	// const suffix = chance.suffix();
	const suffix = chance.string({ length: 4, numeric: 'false', casing: 'lower', symbols: 'false' });
	const name = `${firstName} ${lastName} ${suffix}`;
	const password = chance.string({ length: 8 });
	// const email = chance.email();
	const email = `${firstName}-${lastName}-${suffix}@mcjiggy.com`;

	return {
		name,
		password,
		email
	}
}

module.exports = {
	a_random_user
}