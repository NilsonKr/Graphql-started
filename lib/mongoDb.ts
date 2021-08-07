import { Db, MongoClient } from 'mongodb';
import config from '../config/config';

const mongoUri = `mongodb+srv://${config.dbUser}:${config.dbPswd}@${config.dbCluster}/${config.dbName}?retryWrites=true&w=majority`;

class MongoLib {
	dbName: string;
	client: MongoClient;
	static connection: Promise<Db> | null = null;

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
}

export default MongoLib;
