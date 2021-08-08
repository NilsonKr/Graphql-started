import MongoLib from '../../lib/mongoDb';

const db = new MongoLib();

const mutations = {
	createTweet: async (_: any, args: any) => {
		const newTweet: Ttweet = { ...args.newTweet, date: new Date().toDateString() };

		try {
			const result = await db.createOne('tweets', newTweet);

			return result;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	removeTweet: async (_: any, args: any) => {
		try {
			const result = await db.removeOne('tweets', args.id);

			return result.value;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	createUser: async (_: any, args: any) => {
		const defaultFields = { status: '👾', description: "Hey! What's up" };
		const data = Object.assign(defaultFields, args.newUser);

		try {
			const result = await db.createOne('users', data);

			return result;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	updateUser: async (_: any, args: any) => {
		try {
			const result = await db.updateOne('users', args.newData, args.id);

			return result.value;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};

export default mutations;
