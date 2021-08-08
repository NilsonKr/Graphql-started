import MongoLib from '../../lib/mongoDb';

const db = new MongoLib();

const types = {
	Tweet: {
		likes: async ({ likes }: Ttweet) => {
			try {
				const users = await db.getAll('users', { _id: { $in: likes } });

				return users;
			} catch (error) {
				console.log(error);
				return error;
			}
		},
	},
	Account: {
		__resolveType: (account: TUser) => {
			if (account.company) {
				return 'Company';
			} else {
				return 'User';
			}
		},
	},
};

export default types;
