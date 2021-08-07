interface IMongoLib {
	connect: () => Promise<Db>;
	createMany: (collection: string, data: any[]) => any;
	getAll: (collection: string, query: any) => any;
	client: MongoClient;
	dbName: string;
}

interface Ttweet {
	_id?: string;
	author: string;
	content: string;
	date: string;
}
