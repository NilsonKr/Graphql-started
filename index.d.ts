interface IMongoLib {
	connect: () => Promise<Db>;
	client: MongoClient;
	dbName: string;
}

interface Ttweet {
	_id?: string;
	author: string;
	content: string;
	date: string;
	likes: Array<string | void>;
}

interface TUser {
	_id?: string;
	name: string;
	username: string;
	description: string;
	status?: string;
	company?: string;
}
