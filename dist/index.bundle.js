module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./config/constants.js":
      /*!*****************************!*\
  !*** ./config/constants.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost/mydb-dev',\n  JWT_SECRET: 'thisisasecret'\n};\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost/mydb-test'\n};\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost/mydb-prod'\n};\nconst defaultConfig = {\n  PORT: process.env.PORT || 3300\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object.assign({}, defaultConfig, envConfig(\"development\")));\n\n//# sourceURL=webpack:///./config/constants.js?"
        );

        /***/
      },

    /***/ "./config/database.js":
      /*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./config/constants.js");\n\n //connect the db with the url provide\n\ntry {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true,\n    useFindAndModify: false\n  });\n} catch (err) {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].MONGO_URL);\n}\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once(\'open\', () => console.log(\'MongoDB Running\')).on(\'error\', e => {\n  throw e;\n});\n\n//# sourceURL=webpack:///./config/database.js?'
        );

        /***/
      },

    /***/ "./config/middleware.js":
      /*!******************************!*\
  !*** ./config/middleware.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ "morgan");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ "compression");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ "helmet");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport */ "passport");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst isDev = "development" === \'development\';\nconst isProd = "development" === \'production\';\n/* harmony default export */ __webpack_exports__["default"] = (app => {\n  if (isProd) {\n    app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n  }\n\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  app.use(passport__WEBPACK_IMPORTED_MODULE_4___default.a.initialize());\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_0___default()(\'dev\'));\n  }\n});\n\n//# sourceURL=webpack:///./config/middleware.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!

/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants */ \"./config/constants.js\");\n/* harmony import */ var _config_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/middleware */ \"./config/middleware.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/database */ \"./config/database.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_config_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\nconst server = http__WEBPACK_IMPORTED_MODULE_5___default.a.createServer(app);\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_6___default()(server);\napp.set(\"io\", io);\napp.get('/', (req, res) => {\n  console.log('user logged:', req.user);\n  res.send('Welcome to KoAne');\n});\nObject(_modules__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\nserver.listen(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    // eslint-disable-next-line no-console\n    console.log(`\n            Server running on port : ${_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT}\n            ----\n            Running on ${\"development\"}\n            ----\n        `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/admin/admin.controller.js":
/*!***********************************************!*\
  !*** ./src/modules/admin/admin.controller.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'const Admin = __webpack_require__(/*! ./admin.model */ "./src/modules/admin/admin.model.js");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");\n\nexports.signup = (req, res, next) => {\n  bcrypt.hash(req.body.password, 10, function (err, hash) {\n    if (err) {\n      res.json({\n        error: err\n      });\n    } else {\n      const admin = new Admin({\n        username: req.body.username,\n        email: req.body.email,\n        password: hash\n      });\n      admin.save().then(admin => {\n        res.json({\n          message: \'Admin Added Successfully\'\n        });\n      }).catch(error => {\n        res.json({\n          message: \'An error occured!\'\n        });\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/admin/admin.controller.js?'
        );

        /***/
      },

    /***/ "./src/modules/admin/admin.model.js":
      /*!******************************************!*\
  !*** ./src/modules/admin/admin.model.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'const mongoose = __webpack_require__(/*! mongoose */ "mongoose");\n\nconst Schema = mongoose.Schema;\nconst adminSchema = new Schema({\n  username: {\n    type: String\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true,\n    match: /^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\nconst Admin = mongoose.model(\'Admin\', adminSchema);\nmodule.exports = Admin;\n\n//# sourceURL=webpack:///./src/modules/admin/admin.model.js?'
        );

        /***/
      },

    /***/ "./src/modules/admin/admin.routes.js":
      /*!*******************************************!*\
  !*** ./src/modules/admin/admin.routes.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'const express = __webpack_require__(/*! express */ "express");\n\nconst router = express.Router();\n\nconst AdminController = __webpack_require__(/*! ./admin.controller */ "./src/modules/admin/admin.controller.js");\n\nrouter.post(\'/signup\', AdminController.signup);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/modules/admin/admin.routes.js?'
        );

        /***/
      },

    /***/ "./src/modules/customer/customer.controllers.js":
      /*!******************************************************!*\
  !*** ./src/modules/customer/customer.controllers.js ***!
  \******************************************************/
/*! exports provided: signUp, me, updateCustomer, deleteCustomer, profilePic, deleteProfilePic, getProfilePic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"me\", function() { return me; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCustomer\", function() { return updateCustomer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteCustomer\", function() { return deleteCustomer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profilePic\", function() { return profilePic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProfilePic\", function() { return deleteProfilePic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProfilePic\", function() { return getProfilePic; });\n/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/user.model */ \"./src/modules/user/user.model.js\");\n/* harmony import */ var _customer_customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer/customer.model */ \"./src/modules/customer/customer.model.js\");\n\n\n\nconst sharp = __webpack_require__(/*! sharp */ \"sharp\");\n\nasync function signUp(req, res) {\n  const data = {\n    email: req.body.email,\n    password: req.body.password,\n    userName: req.body.userName,\n    type: 'Customer'\n  };\n\n  try {\n    const user = await _user_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(data);\n    await user.createToken();\n    const customer = await _customer_customer_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(Object.assign({}, req.body, {\n      userID: user._id\n    }));\n    return res.status(201).json(customer);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n} // export function login(req, res, next) {\n//     res.status(200).json(req.customer);\n//     return next();\n// }\n//user data\n\nasync function me(req, res) {\n  console.log(req.user);\n  const customer = await _customer_customer_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n    email: req.user.email\n  });\n  console.log(customer);\n  res.status(200).send(customer);\n} //update\n\nasync function updateCustomer(req, res) {\n  const customer = await _customer_customer_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n    email: req.user.email\n  });\n  const updates = Object.keys(req.body);\n  console.log('in update ', req.user.email, updates);\n  const allowedUpdates = ['firstName', 'lastName', 'password', 'email', 'contactNo', 'userName', 'deliveryAddresses'];\n  const isValidOperation = updates.every(update => allowedUpdates.includes(update));\n\n  if (!isValidOperation) {\n    return res.status(400).send({\n      error: 'Invalid updates'\n    });\n  }\n\n  try {\n    //update the user data\n    console.log('updating user');\n    console.log('customer in update', customer);\n\n    if (req.body.email) {\n      req.user.email = req.body.email;\n    }\n\n    if (req.body.userName) {\n      req.user.userName = req.body.userName;\n    }\n\n    if (req.body.password) {\n      req.user.password = req.body.password;\n    }\n\n    await req.user.save();\n    await console.log('updated user: ', req.user); //update the customer data\n\n    await updates.forEach(update => {\n      console.log(update, req.body[update]);\n      customer[update] = req.body[update];\n    });\n    console.log('done update customer', customer);\n    const updatedCustomer = customer;\n    await updatedCustomer.save(); //const user = await User.findByIdAndUpdate(_id,req.body,{ new: true, runValidators: true })\n\n    res.send(customer);\n  } catch (e) {\n    console.log(e);\n    res.status(400).send(e);\n  }\n} //delete\n\nasync function deleteCustomer(req, res) {\n  const _id = req.user._id;\n  const customer = await _customer_customer_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n    email: req.user.email\n  });\n\n  try {\n    await req.user.remove();\n    await customer.remove();\n    res.status(200).send(`account holder with ${req.user.userName} userName (${customer.firstName} ${customer.lastName}) account is deleted`);\n  } catch (e) {\n    res.status(500).send();\n  }\n} //profile pic\n\nasync function profilePic(req, res) {\n  const buffer = await sharp(req.file.buffer).resize({\n    width: 250,\n    height: 250\n  }).png().toBuffer();\n  req.user.avatar = buffer;\n  await req.user.save();\n  res.status(200).send();\n} // export async function profilePic(req,res) {\n//     var base64Data = req.body.image;\n//     console.log('writing file...', base64Data);\n//     fs.writeFile(__dirname + \"/upload/out.png\", base64Data, 'base64', function(err) {\n//         if (err) console.log(err);\n//         fs.readFile(__dirname + \"/upload/out.png\", function(err, data) {\n//             if (err) throw err;\n//             console.log('reading file...', data.toString('base64'));\n//             res.send(data);\n//         });\n//     });\n// }\n\nasync function deleteProfilePic(req, res) {\n  req.user.avatar = undefined;\n  await req.user.save();\n  res.status(200).send();\n}\nasync function getProfilePic(req, res) {\n  try {\n    const user = await _user_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n\n    if (!user || !user.avatar) {\n      throw new Error();\n    }\n\n    res.set('Content-Type', 'image/png');\n    res.send(user.avatar);\n  } catch (e) {\n    res.status(404).send();\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/customer/customer.controllers.js?");

/***/ }),

/***/ "./src/modules/customer/customer.model.js":
/*!************************************************!*\
  !*** ./src/modules/customer/customer.model.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _customer_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.validations */ \"./src/modules/customer/customer.validations.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants */ \"./config/constants.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.model */ \"./src/modules/order/order.model.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_order_order_model__WEBPACK_IMPORTED_MODULE_5__);\n/* eslint-disable no-invalid-this */\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Location = __webpack_require__(/*! ../location/location.model */ \"./src/modules/location/location.model.js\");\n\n\n\n\n\n\n\nconst customerSchema = new mongoose.Schema({\n  userID: {\n    type: mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required'],\n    trim: true,\n    unique: true\n  },\n  contactNo: {\n    type: Number,\n    required: [true, 'contact nummber is required'],\n    trim: true\n  },\n  // lastReportedLocation:{\n  //     type: mongoose.Schema.Types.ObjectId,\n  //     ref: 'Location'\n  // },\n  deliveryAddresses: [{\n    name: String,\n    position: []\n  }]\n});\ncustomerSchema.virtual('orders', {\n  ref: 'Order',\n  localField: '_id',\n  foreignField: 'customer'\n});\ncustomerSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\ncustomerSchema.methods = {\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  // authenticateUser(password) {\n  //     return compareSync(password, this.password);\n  // },\n  createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      email: this.email,\n      firstName: this.firstName,\n      lastName: this.lastName,\n      contactNo: this.contactNo,\n      lastReportedLocation: this.lastReportedLocation,\n      deliveryAddresses: this.deliveryAddresses //token: `JWT ${this.createToken()}`,\n\n    };\n  }\n\n};\nconst Customer = mongoose.model('Customer', customerSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customer); //module.exports = Customer;\n// module.exports = {\n//     Customer\n// }\n\n//# sourceURL=webpack:///./src/modules/customer/customer.model.js?");

/***/ }),

/***/ "./src/modules/customer/customer.routes.js":
/*!*************************************************!*\
  !*** ./src/modules/customer/customer.routes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ \"celebrate\");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _customer_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.controllers */ \"./src/modules/customer/customer.controllers.js\");\n/* harmony import */ var _customer_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.validations */ \"./src/modules/customer/customer.validations.js\");\n\n\n\n\n\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst multer = __webpack_require__(/*! multer */ \"multer\");\n\nconst upload = multer({\n  //dest: 'src/modules/customer/avatar',\n  limits: {\n    fileSize: 10000000 //10Mb\n\n  },\n\n  fileFilter(req, file, cb) {\n    if (!file.originalname.match(/\\.(png|jpg|jpeg)$/)) {\n      return cb(new Error('Wrong file type'));\n    }\n\n    cb(undefined, true);\n  }\n\n});\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); //routes.use(bodyParser.urlencoded({ extended: true }))\n//routes.use(bodyParser.json({ limit: '15mb' }))\n// routes.use(bodyParser.json({limit: '50mb'}));\n// routes.use(bodyParser.urlencoded({\n//     limit: '50mb',\n//     parameterLimit: 1000000,\n//     extended: true \n//   }));\n\nroutes.post('/image', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], (req, res) => {\n  fs.writeFile('./out.png', req.body.imgsource, 'base64', err => {\n    if (err) throw err;\n  });\n  res.status(200);\n});\nroutes.post('/signup', Object(celebrate__WEBPACK_IMPORTED_MODULE_1__[\"celebrate\"])({\n  [celebrate__WEBPACK_IMPORTED_MODULE_1__[\"Segments\"].BODY]: _customer_validations__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup_Schema\n}), _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"signUp\"]); //routes.post('/login', authLocal, customerController.login);\n\nroutes.get('/me', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"me\"]);\nroutes.patch('/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"updateCustomer\"]);\nroutes.delete('/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"deleteCustomer\"]);\nroutes.post('/avatar', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], upload.single('upload'), _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"profilePic\"], (error, req, res, next) => {\n  console.log(error);\n  res.status(400).send({\n    error: error.message\n  });\n}); // routes.post('/avatar',authJwt,upload.array(),customerController.profilePic,(error,req,res,next) => {\n//     console.log(error)\n//     res.status(400).send({error: error.message});\n// });\n\nroutes.delete('/avatar', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"deleteProfilePic\"]);\nroutes.get('/avatar/:id', _customer_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getProfilePic\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/customer/customer.routes.js?");

/***/ }),

/***/ "./src/modules/customer/customer.validations.js":
/*!******************************************************!*\
  !*** ./src/modules/customer/customer.validations.js ***!
  \******************************************************/
      /*! exports provided: passwordReg, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordReg", function() { return passwordReg; });\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nconst signup_Schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n  firstName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  lastName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  contactNo: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n});\n/* harmony default export */ __webpack_exports__["default"] = ({\n  signup_Schema\n});\n\n//# sourceURL=webpack:///./src/modules/customer/customer.validations.js?'
        );

        /***/
      },

    /***/ "./src/modules/index.js":
      /*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_vendor_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/vendor.routes */ \"./src/modules/vendor/vendor.routes.js\");\n/* harmony import */ var _location_location_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location/location.routes */ \"./src/modules/location/location.routes.js\");\n/* harmony import */ var _user_user_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.routes */ \"./src/modules/user/user.routes.js\");\n/* harmony import */ var _customer_customer_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.routes */ \"./src/modules/customer/customer.routes.js\");\n/* harmony import */ var _order_order_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.routes */ \"./src/modules/order/order.routes.js\");\n/* harmony import */ var _product_product_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.routes */ \"./src/modules/product/product.routes.js\");\n/* harmony import */ var _admin_admin_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.routes */ \"./src/modules/admin/admin.routes.js\");\n/* harmony import */ var _admin_admin_routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_admin_admin_routes__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _message_message_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message/message.routes */ \"./src/modules/message/message.routes.js\");\n/* harmony import */ var _message_message_routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_message_message_routes__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.services */ \"./src/services/auth.services.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  let io = app.get(\"io\");\n  app.use('/vendor', _vendor_vendor_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  app.use('/customer', _customer_customer_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  app.use('/user', _user_user_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  app.use('/product', _product_product_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  app.get('/hello', _services_auth_services__WEBPACK_IMPORTED_MODULE_8__[\"authJwt\"], (req, res) => {\n    console.log(req);\n    res.send('this is a private route');\n  });\n  app.use('/location', (req, res, next) => {\n    req.io = io;\n    next();\n  }, _location_location_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.use('/order', _order_order_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  app.use('/admin', _admin_admin_routes__WEBPACK_IMPORTED_MODULE_6___default.a);\n  app.use('/message', _message_message_routes__WEBPACK_IMPORTED_MODULE_7___default.a);\n});\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/location/location.controllers.js":
/*!******************************************************!*\
  !*** ./src/modules/location/location.controllers.js ***!
  \******************************************************/
/*! exports provided: createLocation, getUserLocation, getLocation, getUsersNear, getSameUsersNear, updateUserLocation, updateLocation, deleteUserLocation, deleteLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLocation\", function() { return createLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserLocation\", function() { return getUserLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsersNear\", function() { return getUsersNear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSameUsersNear\", function() { return getSameUsersNear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserLocation\", function() { return updateUserLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocation\", function() { return updateLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUserLocation\", function() { return deleteUserLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteLocation\", function() { return deleteLocation; });\n/* harmony import */ var _customer_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer/customer.model */ \"./src/modules/customer/customer.model.js\");\nconst Location = __webpack_require__(/*! ./location.model */ \"./src/modules/location/location.model.js\");\n\nconst User = __webpack_require__(/*! ../user/user.model */ \"./src/modules/user/user.model.js\");\n\n //let io = app.get(\"io\");\n\nasync function createLocation(req, res) {\n  console.log(req.body);\n  let flag = false;\n  let sendLocation = null;\n  var data = {\n    position: [req.body.lattitude, req.body.longitude],\n    owner: req.user._id,\n    type: req.user.type //owner: req.body.owner,\n    // type: req.body.type\n\n  };\n  const checkLocation = await Location.findOne({\n    owner: req.user._id\n  });\n  console.log(checkLocation);\n\n  if (checkLocation !== null) {\n    console.log('already a location exist for the current user, hence updating the location');\n\n    try {\n      //console.log(req.body.lattitude, req.body.longitude)\n      checkLocation.position = [req.body.lattitude, req.body.longitude]; //console.log('updated location',checkLocation)\n\n      await checkLocation.save(); //res.status(201).json(checkLocation)\n\n      sendLocation = checkLocation;\n      flag = true;\n    } catch (e) {\n      res.status(500).json(`Unable to update location: ${e} `);\n      flag = false;\n    }\n  } else {\n    const location = new Location(data);\n\n    try {\n      await location.save(); //res.status(201).json(location)\n\n      sendLocation = location;\n      flag = true;\n    } catch (e) {\n      res.status(500).json(`Unable to create location: ${e} `);\n      flag = false;\n    }\n  }\n\n  if (flag) {\n    if (req.user.type == 'Customer') {\n      //const customer = await Customer.findOne({email: req.user.email})\n      const customer = await _customer_customer_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n        email: req.user.email\n      });\n      console.log('customer', customer);\n\n      try {\n        //customer.lastReportedLocation = [req.body.lattitude,req.body.longitude]\n        customer.lastReportedLocation = sendLocation._id;\n        let postionData = [req.body.lattitude, req.body.longitude];\n        customer.deliveryAddresses.push({\n          position: postionData\n        });\n        await customer.save();\n        res.status(201).json(customer);\n      } catch (err) {\n        res.status(500).json(`Unable to create location: ${e} `);\n      }\n    } else {\n      //vendor \n      res.status(201).json(sendLocation);\n    }\n  }\n}\nasync function getUserLocation(req, res) {\n  const _id = req.user._id;\n\n  try {\n    const location = await Location.find({\n      owner: _id\n    }); //const user = await User.findById(req.params.id)\n    //await user.populate({path: 'locations'}).execPopulate()\n\n    res.status(200).send(location);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n}\nasync function getLocation(req, res) {\n  const _id = req.params.id;\n  const location = await Location.findById(_id);\n\n  if (!location) {\n    res.status(404).send('No data found');\n  } else {\n    res.send(location);\n  }\n} //read other user's locations\n\nasync function getUsersNear(req, res) {\n  //console.log(req.io)\n  // console.log('IO: ', io);\n  // io.on('connect', socket => {\n  //    // handle various socket connections here\n  // });\n  const _id = req.user._id;\n\n  try {\n    const location = await Location.findOne({\n      owner: _id\n    });\n    console.log('user location', location.position[0]);\n    var lat = location.position[0];\n    var lan = location.position[1];\n    const type = location.type;\n    var query = type == 'Vendor' ? 'Customer' : 'Vendor';\n    var nearUsers = await Location.aggregate([{\n      $geoNear: {\n        near: {\n          type: \"Point\",\n          coordinates: [lat, lan]\n        },\n        distanceField: \"dist.calculated\",\n        maxDistance: 2000,\n        query: {\n          type: query\n        },\n        includeLocs: \"dist.location\",\n        spherical: true\n      }\n    }]);\n    nearUsers.splice(0, 1);\n    res.status(200).send(nearUsers);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n} //get same type users\n\nasync function getSameUsersNear(req, res) {\n  const _id = req.user._id;\n\n  try {\n    const location = await Location.findOne({\n      owner: _id\n    });\n    console.log('user location', location.position[0]);\n    var lat = location.position[0];\n    var lan = location.position[1];\n    const type = location.type;\n    var query = type == 'Vendor' ? 'Vendor' : 'Customer';\n    var nearUsers = await Location.aggregate([{\n      $geoNear: {\n        near: {\n          type: \"Point\",\n          coordinates: [lat, lan]\n        },\n        distanceField: \"dist.calculated\",\n        maxDistance: 2000,\n        query: {\n          type: query\n        },\n        includeLocs: \"dist.location\",\n        spherical: true\n      }\n    }]);\n    nearUsers.splice(0, 1);\n    res.status(200).send(nearUsers);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n} // db.places.aggregate([\n//     {\n//       $geoNear: {\n//          near: { type: \"Point\", coordinates: [ -73.99279 , 40.719296 ] },\n//          distanceField: \"dist.calculated\",\n//          maxDistance: 2,\n//          query: { category: \"Parks\" },\n//          includeLocs: \"dist.location\",\n//          spherical: true\n//       }\n//     }\n//  ])\n\nasync function updateUserLocation(req, res) {\n  const _id = req.user._id;\n  const location = await Location.findOne({\n    owner: _id\n  });\n  console.log('location to update', location);\n\n  if (!location) {\n    return res.status(404).send('Invalid updation');\n  }\n\n  const updates = Object.keys(req.body);\n  const allowedUpdates = ['lattitude', 'longitude'];\n  const isValidOperation = updates.every(update => allowedUpdates.includes(update));\n\n  if (!isValidOperation) {\n    return res.status(400).send({\n      error: 'Invalid updates'\n    });\n  }\n\n  try {\n    // updates.forEach(update => {\n    //     location[update] = req.body[update]\n    // })\n    location.position = [req.body.lattitude, req.body.longitude];\n    console.log('updated location', location);\n    await location.save();\n    res.send(location);\n  } catch (e) {\n    return res.status(400).json('Unable to update the location');\n  }\n}\nasync function updateLocation(req, res) {\n  const _id = req.params.id;\n  const location = await Location.findById(_id);\n\n  if (!location) {\n    return res.status(404).send('Invalid updation');\n  }\n\n  const updates = Object.keys(req.body);\n  const allowedUpdates = ['lattitude', 'longitude'];\n  const isValidOperation = updates.every(update => allowedUpdates.includes(update));\n\n  if (!isValidOperation) {\n    return res.status(400).send({\n      error: 'Invalid updates'\n    });\n  }\n\n  try {\n    updates.forEach(update => {\n      location[update] = req.body[update];\n    });\n    await location.save();\n    res.send(location);\n  } catch (e) {\n    return res.status(400).json('Unable to update the location');\n  }\n}\nasync function deleteUserLocation(req, res) {\n  const _id = req.user._id;\n  console.log(_id);\n  const location = await Location.findOne({\n    owner: _id\n  });\n  console.log('deleting locatin', location);\n\n  if (!location) {\n    return res.status(404).send('Invalid deletion');\n  }\n\n  try {\n    await location.remove();\n    res.status(200).send(location);\n  } catch (e) {\n    res.status(500).send();\n  }\n}\nasync function deleteLocation(req, res) {\n  const _id = req.params.id;\n  console.log(_id);\n  const location = await Location.findById(_id);\n  console.log(location);\n\n  if (!location) {\n    return res.status(404).send('Invalid deletion');\n  }\n\n  try {\n    await location.remove();\n    res.status(200).send(location);\n  } catch (e) {\n    res.status(500).send();\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/location/location.controllers.js?");

/***/ }),

/***/ "./src/modules/location/location.model.js":
/*!************************************************!*\
  !*** ./src/modules/location/location.model.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst locationSchema = new mongoose.Schema({\n  owner: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    trim: true,\n    ref: 'User'\n  },\n  type: {\n    type: String,\n    required: true\n  },\n  position: [] // lattitude:{\n  //     type: Number,\n  //     required: true\n  // },\n  // longitude: {\n  //     type: Number,\n  //     required: true\n  // },\n\n}, {\n  timestamps: true\n});\nlocationSchema.virtual('customers', {\n  ref: 'Customer',\n  localField: '_id',\n  foreignField: 'lastReportedLocation'\n});\n\nfunction arrayLimit(val) {\n  return val.length == 2;\n} //db.restaurants.createIndex( { 'position' : \"2dsphere\" } )\n\n\nlocationSchema.index({\n  'position': \"2dsphere\"\n});\nconst Location = mongoose.model('Location', locationSchema);\nmodule.exports = Location; //export default Location;\n\n//# sourceURL=webpack:///./src/modules/location/location.model.js?");

        /***/
      },

    /***/ "./src/modules/location/location.routes.js":
      /*!*************************************************!*\
  !*** ./src/modules/location/location.routes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ \"celebrate\");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _location_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.controllers */ \"./src/modules/location/location.controllers.js\");\n\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); //create a location for a user in the system\n\nroutes.post('/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"createLocation\"]); //read a location related to a user\n\nroutes.get('/user/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getUserLocation\"]); //update a location related to a user\n\nroutes.patch('/user/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"updateUserLocation\"]); //delete a location related to a user\n\nroutes.delete('/user/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"deleteUserLocation\"]); //get near users\n\nroutes.get('/users/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getUsersNear\"]); //get same type users\n\nroutes.get('/compete/', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getSameUsersNear\"]);\nroutes.get('/getUser/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authJwt\"], _location_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getUserLocation\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/location/location.routes.js?");

/***/ }),

/***/ "./src/modules/message/message.controller.js":
/*!***************************************************!*\
  !*** ./src/modules/message/message.controller.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "const Message = __webpack_require__(/*! ./message.model */ \"./src/modules/message/message.model.js\");\n\nexports.msg_get_all_messages = (req, res, next) => {\n  //const receiverId = req.params.userId\n  //Message.find({ receiver: receiverId })\n  Message.find().exec().then(docs => {\n    console.log(docs);\n    res.json(docs);\n  }).catch(err => {\n    console.log(err);\n    res.json({\n      error: err\n    });\n  });\n};\n\nexports.msg_create_message = (req, res, next) => {\n  //const senderId = req.params.userId\n  //const receiverId = req.params.userId\n  const message = new Message({\n    sender: req.body.sender,\n    //receiver: receiverId,\n    receiver: req.body.receiver,\n    message: req.body.message,\n    read: false\n  });\n  message.save().then(result => {\n    console.log(result);\n    res.json({\n      message: 'Message Send!'\n    });\n  }).catch(err => {\n    console.log(err);\n    res.json({\n      error: err\n    });\n  });\n};\n\nexports.msg_get_message = (req, res, next) => {\n  const id = req.params.msgId;\n  Message.findById(id).exec().then(result => {\n    console.log(\"From database\", result);\n    res.json(result);\n\n    if (result.read == false) {\n      Message.update({\n        _id: id\n      }, {\n        $set: {\n          read: true\n        }\n      }).exec();\n    }\n  }).catch(err => {\n    console.log(err);\n    res.json({\n      error: err\n    });\n  });\n};\n\nexports.msg_set_read = (req, res, next) => {\n  const id = req.params.msgId;\n  const updateRead = {\n    read: true\n  };\n  Message.update({\n    _id: id\n  }, {\n    $set: updateRead\n  }).exec().then(result => {\n    console.log(result);\n    res.json({\n      message: 'Message Read!'\n    });\n  }).catch(err => {\n    console.log(err);\n    res.json({\n      error: err\n    });\n  });\n};\n\nexports.msg_delete_message = (req, res, next) => {\n  const id = req.params.msgId;\n  Message.findById(id).exec().then(result => {\n    if (result.read == true) {\n      Message.remove({\n        _id: id\n      }).exec().then(result => {\n        console.log(result);\n        res.json({\n          message: 'Deleted the message!'\n        });\n      }).catch(err => {\n        console.log(err);\n        res.json({\n          error: err\n        });\n      });\n    } else {\n      res.json({\n        message: 'Please read the message'\n      }); //redirect to msg_get_message method\n    }\n  }).catch(err => {\n    console.log(err);\n    res.json({\n      error: err\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/message/message.controller.js?"
        );

        /***/
      },

    /***/ "./src/modules/message/message.model.js":
      /*!**********************************************!*\
  !*** ./src/modules/message/message.model.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\nconst messageSchema = new Schema({\n  sender: {\n    type: String,\n    required: true\n  },\n  receiver: {\n    type: String,\n    required: true\n  },\n  message: {\n    type: String,\n    required: true\n  },\n  read: {\n    type: Boolean,\n    required: true\n  }\n});\nconst Message = mongoose.model('message', messageSchema);\nmodule.exports = Message;\n\n//# sourceURL=webpack:///./src/modules/message/message.model.js?"
        );

        /***/
      },

    /***/ "./src/modules/message/message.routes.js":
      /*!***********************************************!*\
  !*** ./src/modules/message/message.routes.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nconst messageController = __webpack_require__(/*! ./message.controller */ \"./src/modules/message/message.controller.js\");\n\nrouter.get('/', messageController.msg_get_all_messages); //router.get('/:userId', messageController.msg_get_all_messages);\n//router.post('/', messageController.msg_create_message);\n\nrouter.post('/:userId', messageController.msg_create_message);\nrouter.get('/:msgId', messageController.msg_get_message);\nrouter.put('/:msgId', messageController.msg_set_read);\nrouter.delete('/:msgId', messageController.msg_delete_message);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/modules/message/message.routes.js?"
        );

        /***/
      },

    /***/ "./src/modules/order/order.model.js":
      /*!******************************************!*\
  !*** ./src/modules/order/order.model.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst validator = __webpack_require__(/*! validator */ \"validator\");\n\nconst orderSchema = new mongoose.Schema({\n  products: {\n    type: Array,\n    required: true\n  },\n  description: {\n    type: String,\n    trim: true\n  },\n  status: {\n    type: String,\n    default: false\n  },\n  customer: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    ref: \"Customer\"\n  },\n  vendor: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    ref: \"Vendor\"\n  },\n  posotion: [],\n  date: {\n    type: Date,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Order = mongoose.model(\"Order\", orderSchema);\nmodule.exports = Order;\n\n//# sourceURL=webpack:///./src/modules/order/order.model.js?");

        /***/
      },

    /***/ "./src/modules/order/order.routes.js":
      /*!*******************************************!*\
  !*** ./src/modules/order/order.routes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _location_location_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location/location.routes */ \"./src/modules/location/location.routes.js\");\n\n\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst Order = __webpack_require__(/*! ./order.model */ \"./src/modules/order/order.model.js\");\n\nconst router = new express.Router();\n\nconst Customer = __webpack_require__(/*! ../customer/customer.model */ \"./src/modules/customer/customer.model.js\");\n\nconst Vendor = __webpack_require__(/*! ../vendor/vendor.model */ \"./src/modules/vendor/vendor.model.js\");\n\nrouter.post('/create', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  const data = {\n    products: req.body.products,\n    description: req.body.description,\n    completed: 'NC',\n    //not complete\n    customer: req.user._id,\n    vendor: req.body.vendor,\n    position: [req.body.lattitude, req.body.longitude],\n    date: req.body.date\n  };\n  const order = new Order(req.body);\n\n  try {\n    await order.save();\n    res.status(201).send(order);\n  } catch (e) {\n    res.status(400).send(e);\n  }\n});\nrouter.get('/customerOrders', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  const id = req.user._id;\n\n  try {\n    const orders = await Order.find({\n      customer: id\n    });\n    res.status(200).send(orders);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n});\nrouter.get('/vendorOrders', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  const id = req.user._id;\n\n  try {\n    const orders = await Order.find({\n      vendor: id\n    });\n    res.status(200).send(orders);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n}); //get order by id\n\nrouter.get('/get/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    res.status(200).send(order);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n}); //delivering status\n\nrouter.patch('/deliver/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    order.status = 'D'; //D -> delivering\n\n    await order.save(); //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})\n\n    res.send(order);\n  } catch (e) {\n    res.status(400).send(e);\n  }\n}); //complete status\n\nrouter.patch('/deliver/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    order.status = 'C'; //C -> Completed\n\n    await order.save(); //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})\n\n    res.send(order);\n  } catch (e) {\n    res.status(400).send(e);\n  }\n}); //update order\n\nrouter.patch('/update/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  const updates = Object.keys(req.body);\n\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    updates.forEach(update => order[update] = req.body[update]);\n    await order.save(); //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})\n\n    res.send(order);\n  } catch (e) {\n    res.status(400).send(e);\n  }\n}); //delete an order\n\nrouter.delete('/delete/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_0__[\"authJwt\"], async (req, res) => {\n  const _id = req.params.id;\n\n  try {\n    const order = await Order.findById(req.params.id);\n\n    if (!order) {\n      return res.status(404).send();\n    }\n\n    res.status(200).send(order);\n  } catch (e) {\n    res.status(500).send();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_location_location_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/modules/order/order.routes.js?");

    /***/ "./src/modules/product/product.model.js":
      /*!**********************************************!*\
  !*** ./src/modules/product/product.model.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst productSchema = new mongoose.Schema({\n  productName: {\n    type: String // required: [true, 'Product name is required'],\n    // trim: true,\n\n  },\n  price: {\n    type: Number // required: [true, 'Price is required'],\n    // trim: true,\n\n  },\n  details: {\n    type: String // trim: true,\n\n  },\n  category: {\n    type: [String] // required: [true, 'At least one category is required']\n\n  },\n  image: {\n    data: Buffer,\n    ContentType: String\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  },\n  vendor: {\n    type: mongoose.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Vendor'\n  }\n});\nconst Product = mongoose.model(\"Product\", productSchema);\nmodule.exports = Product;\n\n//# sourceURL=webpack:///./src/modules/product/product.model.js?");


        /***/
      },

    /***/ "./src/modules/product/product.routes.js":
      /*!***********************************************!*\
  !*** ./src/modules/product/product.routes.js ***!
  \***********************************************/

      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Product = __webpack_require__(/*! ./product.model */ \"./src/modules/product/product.model.js\");\n\nconst productRoutes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // view all products\n\nproductRoutes.get('/', async (req, res) => {\n  try {\n    const products = await Product.find();\n    res.json(products);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n}); // create a new product\n\nproductRoutes.post('/create', (req, res) => {\n  const product = new Product({\n    productName: req.body.productName,\n    price: req.body.price,\n    details: req.body.details,\n    category: req.body.category,\n    vendor: req.body.vendor\n  });\n  product.save().then(data => {\n    res.json(data);\n  }).catch(err => {\n    res.json({\n      message: err\n    });\n  });\n}); // select a product by id \n\nproductRoutes.get('/get/:id', async (req, res) => {\n  try {\n    const _id = req.params.id;\n    const product = await Product.findById(_id);\n    res.json(product);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n}); //get by vendors ID\n\nproductRoutes.get('/vendorProducts/:id', async (req, res) => {\n  try {\n    const products = await Product.find({\n      vendor: req.params.id\n    }); //method 2\n    // const vendor = await Vendor.findById(req.params.id)\n    // console.log(vendor)\n    // await vendor.populate({\n    //     path: 'products',\n    //     match,\n    //     // options: {\n    //     //     limit : parseInt(req.query.limit),\n    //     //     skip : parseInt(req.query.skip),\n    //     //     sort \n    //     // }\n    // }).execPopulate()\n\n    res.status(200).send(products);\n  } catch (e) {\n    res.status(500).send(e);\n  }\n}); // update a product by id\n\nproductRoutes.patch('/update/:id', async (req, res) => {\n  try {\n    const updatedProduct = await Product.updateOne({\n      _id: req.params.id\n    }, {\n      $set: {\n        productName: req.body.productName,\n        price: req.body.price,\n        details: req.body.details,\n        category: req.body.category,\n        vendor: req.body.vendor\n      }\n    });\n    res.json(updatedProduct);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n}); // delete a product\n\nproductRoutes.delete('/delete/:id', async (req, res) => {\n  try {\n    const remProduct = await Product.remove({\n      _id: req.params.id\n    });\n    res.json(remProduct);\n  } catch (err) {\n    res.json({\n      message: err\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productRoutes);\n\n//# sourceURL=webpack:///./src/modules/product/product.routes.js?"
        );
        /***/
      },

    /***/ "./src/modules/user/user.controllers.js":
      /*!**********************************************!*\
  !*** ./src/modules/user/user.controllers.js ***!
  \**********************************************/
      /*! exports provided: login */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/modules/user/user.model.js");\n\nfunction login(req, res, next) {\n  res.status(200).json(req.user);\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/user/user.controllers.js?'
        );

        /***/
      },

    /***/ "./src/modules/user/user.model.js":
      /*!****************************************!*\
  !*** ./src/modules/user/user.model.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.validations */ \"./src/modules/user/user.validations.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants */ \"./config/constants.js\");\n/* eslint-disable no-invalid-this */\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n\n\n\nconst userSchema = new mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required'],\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _user_validations__WEBPACK_IMPORTED_MODULE_3__[\"passwordReg\"].test(password);\n      },\n\n      message: '[VALUE] is not a valid password!'\n    }\n  },\n  type: {\n    type: String,\n    required: true\n  }\n});\nuserSchema.virtual('vendors', {\n  ref: 'Vendor',\n  localField: '_id',\n  foreignField: 'userID'\n});\nuserSchema.virtual('customers', {\n  ref: 'Customer',\n  localField: '_id',\n  foreignField: 'userID'\n});\nuserSchema.virtual('locations', {\n  ref: 'Location',\n  localField: '_id',\n  foreignField: 'owner'\n});\nuserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\nuserSchema.methods = {\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  authenticateUser(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"compareSync\"])(password, this.password);\n  },\n\n  createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n\n  toJSON() {\n    return {\n      userName: this.userName,\n      type: this.type,\n      token: `Bearer ${this.createToken()}`\n    };\n  }\n\n};\nconst User = mongoose.model('User', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User); //export default mongoose.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/user/user.model.js?"
        );

        /***/
      },

    /***/ "./src/modules/user/user.routes.js":
      /*!*****************************************!*\
  !*** ./src/modules/user/user.routes.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ "celebrate");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ "./src/services/auth.services.js");\n/* harmony import */ var _user_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.controllers */ "./src/modules/user/user.controllers.js");\n/* harmony import */ var _user_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.validations */ "./src/modules/user/user.validations.js");\n\n\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__["Router"]();\nroutes.post(\'/login\', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__["authLocal"], _user_controllers__WEBPACK_IMPORTED_MODULE_3__["login"]);\n/* harmony default export */ __webpack_exports__["default"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/user/user.routes.js?'
        );

        /***/
      },

    /***/ "./src/modules/user/user.validations.js":
      /*!**********************************************!*\

  !*** ./src/modules/user/user.validations.js ***!
  \**********************************************/
      /*! exports provided: passwordReg, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordReg", function() { return passwordReg; });\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nconst signup_Schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n  userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n});\n/* harmony default export */ __webpack_exports__["default"] = ({\n  signup_Schema\n});\n\n//# sourceURL=webpack:///./src/modules/user/user.validations.js?'
        );

        /***/
      },

    /***/ "./src/modules/vendor/vendor.controllers.js":
      /*!**************************************************!*\
  !*** ./src/modules/vendor/vendor.controllers.js ***!
  \**************************************************/
      /*! exports provided: signUp, login */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });\n/* harmony import */ var _vendor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.model */ "./src/modules/vendor/vendor.model.js");\n/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.model */ "./src/modules/user/user.model.js");\n\n\nasync function signUp(req, res) {\n  const data = {\n    email: req.body.email,\n    password: req.body.password,\n    userName: req.body.userName,\n    type: \'Vendor\'\n  };\n\n  try {\n    const user = await _user_user_model__WEBPACK_IMPORTED_MODULE_1__["default"].create(data);\n    const vendor = await _vendor_model__WEBPACK_IMPORTED_MODULE_0__["default"].create(Object.assign({}, req.body, {\n      userID: user._id\n    }));\n    return res.status(201).json(vendor);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\nfunction login(req, res, next) {\n  res.status(200).json(req.vendor);\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.controllers.js?'
        );

        /***/
      },

    /***/ "./src/modules/vendor/vendor.model.js":
      /*!********************************************!*\
  !*** ./src/modules/vendor/vendor.model.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendor_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.validations */ \"./src/modules/vendor/vendor.validations.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants */ \"./config/constants.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.model */ \"./src/modules/order/order.model.js\");\n/* harmony import */ var _order_order_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_order_order_model__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _product_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product.model */ \"./src/modules/product/product.model.js\");\n/* harmony import */ var _product_product_model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_product_product_model__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable no-invalid-this */\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n\n\n\n\n\nconst vendorSchema = new mongoose.Schema({\n  userID: {\n    type: mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'First name is required'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required'],\n    trim: true,\n    unique: true\n  },\n  contactNo: {\n    type: String,\n    required: [true, 'contact number is required'],\n    trim: true\n  } // password: {\n  //     type: String,\n  //     required: [true, 'Password is required'],\n  //     trim: true,\n  //     minlength: [6, 'Password need to be longer!'],\n  //     validate: {\n  //         validator(password) {\n  //             return passwordReg.test(password);\n  //         },\n  //         message: '[VALUE] is not a valid password!',\n  //     }\n  // },\n\n});\nvendorSchema.virtual('orders', {\n  ref: 'Order',\n  localField: '_id',\n  foreignField: 'vendor'\n});\nvendorSchema.virtual('products', {\n  ref: 'Product',\n  localField: '_id',\n  foreignField: 'vendor'\n});\nvendorSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\nvendorSchema.methods = {\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  // authenticateUser(password) {\n  //     return compareSync(password, this.password);\n  // },\n  createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName //token: `JWT ${this.createToken()}`,\n\n    };\n  }\n\n};\nconst Vendor = mongoose.model('Vendor', vendorSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vendor);\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.model.js?"
        );

        /***/
      },

    /***/ "./src/modules/vendor/vendor.routes.js":
      /*!*********************************************!*\
  !*** ./src/modules/vendor/vendor.routes.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! celebrate */ "celebrate");\n/* harmony import */ var celebrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(celebrate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ "./src/services/auth.services.js");\n/* harmony import */ var _vendor_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.controllers */ "./src/modules/vendor/vendor.controllers.js");\n/* harmony import */ var _vendor_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor.validations */ "./src/modules/vendor/vendor.validations.js");\n\n\n\n\n\nconst routes = new express__WEBPACK_IMPORTED_MODULE_0__["Router"]();\nroutes.post(\'/signup\', Object(celebrate__WEBPACK_IMPORTED_MODULE_1__["celebrate"])({\n  [celebrate__WEBPACK_IMPORTED_MODULE_1__["Segments"].BODY]: _vendor_validations__WEBPACK_IMPORTED_MODULE_4__["default"].signup_Schema\n}), _vendor_controllers__WEBPACK_IMPORTED_MODULE_3__["signUp"]); //routes.post(\'/login\', authLocal, vendorController.login);\n\n/* harmony default export */ __webpack_exports__["default"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.routes.js?'
        );

        /***/
      },

    /***/ "./src/modules/vendor/vendor.validations.js":
      /*!**************************************************!*\
  !*** ./src/modules/vendor/vendor.validations.js ***!
  \**************************************************/
      /*! exports provided: passwordReg, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordReg", function() { return passwordReg; });\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nconst signup_Schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(passwordReg).required(),\n  firstName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  lastName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n  contactNo: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n});\n/* harmony default export */ __webpack_exports__["default"] = ({\n  signup_Schema\n});\n\n//# sourceURL=webpack:///./src/modules/vendor/vendor.validations.js?'
        );

        /***/
      },

    /***/ "./src/services/auth.services.js":
      /*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
      /*! exports provided: authLocal, authJwt */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLocal", function() { return authLocal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authJwt", function() { return authJwt; });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ "passport-local");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/user/user.model */ "./src/modules/user/user.model.js");\n/* harmony import */ var _modules_vendor_vendor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/vendor/vendor.model */ "./src/modules/vendor/vendor.model.js");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/constants */ "./config/constants.js");\n\n\n\n\n\n // local strategy\n\nconst localOpts = {\n  usernameField: \'email\'\n};\nconst localStrategy = new passport_local__WEBPACK_IMPORTED_MODULE_1___default.a(localOpts, async (email, password, done) => {\n  try {\n    const user = await _modules_user_user_model__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n}); //Jwt strategy\n\nconst jwtOpts = {\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_2__["ExtractJwt"].fromAuthHeaderAsBearerToken(),\n  secretOrKey: _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].JWT_SECRET\n};\nconst JwtStrategy = new passport_jwt__WEBPACK_IMPORTED_MODULE_2__["Strategy"](jwtOpts, async (payload, done) => {\n  console.log(payload);\n\n  try {\n    const user = await _modules_user_user_model__WEBPACK_IMPORTED_MODULE_3__["default"].findById(payload._id);\n    console.log(user);\n\n    if (!user) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(localStrategy);\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(JwtStrategy);\nconst authLocal = passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate(\'local\', {\n  session: false\n});\nconst authJwt = passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate(\'jwt\', {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?'
        );

        /***/
      },

    /***/ "@hapi/joi":
      /*!****************************!*\

  !*** external "@hapi/joi" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@hapi/joi");\n\n//# sourceURL=webpack:///external_%22@hapi/joi%22?'
        );

        /***/
      },

    /***/ bcrypt:
      /*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("bcrypt");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?'
        );

        /***/
      },

    /***/ "bcrypt-nodejs":
      /*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("bcrypt-nodejs");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?'
        );

        /***/
      },

    /***/ "body-parser":
      /*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("body-parser");\n\n//# sourceURL=webpack:///external_%22body-parser%22?'
        );

        /***/
      },

    /***/ celebrate:
      /*!****************************!*\
  !*** external "celebrate" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("celebrate");\n\n//# sourceURL=webpack:///external_%22celebrate%22?'
        );

        /***/
      },

    /***/ compression:
      /*!******************************!*\
  !*** external "compression" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("compression");\n\n//# sourceURL=webpack:///external_%22compression%22?'
        );

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?'
        );

        /***/
      },


/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\

  !*** external "helmet" ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("helmet");\n\n//# sourceURL=webpack:///external_%22helmet%22?'
        );

        /***/
      },

    /***/ http:
      /*!***********************!*\
  !*** external "http" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("http");\n\n//# sourceURL=webpack:///external_%22http%22?'
        );

        /***/
      },

    /***/ jsonwebtoken:
      /*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("jsonwebtoken");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?'
        );

        /***/
      },

    /***/ mongoose:
      /*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("mongoose");\n\n//# sourceURL=webpack:///external_%22mongoose%22?'
        );

        /***/
      },

    /***/ morgan:
      /*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("morgan");\n\n//# sourceURL=webpack:///external_%22morgan%22?'
        );

        /***/
      },


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
      /***/ function (module, exports) {
        eval(
          'module.exports = require("passport");\n\n//# sourceURL=webpack:///external_%22passport%22?'
        );

        /***/
      },

    /***/ "passport-jwt":
      /*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("passport-jwt");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?'
        );

        /***/
      },

    /***/ "passport-local":
      /*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("passport-local");\n\n//# sourceURL=webpack:///external_%22passport-local%22?'
        );

        /***/
      },

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sharp\");\n\n//# sourceURL=webpack:///external_%22sharp%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("socket.io");\n\n//# sourceURL=webpack:///external_%22socket.io%22?'
        );

        /***/
      },

    /***/ validator:
      /*!****************************!*\
  !*** external "validator" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("validator");\n\n//# sourceURL=webpack:///external_%22validator%22?'
        );

        /***/
      },

    /******/
  }
);
