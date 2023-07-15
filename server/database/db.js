import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://sdthakor9465:HozoD4tULLswAwFk@apex-blog.d2kiads.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;