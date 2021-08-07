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
};

export default mutations;
