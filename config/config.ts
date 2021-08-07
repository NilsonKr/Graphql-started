require('dotenv').config();

const configuration = {
	dbUser: process.env['DB_USER'],
	dbPswd: process.env['DB_PSWD'],
	dbCluster: process.env['DB_CLUSTER'],
	dbName: process.env['DB_NAME'],
};

export default configuration;
