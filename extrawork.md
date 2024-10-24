// const UserDetails = require("../models/UserModel");

// const createUser = async (req, res) => {
// try {
// const { fullName, email, password, role, image, available } = req.body;
// const user = await UserDetails.create({
// fullName,
// email,
// password,
// role,
// image,
// available,
// });
// res.status(201).json({ message: "User created successfully", user });
// } catch (e) {
// console.error(e);
// if (e.code === 11000) {
// res.status(400).json({ message: "Email already exists" });
// } else {
// res.status(500).json({ message: e.message || "Server Error" });
// }
// }
// };

// module.exports = createUser;

const UserDetails = require("../models/UserModel"); // Ensure the model file path is correct

const createUser = async (req, res) => {
try {
const { fullName, email, password, role, image, available } = req.body;
const user = await UserDetails.create({
fullName,
email,
password,
role,
image,
available,
});
res.status(201).json({ message: "User created successfully", user });
} catch (e) {
console.error(e);
if (e.code === 11000) {
res.status(400).json({ message: "Email already exists" });
} else {
res.status(500).json({ message: e.message || "Server Error" });
}
}
};

module.exports = { createUser }; // Make sure the function is correctly exported

folder is a database
collection is the schema object
and document is the flield

name: {
type: String,
required: true,
},
author: {
type: String,
required: true,
},

description: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
available: {
type: Boolean,
},
image: {
type: String,
required: true,
},

const placeSchema = new Schema({
title:{
type:String,
required:true,
},
description:{
type:String,
},
image:{
type:String,
default:"https://unsplash.com/photos/green-leaf-trees-near-beige-wooden-house-dLOt3xltXuc",
set:(v)=>v===""?"https://unsplash.com/photos/green-leaf-trees-near-beige-wooden-house-dLOt3xltXuc":v,
},
price:Number,
location:String,
country:String,
})

const Place=mongoose.model("Place",placeSchema);
module.exports = Place;
