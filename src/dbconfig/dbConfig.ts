import mongoose, { connection } from 'mongoose';

export async function connect() {
  mongoose.connect(process.env.MONGODB_URI!);
  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Mongoose connected to db');
  });

  connection.on('error', (err) => {
    console.log(
      'Mongoose connection error. Please make sure MongoDB is running. ' + err,
    );
    process.exit();
  });

  try {
  } catch (error: any) {
    console.warn('Something goes wrong!');
    console.log(error);
  }
}
