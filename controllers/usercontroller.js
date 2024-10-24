// const UserDetails = require("../models/usermodel");

// const creatuser = async (req, res) => {
//   const user = {
//     firstName: "Pankaj",
//     lastName: "Kumar",
//     email: "pankaj@gmail.com",
//     password: "123456",
//   };
//   try {
//     const userone = new UserDetails(user);
//     await userone.save();
//     res.send("User Added successfully");
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// module.exports = creatuser;

const userschema = require("../models/usermodel");

const createuser = async (req, res) => {
  const user = {
    firstName: "Pankaj",
    lastName: "Kumar",
    email: "pankaj@gmail.com",
    password: "pankaj1234@",
  };
  try {
    const userone = new userschema(user);
    await userone.save();
    res.send("User Added successfully");
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { createUser: createuser };
