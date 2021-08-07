import MongoLib from '../lib/mongoDb';

const tweets: Ttweet[] = [
	{
		author: 'NilsonKr',
		content: 'Something...',
		date: new Date().toDateString(),
	},
	{
		author: 'OtherUser',
		content: 'Something...',
		date: new Date().toDateString(),
	},
	{
		author: 'OtherOtherUser',
		content: 'Something...',
		date: new Date().toDateString(),
	},
];

async function insertData() {
	const db = new MongoLib();

	try {
		const result = await db.createMany('tweets', tweets);

		console.log('Data inserted successfully', result);
		process.exit(1);
	} catch (error) {
		console.log('Something went wrong', error);
		process.exit(2);
	}
}

insertData();
