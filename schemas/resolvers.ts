import { IResolvers } from '@graphql-tools/utils';
import MongoLib from '../lib/mongoDb';

const db = new MongoLib();

const resolvers: IResolvers = {
	Query: {
		getTweets: async () => {
			try {
				const result = await db.getAll('tweets');

				return result;
			} catch (error) {
				console.log(error);
				return error;
			}
		},
		// getQuantityTweets: () => tweets.length,
		// getSingleTweet: (_: any, args: any) => {
		// 	const tweet = tweets.find(twt => twt._id === args.id);

		// 	return tweet;
		// },
	},
};

export default resolvers;
