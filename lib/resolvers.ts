const tweets = [
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

const resolvers = {
	getTweets: () => tweets,
	getQuantityTweets: () => tweets.length,
};

export default resolvers;
