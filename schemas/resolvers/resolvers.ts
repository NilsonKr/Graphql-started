import MongoLib from '../../lib/mongoDb';

const db = new MongoLib();

const resolvers = {
	getTweets: async () => {
		try {
			const result = await db.getAll('tweets');

			return result;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getQuantityTweets: async () => {
		try {
			const result = await db.getAll('tweets');

			return result.length;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getSingleTweet: async (_: any, args: any) => {
		try {
			const result = await db.getOne('tweets', args.id);

			return result;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getAccount: async (_: any, args: any) => {
		try {
			const result = await db.getOne('users', args.id);

			return result;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	globalSearch: async (_: any, args: any) => {
		try {
			const resultUsers = await db.getAll('users', { $text: { $search: args.keyword } });
			const resultTweets = await db.getAll('tweets', {
				$text: { $search: args.keyword },
			});
			const resultAll = [...resultUsers, ...resultTweets];

			return resultAll;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};

export default resolvers;
