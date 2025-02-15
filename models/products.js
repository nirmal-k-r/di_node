const { DataTypes } = require('sequelize');
const db = require('../database');// database connection object

const Product = db.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING
    
});

db.sync()
.then(() => {
    console.log('Product table created if not already exists.');
})
.catch((error) => {
    console.error('Error creating table:', error);
});


module.exports = Product;

