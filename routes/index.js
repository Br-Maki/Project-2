var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');
var passport = require('passport');
var Cart = require('../models/cart');
var Order = require('../models/order');
const { validationResult } = require('express-validator');

var csrfProtection = csrf();
router.use(csrfProtection);

// Routes accessible only if user is logged in
router.get('/user/profile.ejs', isLoggedIn, function(req, res, next){
  res.render('user/profile');
});

router.get('/user/signout.ejs', isLoggedIn, function(req, res, next) {
  req.logout(function(err) {
    if (err) {
      // Handle error
      return next(err);
    }
    // Logout successful
    res.redirect('/');
  });
});
router.use('/', function(req, res, next){
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Home Page' });
});
router.get('/shop.ejs', function(req, res, next) {
  // Find all products and execute the query
  Product.find({})
    .then(products => {
      // Render the shop/shop template and pass the products to it
      res.render('shop/shop', { title: 'Shopping Page', products: products });
    })
    .catch(err => {
      // Handle any errors
      next(err);
    });
});


router.get('/user/signup.ejs', notLoggedIn, function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErr: messages.length > 0});
});

router.post('/user/signup.ejs', passport.authenticate('local.signup', {
  successRedirect: '/user/profile.ejs', 
  failureRedirect: '/user/signup.ejs',
  failureFlash: true
}));

router.get('/user/signin.ejs', notLoggedIn, function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErr: messages.length > 0 });
});

router.post('/user/signin.ejs', passport.authenticate('local.signin', {
  successRedirect: '/user/profile.ejs',
  failureRedirect: '/user/signin.ejs',
  failureFlash: true
}));

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) {
     return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next){
  if(!req.isAuthenticated()) {
     return next();
  }
  res.redirect('/');
}

router.get('/add-to-cart/:id', async function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  try {
      const product = await Product.findById(productId).exec();
      if (!product) {
          return res.redirect('/');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/shop.ejs');
  } catch (err) {
      console.error(err);
      res.redirect('/');
  }
});

router.get('/cart.ejs', function(req, res, next) {
  if (!req.session.cart || !req.session.cart.amount) {
    return res.render('shop/cart', { products: null });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/checkout.ejs', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart.ejs');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg, csrfToken: req.csrfToken()});
});

router.post('/checkout.ejs', isLoggedIn, async function(req, res, next) {

  if (!req.session.cart) {

    return res.redirect('/cart.ejs');

  }


  var cart = new Cart(req.session.cart);


  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    // Handle validation errors

    var errMsg = 'Validation errors';

    req.flash('error', errMsg);

    return res.redirect('/checkout.ejs');

  }


  var orderItems = cart.generateArray().map(item => ({

    product: item._id,

    quantity: item.qty

  }));


  var order = new Order({ 
    name: req.user, 
    address: req.body.address, 
    items: orderItems, 
    total: cart.totalPrice });

  try {

    await order.save(); // Save the order to the database

    // Clear the cart session

    req.session.cart = null;

    // Redirect to order confirmation page with the order ID

    res.redirect('/order-confirmation.ejs?id=' + order._id);

  } catch (err) {

    // Handle database errors

    var errMsg = 'Error saving order to database';

    req.flash('error', errMsg);

    return res.redirect('/checkout.ejs');

  }

});


module.exports = router;
