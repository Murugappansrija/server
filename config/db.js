import mongoose from 'mongoose'

const connectDB = async function () {
    try {
           await mongoose.connect(process.env.MONGODBURI,{
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
        });
        console.log('db connection success')
       
    } catch (error) {
        console.log(error)
    }
}

export default connectDB