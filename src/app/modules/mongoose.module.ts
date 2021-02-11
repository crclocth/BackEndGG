import mongoose, { ConnectionOptions } from "mongoose"

function connect(): Promise<typeof mongoose> {
  const mongoUri: string = ' mongodb+srv://cristian:czxLvav78DyNqseT@cluster0.tsqq0.mongodb.net/'
  const databaseName: string = 'Geogrow'

  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } 

  return mongoose.connect(mongoUri + databaseName, options);
}

export default { connect };