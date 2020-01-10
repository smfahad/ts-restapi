import * as mongoose from 'mongoose';
require('custom-env').env()

const uri: string = process.env.MONGOURL!;

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err:any) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log("Connected to MongoDB successfully");
    }
})

export const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    dob: {type:Date, required: true}
})

const User = mongoose.model('User', UserSchema);
export default User;
