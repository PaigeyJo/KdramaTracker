import pgp from 'pg-promise';
import dbConfig from './dbConfig.js';

const connection = pgp()(dbConfig);

export default connection;