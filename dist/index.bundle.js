module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/constants.js":
/*!*****************************!*\
  !*** ./config/constants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost/mydb-dev',\n  JWT_SECRET: 'thisisasecret'\n};\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost/mydb-test'\n};\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost/mydb-prod'\n};\nconst defaultConfig = {\n  PORT: process.env.PORT || 3300\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object.assign({}, defaultConfig, envConfig(\"development\")));\n\n//# sourceURL=webpack:///./config/constants.js?");

/***/ }),

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./config/constants.js\");\n\n //connect the db with the url provide\n\ntry {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true,\n    useFindAndModify: false\n  });\n} catch (err) {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL);\n}\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {\n  throw e;\n});\n\n//# sourceURL=webpack:///./config/database.js?");

/***/ }),

/***/ "./config/middleware.js":
/*!******************************!*\
  !*** ./config/middleware.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  if (isProd) {\n    app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n  }\n\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  app.use(passport__WEBPACK_IMPORTED_MODULE_4___default.a.initialize());\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev'));\n  }\n});\n\n//# sourceURL=webpack:///./config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants */ \"./config/constants.js\");\n/* harmony import */ var _config_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/middleware */ \"./config/middleware.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/database */ \"./config/database.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_config_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\nconst server = http__WEBPACK_IMPORTED_MODULE_5___default.a.createServer(app);\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_6___default()(server);\napp.get('/', (req, res) => {\n  res.send('Welcome to KoAne');\n});\nObject(_modules__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\nserver.listen(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    // eslint-disable-next-line no-console\n    console.log(`\n            Server running on port : ${_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT}\n            ----\n            Running on ${\"development\"}\n            ----\n        `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/customer/customer.controllers.js":
/*!******************************************************!*\
  !*** ./src/modules/customer/customer.controllers.js ***!
  \******************************************************/
/*! exports provided: signUp, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.model */ \"./src/modules/customer/customer.model.js\");\n/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.model */ \"./src/modules/user/user.model.js\");\n\n\nasync function signUp(req, res) {\n  const data = {\n    email: req.body.email,\n    password: req.body.password,\n    userName: req.body.userName,\n    type: 'Customer'\n  };\n\n  try {\n    const user = await _user_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(data);\n    const customer = await _customer_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(Object.assign({}, req.body, {\n      userID: user._id\n    }));\n    return res.status(201).json(customer);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\nfunction login(req, res, next) {\n  res.status(200).json(req.customer);\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/customer/customer.controllers.js?");

/***/ }),

/***/ "./src/modules/customer/customer.model.js":
/*!************************************************!*\
  !*** ./src/modules/customer/customer.model.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _customer_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.validations */ \"./src/modules/customer/customer.validations.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants */ \"./config/constants.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.model */ \"./src/modules/order/order.model.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_order_order_model__WEBPACK_IMPORTED_MODULE_5__);\n/* eslint-disable no-invalid-this */\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n\n\n\n\nconst customerSchema = new mongoose.Schema({\n  userID: {\n    type: mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required'],\n    trim: true,\n    unique: true\n  },\n  contactNo: {\n    type: Number,\n    required: [true, 'contact nummber is required'],\n    trim: true\n  } // password: {\n  //     type: String,\n  //     required: [true, 'Password is required'],\n  //     trim: true,\n  //     minlength: [6, 'Password need to be longer!'],\n  //     validate: {\n  //         validator(password) {\n  //             return passwordReg.test(password);\n  //         },\n  //         message: '[VALUE] is not a valid password!',\n  //     }\n  // },\n\n});\ncustomerSchema.virtual('orders', {\n  ref: 'Order',\n  localField: '_id',\n  foreignField: 'customer'\n});\ncustomerSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\ncustomerSchema.methods = {\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  // authenticateUser(password) {\n  //     return compareSync(password, this.password);\n  // },\n  createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName //token: `JWT ${this.createToken()}`,\n\n    };\n  }\n\n};\nconst Customer = mongoose.model('Customer', customerSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customer);\n\n//# sourceURL=webpack:///./src/modules/customer/customer.model.js?");

/***/ }),

/***/ "./src/modules/customer/customer.routes.js":
/*!*************************************************!*\
  !*** ./src/modules/customer/customer.routes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ \"celebrate\");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _customer_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.controllers */ \"./src/modules/customer/customer.controllers.js\");\n/* harmony import */ var _customer_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.validations */ \"./src/modules/customer/customer.validations.js\");\n\n\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/signup', Object(celebrate__WEBPACK_IMPORTED_MODULE_1__[\"celebrate\"])({\n  [celebrate__WEBPACK_IMPORTED_MODULE_1__[\"Segments\"].BODY]: _customer_validations__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup_Schema\n}), _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"signUp\"]); //routes.post('/login', authLocal, customerController.login);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/customer/customer.routes.js?");

/***/ }),

/***/ "./src/modules/customer/customer.validations.js":
/*!******************************************************!*\
  !*** ./src/modules/customer/customer.validations.js ***!
  \******************************************************/
/*! exports provided: passwordReg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passwordReg\", function() { return passwordReg; });\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nconst signup_Schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n  firstName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  lastName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  contactNo: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signup_Schema\n});\n\n//# sourceURL=webpack:///./src/modules/customer/customer.validations.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_vendor_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/vendor.routes */ \"./src/modules/vendor/vendor.routes.js\");\n/* harmony import */ var _location_location_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location/location.routes */ \"./src/modules/location/location.routes.js\");\n/* harmony import */ var _user_user_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.routes */ \"./src/modules/user/user.routes.js\");\n/* harmony import */ var _customer_customer_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.routes */ \"./src/modules/customer/customer.routes.js\");\n/* harmony import */ var _order_order_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.routes */ \"./src/modules/order/order.routes.js\");\n/* harmony import */ var _order_order_routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_order_order_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _product_product_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.routes */ \"./src/modules/product/product.routes.js\");\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.services */ \"./src/services/auth.services.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.use('/vendor', _vendor_vendor_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  app.use('/customer', _customer_customer_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  app.use('/user', _user_user_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  app.use('/product', _product_product_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  app.get('/hello', _services_auth_services__WEBPACK_IMPORTED_MODULE_6__[\"authJwt\"], (req, res) => {\n    console.log(req);\n    res.send('this is a private route');\n  });\n  app.use('/location', _location_location_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.use('/order', _order_order_routes__WEBPACK_IMPORTED_MODULE_4___default.a);\n});\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/location/location.contrllers.js":
/*!*****************************************************!*\
  !*** ./src/modules/location/location.contrllers.js ***!
  \*****************************************************/
/*! exports provided: createLocation, getUserLocation, getLocation, updateLocation, deleteLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLocation\", function() { return createLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserLocation\", function() { return getUserLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocation\", function() { return updateLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteLocation\", function() { return deleteLocation; });\nconst Location = __webpack_require__(/*! ./location.model */ \"./src/modules/location/location.model.js\");\n\nconst User = __webpack_require__(/*! ../user/user.model */ \"./src/modules/user/user.model.js\");\n\nasync function createLocation(req, res) {\n  console.log(req.body);\n  const location = new Location(req.body);\n\n  try {\n    await location.save();\n    res.status(201).json(location);\n  } catch (e) {\n    res.status(500).json(`Unable to create location: ${e} `);\n  }\n}\nasync function getUserLocation(req, res) {\n  const _id = req.params.id;\n\n  try {\n    const location = await Location.find({\n      owner: req.params.id\n    }); //const user = await User.findById(req.params.id)\n    //await user.populate({path: 'locations'}).execPopulate()\n\n    res.status(200).send(location);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n}\nasync function getLocation(req, res) {\n  const _id = req.params.id;\n  const location = await Location.findById(_id);\n\n  if (!location) {\n    res.status(404).send('No data found');\n  } else {\n    res.send(location);\n  }\n}\nasync function updateLocation(req, res) {\n  const _id = req.params.id;\n  const location = await Location.findById(_id);\n\n  if (!location) {\n    return res.status(404).send('Invalid updation');\n  }\n\n  const updates = Object.keys(req.body);\n  const allowedUpdates = ['lattitude', 'longitude'];\n  const isValidOperation = updates.every(update => allowedUpdates.includes(update));\n\n  if (!isValidOperation) {\n    return res.status(400).send({\n      error: 'Invalid updates'\n    });\n  }\n\n  try {\n    updates.forEach(update => {\n      location[update] = req.body[update];\n    });\n    await location.save();\n    res.send(location);\n  } catch (e) {\n    return res.status(400).json('Unable to update the location');\n  }\n}\nasync function deleteLocation(req, res) {\n  const _id = req.params.id;\n  console.log(_id);\n  const location = await Location.findById(_id);\n  console.log(location);\n\n  if (!location) {\n    return res.status(404).send('Invalid deletion');\n  }\n\n  try {\n    await location.remove();\n    res.status(200).send(location);\n  } catch (e) {\n    res.status(500).send();\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/location/location.contrllers.js?");

/***/ }),

/***/ "./src/modules/location/location.model.js":
/*!************************************************!*\
  !*** ./src/modules/location/location.model.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst locationSchema = new mongoose.Schema({\n  owner: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    trim: true,\n    ref: 'User'\n  },\n  lattitude: {\n    type: Number,\n    required: true\n  },\n  longitude: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Location = mongoose.model('Location', locationSchema);\nmodule.exports = Location;\n\n//# sourceURL=webpack:///./src/modules/location/location.model.js?");

/***/ }),

/***/ "./src/modules/location/location.routes.js":
/*!*************************************************!*\
  !*** ./src/modules/location/location.routes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ \"celebrate\");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _location_contrllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.contrllers */ \"./src/modules/location/location.contrllers.js\");\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/create', _location_contrllers__WEBPACK_IMPORTED_MODULE_2__[\"createLocation\"]);\nroutes.get('/get/:id', _location_contrllers__WEBPACK_IMPORTED_MODULE_2__[\"getLocation\"]);\nroutes.patch('/update/:id', _location_contrllers__WEBPACK_IMPORTED_MODULE_2__[\"updateLocation\"]);\nroutes.delete('/delete/:id', _location_contrllers__WEBPACK_IMPORTED_MODULE_2__[\"deleteLocation\"]);\nroutes.get('/getUser/:id', _location_contrllers__WEBPACK_IMPORTED_MODULE_2__[\"getUserLocation\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/location/location.routes.js?");

/***/ }),

/***/ "./src/modules/order/order.model.js":
/*!******************************************!*\
  !*** ./src/modules/order/order.model.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst validator = __webpack_require__(/*! validator */ \"validator\");\n\nconst orderSchema = new mongoose.Schema({\n  description: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  completed: {\n    type: Boolean,\n    default: false\n  },\n  customer: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Customer'\n  },\n  vendor: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Vendor'\n  },\n  latitude: {\n    type: Number,\n    required: true\n  },\n  longitude: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Order = mongoose.model('Order', orderSchema);\nmodule.exports = Order;\n\n//# sourceURL=webpack:///./src/modules/order/order.model.js?");

/***/ }),

/***/ "./src/modules/order/order.routes.js":
/*!*******************************************!*\
  !*** ./src/modules/order/order.routes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst Order = __webpack_require__(/*! ./order.model */ \"./src/modules/order/order.model.js\");\n\nconst router = new express.Router();\n\nconst Customer = __webpack_require__(/*! ../customer/customer.model */ \"./src/modules/customer/customer.model.js\");\n\nconst Vendor = __webpack_require__(/*! ../vendor/vendor.model */ \"./src/modules/vendor/vendor.model.js\");\n\nrouter.post('/create', async (req, res) => {\n  // const customer = new ObjectID(req.body.customer)\n  // const vendor = new ObjectID(req.body.vendor)\n  const order = new Order(req.body);\n\n  try {\n    await order.save();\n    res.status(201).send(order);\n  } catch (e) {\n    res.status(400).send(e);\n  }\n}); //GET /orders?complted=true\n//GET /orders?limit=10&skip=20\n//GET /orders?sortBy=createdAt:desc\"\n\nrouter.get('/customerOrders/:id', async (req, res) => {\n  // const match = {}\n  // const sort = {}\n  // if(req.query.completed) {\n  //     match.completed = req.query.completed === 'true'\n  // }\n  // if(req.query.sortBy){\n  //     const parts = req.query.sortBy.split(':')\n  //     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1\n  // }\n  //console.log(req.params.id);\n  //const customer = await Customer.findById(req.params.id)\n  //console.log(customer)\n  try {\n    //method 1\n    const orders = await Order.find({\n      customer: req.params.id\n    }); //method 2\n    // await customer.populate({\n    //     path: 'customerOrders',\n    // }).execPopulate()\n\n    res.status(200).send(orders);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n});\nrouter.get('/vendorOrders/:id', async (req, res) => {\n  // const match = {}\n  // const sort = {}\n  // if(req.query.completed) {\n  //     match.completed = req.query.completed === 'true'\n  // }\n  // if(req.query.sortBy){\n  //     const parts = req.query.sortBy.split(':')\n  //     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1\n  // }\n  try {\n    //method 1\n    const orders = await Order.find({\n      vendor: req.params.id\n    }); //method 2\n    // const vendor = await Vendor.findById(req.params.id)\n    // await vendor.populate({\n    //     path: 'vendorOrders',\n    //     match,\n    //     options: {\n    //         limit : parseInt(req.query.limit),\n    //         skip : parseInt(req.query.skip),\n    //         sort \n    //     }\n    // }).execPopulate()\n\n    res.status(200).send(orders);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n});\nrouter.get('/get/:id', async (req, res) => {\n  //const _id = req.params.id\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    res.status(200).send(order);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n});\nrouter.patch('/update/:id', async (req, res) => {\n  // const _id = req.params.id\n  const updates = Object.keys(req.body); // const allowedUpdates = ['description','completed']\n  // const isValidOperation = updates.every(update => allowedUpdates.includes(update))\n  // if(!isValidOperation){\n  //     return res.status(400).send({error: 'Invalid updates'})\n  // }\n\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    updates.forEach(update => order[update] = req.body[update]);\n    await order.save(); //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})\n\n    res.send(order);\n  } catch (e) {\n    res.status(400).send(e);\n  }\n});\nrouter.delete('/delete/:id', async (req, res) => {\n  const _id = req.params.id;\n\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    res.status(200).send(order);\n  } catch (e) {\n    res.status(500).send();\n  }\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/modules/order/order.routes.js?");

/***/ }),

/***/ "./src/modules/product/product.model.js":
/*!**********************************************!*\
  !*** ./src/modules/product/product.model.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst productSchema = new mongoose.Schema({\n  productName: {\n    type: String // required: [true, 'Product name is required'],\n    // trim: true,\n\n  },\n  price: {\n    type: Number // required: [true, 'Price is required'],\n    // trim: true,\n\n  },\n  details: {\n    type: String // trim: true,\n\n  },\n  category: {\n    type: [String] // required: [true, 'At least one category is required']\n\n  },\n  image: {\n    data: Buffer,\n    ContentType: String\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  }\n});\nconst Product = mongoose.model('Product', productSchema);\nmodule.exports = Product;\n\n//# sourceURL=webpack:///./src/modules/product/product.model.js?");

/***/ }),

/***/ "./src/modules/product/product.routes.js":
/*!***********************************************!*\
  !*** ./src/modules/product/product.routes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Product = __webpack_require__(/*! ./product.model */ \"./src/modules/product/product.model.js\");\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst multer = __webpack_require__(/*! multer */ \"multer\");\n\nconst upload = multer({\n  dest: 'uploads/'\n});\nconst productRoutes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // view all products\n\nproductRoutes.get('/', async (req, res) => {\n  try {\n    const products = await Product.find();\n    res.json(products);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n}); // create a new product\n\nproductRoutes.post('/create', upload.single('productImage.png'), (req, res) => {\n  // console.log(req.file);\n  const product = new Product({\n    productName: req.body.productName,\n    price: req.body.price,\n    details: req.body.details,\n    category: req.body.category,\n    image: req.file\n  });\n  product.save().then(data => {\n    res.json(data);\n  }).catch(err => {\n    res.json({\n      message: err\n    });\n  });\n}); // select a product by id \n\nproductRoutes.get('/get/:id', async (req, res) => {\n  try {\n    const _id = req.params.id;\n    const product = await Product.findById(_id);\n    res.json(product);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n}); // update a product by id\n\nproductRoutes.patch('/update/:id', async (req, res) => {\n  try {\n    const updatedProduct = await Product.updateOne({\n      _id: req.params.id\n    }, {\n      $set: {\n        productName: req.body.productName,\n        price: req.body.price,\n        details: req.body.details,\n        category: req.body.category\n      }\n    });\n    res.json(updatedProduct);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n}); // delete a product\n\nproductRoutes.delete('/delete/:id', async (req, res) => {\n  try {\n    const remProduct = await Product.remove({\n      _id: req.params.id\n    });\n    res.json(remProduct);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productRoutes);\n\n//# sourceURL=webpack:///./src/modules/product/product.routes.js?");

/***/ }),

/***/ "./src/modules/user/user.controllers.js":
/*!**********************************************!*\
  !*** ./src/modules/user/user.controllers.js ***!
  \**********************************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ \"./src/modules/user/user.model.js\");\n\nfunction login(req, res, next) {\n  res.status(200).json(req.user);\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/user/user.controllers.js?");

/***/ }),

/***/ "./src/modules/user/user.model.js":
/*!****************************************!*\
  !*** ./src/modules/user/user.model.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.validations */ \"./src/modules/user/user.validations.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants */ \"./config/constants.js\");\n/* eslint-disable no-invalid-this */\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n\n\n\nconst userSchema = new mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required'],\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _user_validations__WEBPACK_IMPORTED_MODULE_3__[\"passwordReg\"].test(password);\n      },\n\n      message: '[VALUE] is not a valid password!'\n    }\n  },\n  type: {\n    type: String,\n    required: true\n  }\n});\nuserSchema.virtual('vendors', {\n  ref: 'Vendor',\n  localField: '_id',\n  foreignField: 'userID'\n});\nuserSchema.virtual('customers', {\n  ref: 'Customer',\n  localField: '_id',\n  foreignField: 'userID'\n});\nuserSchema.virtual('locations', {\n  ref: 'Location',\n  localField: '_id',\n  foreignField: 'owner'\n});\nuserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\nuserSchema.methods = {\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  authenticateUser(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"compareSync\"])(password, this.password);\n  },\n\n  createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n\n  toJSON() {\n    return {\n      userName: this.userName,\n      type: this.type,\n      token: `Bearer ${this.createToken()}`\n    };\n  }\n\n};\nconst User = mongoose.model('User', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User); //export default mongoose.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/user/user.model.js?");

/***/ }),

/***/ "./src/modules/user/user.routes.js":
/*!*****************************************!*\
  !*** ./src/modules/user/user.routes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ \"celebrate\");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _user_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.controllers */ \"./src/modules/user/user.controllers.js\");\n/* harmony import */ var _user_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.validations */ \"./src/modules/user/user.validations.js\");\n\n\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/login', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authLocal\"], _user_controllers__WEBPACK_IMPORTED_MODULE_3__[\"login\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/user/user.routes.js?");

/***/ }),

/***/ "./src/modules/user/user.validations.js":
/*!**********************************************!*\
  !*** ./src/modules/user/user.validations.js ***!
  \**********************************************/
/*! exports provided: passwordReg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passwordReg\", function() { return passwordReg; });\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nconst signup_Schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n  userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signup_Schema\n});\n\n//# sourceURL=webpack:///./src/modules/user/user.validations.js?");

/***/ }),

/***/ "./src/modules/vendor/vendor.controllers.js":
/*!**************************************************!*\
  !*** ./src/modules/vendor/vendor.controllers.js ***!
  \**************************************************/
/*! exports provided: signUp, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _vendor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.model */ \"./src/modules/vendor/vendor.model.js\");\n/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.model */ \"./src/modules/user/user.model.js\");\n\n\nasync function signUp(req, res) {\n  const data = {\n    email: req.body.email,\n    password: req.body.password,\n    userName: req.body.userName,\n    type: 'Vendor'\n  };\n\n  try {\n    const user = await _user_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(data);\n    const vendor = await _vendor_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(Object.assign({}, req.body, {\n      userID: user._id\n    }));\n    return res.status(201).json(vendor);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\nfunction login(req, res, next) {\n  res.status(200).json(req.vendor);\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.controllers.js?");

/***/ }),

/***/ "./src/modules/vendor/vendor.model.js":
/*!********************************************!*\
  !*** ./src/modules/vendor/vendor.model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendor_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.validations */ \"./src/modules/vendor/vendor.validations.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants */ \"./config/constants.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.model */ \"./src/modules/order/order.model.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_order_order_model__WEBPACK_IMPORTED_MODULE_5__);\n/* eslint-disable no-invalid-this */\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n\n\n\n\nconst vendorSchema = new mongoose.Schema({\n  userID: {\n    type: mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required'],\n    trim: true,\n    unique: true\n  },\n  contactNo: {\n    type: String,\n    required: [true, 'contact number is required'],\n    trim: true\n  } // password: {\n  //     type: String,\n  //     required: [true, 'Password is required'],\n  //     trim: true,\n  //     minlength: [6, 'Password need to be longer!'],\n  //     validate: {\n  //         validator(password) {\n  //             return passwordReg.test(password);\n  //         },\n  //         message: '[VALUE] is not a valid password!',\n  //     }\n  // },\n\n});\nvendorSchema.virtual('orders', {\n  ref: 'Order',\n  localField: '_id',\n  foreignField: 'vendor'\n});\nvendorSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\nvendorSchema.methods = {\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  // authenticateUser(password) {\n  //     return compareSync(password, this.password);\n  // },\n  createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName //token: `JWT ${this.createToken()}`,\n\n    };\n  }\n\n};\nconst Vendor = mongoose.model('Vendor', vendorSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vendor);\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.model.js?");

/***/ }),

/***/ "./src/modules/vendor/vendor.routes.js":
/*!*********************************************!*\
  !*** ./src/modules/vendor/vendor.routes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ \"celebrate\");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _vendor_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.controllers */ \"./src/modules/vendor/vendor.controllers.js\");\n/* harmony import */ var _vendor_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor.validations */ \"./src/modules/vendor/vendor.validations.js\");\n\n\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/signup', Object(celebrate__WEBPACK_IMPORTED_MODULE_1__[\"celebrate\"])({\n  [celebrate__WEBPACK_IMPORTED_MODULE_1__[\"Segments\"].BODY]: _vendor_validations__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup_Schema\n}), _vendor_controllers__WEBPACK_IMPORTED_MODULE_3__[\"signUp\"]); //routes.post('/login', authLocal, vendorController.login);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.routes.js?");

/***/ }),

/***/ "./src/modules/vendor/vendor.validations.js":
/*!**************************************************!*\
  !*** ./src/modules/vendor/vendor.validations.js ***!
  \**************************************************/
/*! exports provided: passwordReg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passwordReg\", function() { return passwordReg; });\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nconst signup_Schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n  firstName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  lastName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  contactNo: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signup_Schema\n});\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! exports provided: authLocal, authJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authLocal\", function() { return authLocal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authJwt\", function() { return authJwt; });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/user/user.model */ \"./src/modules/user/user.model.js\");\n/* harmony import */ var _modules_vendor_vendor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/vendor/vendor.model */ \"./src/modules/vendor/vendor.model.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/constants */ \"./config/constants.js\");\n\n\n\n\n\n // local strategy\n\nconst localOpts = {\n  usernameField: 'email'\n};\nconst localStrategy = new passport_local__WEBPACK_IMPORTED_MODULE_1___default.a(localOpts, async (email, password, done) => {\n  try {\n    const user = await _modules_user_user_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n}); //Jwt strategy\n\nconst jwtOpts = {\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_2__[\"ExtractJwt\"].fromAuthHeaderAsBearerToken(),\n  secretOrKey: _config_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].JWT_SECRET\n};\nconst JwtStrategy = new passport_jwt__WEBPACK_IMPORTED_MODULE_2__[\"Strategy\"](jwtOpts, async (payload, done) => {\n  console.log(payload);\n\n  try {\n    const user = await _modules_user_user_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(payload._id);\n    console.log(user);\n\n    if (!user) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(localStrategy);\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(JwtStrategy);\nconst authLocal = passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('local', {\n  session: false\n});\nconst authJwt = passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('jwt', {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/joi\");\n\n//# sourceURL=webpack:///external_%22@hapi/joi%22?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "celebrate":
/*!****************************!*\
  !*** external "celebrate" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"celebrate\");\n\n//# sourceURL=webpack:///external_%22celebrate%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });