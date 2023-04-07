const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const PORT=5000
const cors = require("cors");
require("dotenv").config();
//express app
const app = express();
const fileUpload =  require ('express-fileupload');



const usersRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const carsShopRouter = require("./routes/cars_shop");
const carsnewRouter = require("./routes/carsnew");
const carsnewwRouter = require("./routes/carsneww");
const carsusedRouter = require("./routes/carsused");
const carsuseddRouter = require("./routes/carsusedd");
const schoolsRouter = require("./routes/schools");
const maintainRouter = require("./routes/maintain");
const accessShopRouter = require("./routes/accessories_shop");
const accessRouter = require("./routes/accessories");


//middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("images"));
app.use(fileUpload({
//   useTempFiles:true
}))
app.use(cors());

//routes
app.use("/users", usersRouter);
app.use("/admins", adminRouter);
app.use("/carsshops", carsShopRouter);
app.use("/newcars", carsnewRouter);
app.use("/newwcars", carsnewwRouter);
app.use("/usedcars", carsusedRouter);
app.use("/useddcars", carsuseddRouter);
app.use("/schools", schoolsRouter);
app.use("/maintains", maintainRouter);
app.use("/accessShops", accessShopRouter);
app.use("/accessories", accessRouter);
app.get("/", (req, res) => {
  res.json({ mssg: "Welcom to the app" });
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
//database connection
mongoose.connect("mongodb://sheka:sheka@ac-xvjtcbx-shard-00-00.vpe4skm.mongodb.net:27017,ac-xvjtcbx-shard-00-01.vpe4skm.mongodb.net:27017,ac-xvjtcbx-shard-00-02.vpe4skm.mongodb.net:27017/?ssl=true&replicaSet=atlas-j9s119-shard-0&authSource=admin&retryWrites=true&w=majority", (err) => {
  if (!err) return console.log("DB Connected");
  console.log(err);
});

//listen for requsts
app.listen(PORT, (err) => {
  if (!err) return console.log(`server started at port ${PORT}`);
  console.log(err);
  });
  


// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };


// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);


// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Learn React Today" }],
//   [2, { priceInCents: 20000, name: "Learn CSS Today" }],
// ]);

// app.post("/payment", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map((item) => {
//         // const storeItem = accessories.findone(item._id);
//         // const storeItem= accessModel.findById({_id:item.id})

//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: item.name,
//             },
//             unit_amount: item.price,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: `http://localhost:3000/`,
//       // cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
//     });
//     res.json({ url: session.url });
//     // res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

