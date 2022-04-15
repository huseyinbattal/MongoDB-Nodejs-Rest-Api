import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    website: {
        type: String
    },
    company: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
