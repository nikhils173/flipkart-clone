const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData');
const pageRoutes = require('./routes/admin/page');
const addressRoutes = require('./routes/address');


//for run the server at port
env.config();

//mongodb connection
mongoose.connect(
    `mongodb+srv://cool:${process.env.MONGO_DB_PASSWORD}@cluster0.ppmd7.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:false
    }
).then(() =>{
    console.log("Database Connected");
});

app.use(cors());
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api',adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRoutes);
app.use('/api', pageRoutes);
app.use('/api', addressRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`server is running at ${process.env.PORT}`)
});