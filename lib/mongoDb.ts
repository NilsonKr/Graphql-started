import { Db, MongoClient } from 'mongodb';
import config from '../config/config';

const mongoUri = `mongodb+srv://${config.dbUser}:${config.dbPswd}@${config.dbCluster}/${config.dbName}?retryWrites=true&w=majority`;

class MongoLib implements IMongoLib {
	static connection: Promise<Db> | null = null;
	dbName: string;
	client: MongoClient;

	constructor() {
		this.client = new MongoClient(mongoUri);
		this.dbName = config.dbName as string;
	}

	connect() {
		//Polling connections
		if (!MongoLib.connection) {
			MongoLib.connection = new Promise<Db>((resolve, reject) => {
				this.client.connect(err => {
					if (err) reject(err);

					console.log('[db] Connected!');
					resolve(this.client.db(this.dbName));
				});
			});
		}

		return MongoLib.connection;
	}

	getAll(collection: string, query: any = {}) {
		return this.connect().then((db: Db) => {
			return db.collection(collection).find(query).toArray();
		});
	}

	createMany(collection: string, data: any[]) {
		return this.connect().then((db: Db) => {
			return db.collection(collection).insertMany(data);
		});
	}
}

export default MongoLib;
