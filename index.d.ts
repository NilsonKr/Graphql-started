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
}
