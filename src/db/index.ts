// src/db/index.ts
import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
// import AWS from 'aws-sdk';

const sequelize = new Sequelize(config.db.postgresUrl!);
const mongoConnection = mongoose.connect(config.db.mongoUrl!);
// const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: config.db.dynamoRegion });
const dynamoDB = null;

export { sequelize, mongoConnection, dynamoDB };