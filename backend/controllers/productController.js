const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors  = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeature");
// create product -- admin

exports.createProduct = catchAsyncErrors(async (req, res, next) =>{
    const product = await Product.create(req.body);

    res.status(201).json(
        {
        success: true,
        product
        }
    );
});

// update product -- admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
        }


    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json(
        {
        success: true,
        product
        }
    )
}
);

// delete product -- admin

exports.deleteProduct = catchAsyncErrors(async (req, res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
        }

    await product.deleteOne();

    res.status(200).json(
        {
        success: true,
        message: "product deleted successfully"
        }
    )
});


// get one product

exports.getProductDetails = catchAsyncErrors(async (req, res, next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
        }

    product = await Product.findById(req.params.id)

    res.status(200).json(
        {
        success: true,
        product
        }
    )
});



// get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage=3;
    const productCount = await Product.countDocuments();
    const ApiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)

    const products = await ApiFeature.query;

    res.status(200).json(
        {
        success: true,
        products,
        productCount
        })
});