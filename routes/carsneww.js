const express=require("express");
const router=express.Router();
const carsnewwModel=require("../models/carsneww")
router.use(express.json());
const upload=require("../middleware/multer");
const cloudinary = require('cloudinary').v2;

const fileUpload = require('express-fileupload');


// Configuration 
cloudinary.config({
  cloud_name: "dhrqeptbf",
  api_key: "919474118651898",
  api_secret: "qrLwHnOPziBa858FzshNtjGNnag"
});
function checkError(err, response){
    if(!err) return res.json(response);
        res.json(err)
}

router.get("/",async(req,res)=>{
    try {
        const posts=await carsnewwwModel.find().populate("owner")
        res.json(posts)
    } catch (error) {
        res.json(error)  
    }    
});

router.get("/:id",async (req,res)=>{
    try {
        const post=await carsnewwwModel.findById({_id:req.params.id}).populate("owner")
        res.json(post)
        // res.download(post)
    } catch (error) {
        res.json(error)
        
    }
});
// router.post("/", upload.array("image",12), async (req, res) => {
//     const { files } = req;
//     const  images = files.map(e => 
//       e.filename 
//     );
//     const newwPost = await carsnewwModel({
//       image: images,
//       id: req.body.id,
//       name: req.body.name,
//       model: req.body.model,
//       price: req.body.price,
//       transmission: req.body.transmission,
//       motor: req.body.motor,
//       color: req.body.color,
//       year: req.body.year,
//       shopName: req.body.shopName,
//       owner: req.body.owner
//     });
//     try {
//       newwPost.save();
//       res.json({
//         newwPost,
//         files: files,
//         path: files.originalname,
//       });
//     } catch (error) {
//       res.json(error);
//     }
//   });
// لو هرفع اكتر من صورة 
// router.post('/', (req, res, next) => {
//     const files = req.files.photo; // assuming you're using the `express-fileupload` middleware
//     const uploads = [];
  //     for (const file of files) {
//       uploads.push(cloudinary.uploader.upload(file.tempFilePath))};
//       console.log(uploads)

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
    const newPost = await carsnewwModel({
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
//     const newPost=await carsnewModel(req.body);
//     try {
//         newPost.save();
//         res.json(newPost);
//     } catch (error) {
//         res.json(error);   
//     }
// });

router.put("/:id",async(req,res)=>{
try {
    const updatedPost=await carsnewwModel.updateOne({_id:req.params.id},req.body,)
    res.json(updatedPost);
} catch (error) {
    res.json(error);
}    

})

router.delete("/:id",async (req,res)=>{
try {
    const deletedPost=await carsnewwModel.deleteOne({_id:req.params.id})
    res.json(deletedPost);
} catch (error) {
    res.json(error);
}
})
module.exports=router;
