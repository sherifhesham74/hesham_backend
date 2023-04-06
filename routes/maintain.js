const express = require("express");
const router = express.Router();
const maintainModel = require("../models/maintain");
router.use(express.json());
const upload = require("../middleware/multer");
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');


// Configuration 
cloudinary.config({
  cloud_name: "dhrqeptbf",
  api_key: "919474118651898",
  api_secret: "qrLwHnOPziBa858FzshNtjGNnag"
});
function checkError(err, response) {
  if (!err) return res.json(response);
  res.json(err);
}

router.get("/", async (req, res) => {
  try {
    const posts = await maintainModel.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await maintainModel.findById({ _id: req.params.id });
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', (req, res, next) => {
  const image = req.body.image;
  
  cloudinary.uploader.upload(image, {
    resource_type: "auto",
    type: 'upload',
    tags: ['word', 'document' , 'pdf'],
    upload_preset: "ntjegcx8"
  },
  async (err, result) => {
    console.log(result);
    const newPost = await maintainModel({
      image: result.url,
      id: req.body.id,
      name: req.body.name,
      model: req.body.model,
      price: req.body.price,
      transmission: req.body.transmission,
      motor: req.body.motor,
      color: req.body.color,
      year: req.body.year,
      shopName: req.body.shopName,
      // owner: req.body.owner
    });

    try {
      newPost.save();
      res.json({
        newPost,
        files: file,
        path: file.originalname,
      });
    }
    catch (error) {
      res.json(error);
    }
  });
});
// router.post("/",async(req,res)=>{
//     const newPost=await maintainModel(req.body);
//     try {
//         newPost.save();
//         res.json(newPost);
//     } catch (error) {
//         res.json(error);
//     }
// });

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await maintainModel.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.json(updatedPost);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await maintainModel.deleteOne({ _id: req.params.id });
    res.json(deletedPost);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
