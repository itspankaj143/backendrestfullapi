let express = require("express");
let app = express();
// const validator = require("validator");
const dbconnect = require("../config/dbconnection");
const routers = require("../router/userrouter");
// const usermodel = require("../models/usermodel");
const hostName = "127.0.0.1";
const port = 7777;

// app.use(express.json());
// // app.use("/api/user", router);
// app.post("/post", async (req, res) => {
//   console.log(req.body);
//   // const user = {
//   //   firstName: "Pankaj",
//   //   lastName: "Singh",
//   //   email: "pankaj@dasd22323gmail.com",
//   //   password: "123456",
//   // };
//   try {
//     const userone = new usermodel(req.body);
//     await userone.save();
//     res.send("User Added successfully");
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: "Server Error" + e.message });
//   }
// });

app.use("/api/users", routers);

dbconnect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/about", (req, res) => {
//   res.send("Hello World! i am from about");
// });
// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.use("/service", (req, res) => {
//   res.send("Hello World! i am from service");
// });

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
