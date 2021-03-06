var express = require('express');
var router = express.Router();
const { productController } = require('../controllers');

router.get('/getproduct', productController.getproduct);
router.get('/getproductbest', productController.getproductbest);
router.get('/getproductoffer', productController.getproductoffer);
router.get('/getproductdetail/:id', productController.getproductdetail);
router.post('/addproduct', productController.addproduct);
router.post('/addrequestproduct', productController.addrequestproduct);
router.post('/editrequestproduct', productController.editRequestproduct);
router.post('/editproduct/:id', productController.editproduct);
router.put('/AddImage1/:id', productController.AddImage1);
router.put('/AddImage2/:id', productController.AddImage2);
router.put('/AddImage3/:id', productController.AddImage3);
router.put('/AddImage4/:id', productController.AddImage4);
router.get('/getcarousell', productController.getcarousell);
router.put('/AddImagecarousell1/:id', productController.AddImagecarousell1);
router.put('/AddImagecarousell2/:id', productController.AddImagecarousell2);
router.put('/AddImagecarousell3/:id', productController.AddImagecarousell3);
router.delete('/deleteproduct/:id', productController.deleteproduct);
router.post('/searchproduct', productController.searchproduct);
router.get('/getcountry', productController.getcountry);
router.get('/getallcountry', productController.getallcountry);
router.get('/getallcategory', productController.getallcategory);
router.get('/getproductcountry/:negara', productController.getproductcountry);
router.get('/getproductcountrylowestprice/:negara', productController.getproductcountrylowestprice);
router.get('/getproductcountryhighestprice/:negara', productController.getproductcountryhighestprice);
router.get('/getproductcountrylowestweight/:negara', productController.getproductcountrylowestweight);
router.get('/getproductcountryhighestweight/:negara', productController.getproductcountryhighestweight);
router.get('/getproductcountryaz/:negara', productController.getproductcountryaz);
router.get('/getproductcountryza/:negara', productController.getproductcountryza);
router.post('/getproductcountryandcategory', productController.getproductcountryandcategory);
router.delete('/deletecategory/:id', productController.deletecategory);
router.put('/editcategory/:id', productController.editlistcategory);
router.post('/addcategory', productController.addcategory);
router.delete('/deletecountry/:id', productController.deletecountry);
router.post('/addnegara', productController.addcountry);
router.put('/editcountry/:id', productController.editCountry);
router.get('/getpricing', productController.getpricing);
router.get('/getdatapricing/:id', productController.getdatapricing);
router.get('/getdatabank', productController.getbank);
router.post('/deletedatabank', productController.deletedatabank);
router.get('/getproductrequestbyuser/:id_user', productController.getproductrequestbyuser);
router.get('/getproductrequest', productController.getproductrequest);
router.get('/getproductrequestShopper/:id_shopper', productController.getRequestShopper);
router.get('/getProduktoVerified', productController.getProduktoVerified);
router.post('/editrequestproductAdmin', productController.editRequestproductAdmin);
router.get('/getoneCategory/:id_kate', productController.getoneCategory);
router.get('/getoneCountry/:id_negara', productController.getoneCountry);
router.post('/addWarna', productController.addWarna);


module.exports = router;