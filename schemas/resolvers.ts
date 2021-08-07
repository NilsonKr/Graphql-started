import { IResolvers } from '@graphql-tools/utils';

const tweets: Ttweet[] = [
	{
		_id: '1',
		author: 'NilsonKr',
		content: 'Something...',
		date: new Date().toDateString(),
	},
	{
		_id: '2',
		author: 'OtherUser',
		content: 'Something...',
		date: new Date().toDateString(),
	},
	{
		_id: '3',
		author: 'OtherOtherUser',
		content: 'Something...',
		date: new Date().toDateString(),
	},
];

const resolvers: IResolvers = {
	Query: {
		getTweets: () => tweets,
		getQuantityTweets: () => tweets.length,
		getSingleTweet: (_: any, args: any) => {
			const tweet = tweets.find(twt => twt._id === args.id);

			return tweet;
		},
	},
};

export default resolvers;
