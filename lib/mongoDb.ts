import { Db, MongoClient, ObjectId, Document, InsertOneResult } from 'mongodb';
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

	getOne(collection: string, id: string) {
		return this.connect().then((db: Db) => {
			return db.collection(collection).findOne({ _id: new ObjectId(id) });
		});
	}

	createMany(collection: string, data: any[]) {
		return this.connect().then((db: Db) => {
			return db.collection(collection).insertMany(data);
		});
	}

	createOne(collection: string, data: any) {
		return this.connect()
			.then((db: Db) => {
				return db.collection(collection).insertOne(data as Document);
			})
			.then((result: InsertOneResult) => result.insertedId);
	}
	updateOne(collection: string, data: any, id: string) {
		return this.connect().then((db: Db) => {
			return db
				.collection(collection)
				.findOneAndUpdate(
					{ _id: new ObjectId(id) },
					{ $set: data },
					{ returnDocument: 'after' }
				);
		});
	}
	removeOne(collection: string, id: string) {
		return this.connect().then((db: Db) => {
			return db.collection(collection).findOneAndDelete({ _id: new ObjectId(id) });
		});
	}
}

export default MongoLib;
