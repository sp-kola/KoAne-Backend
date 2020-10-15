module.exports=function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=36)}([function(e,t){e.exports=require("@hapi/joi")},function(e,t){e.exports=require("express")},function(e,t,s){"use strict";const a={MONGO_URL:"mongodb://localhost/mydb-dev",JWT_SECRET:"thisisasecret"},n={MONGO_URL:"mongodb://localhost/mydb-test"},r={MONGO_URL:"mongodb://localhost/mydb-prod",JWT_SECRET:"thisisasecret"},o={PORT:process.env.PORT||3300};t.a=Object.assign({},o,function(e){switch(console.log(e),e){case"development":return a;case"test":return n;default:return r}}("production"))},function(e,t,s){"use strict";s.r(t);var a=s(7),n=s.n(a),r=s(10),o=s(8),i=s.n(o),d=s(15),c=s(2);const u=s(4),l=new u.Schema({email:{type:String,unique:!0,required:[!0,"Email is required"],trim:!0,validate:{validator:e=>n.a.isEmail(e),message:"{VALUE} is not a valid email"}},userName:{type:String,required:[!0,"Username is required"],trim:!0},avatar:{type:Buffer},profilePic:{type:[]},password:{type:String,required:[!0,"Password is required"],trim:!0,minlength:[6,"Password need to be longer!"],validate:{validator:e=>d.a.test(e),message:"[VALUE] is not a valid password!"}},type:{type:String,required:!0},token:{type:String}});l.virtual("vendors",{ref:"Vendor",localField:"_id",foreignField:"userID"}),l.virtual("customers",{ref:"Customer",localField:"_id",foreignField:"userID"}),l.virtual("admins",{ref:"Admin",localField:"_id",foreignField:"userID"}),l.virtual("locations",{ref:"Location",localField:"_id",foreignField:"owner"}),l.pre("save",(function(e){return this.isModified("password")?(this.password=this._hashPassword(this.password),e()):e()})),l.methods={_hashPassword:e=>Object(r.hashSync)(e),authenticateUser(e){return Object(r.compareSync)(e,this.password)},async createToken(){var e=i.a.sign({_id:this._id},c.a.JWT_SECRET);return this.token=e,await this.save(),e},async toJSON(){console.log(this);var e={userName:this.userName,type:this.type,token:this.token};return console.log("user to json",e),e}};const m=u.model("User",l);t.default=m},function(e,t){e.exports=require("mongoose")},function(e,t,s){"use strict";s.r(t);var a=s(7),n=s.n(a),r=s(10),o=s(8),i=s.n(o),d=(s(16),s(2));s(13),s(20);const c=s(4),u=new c.Schema({userID:{type:c.Schema.Types.ObjectId,ref:"User"},email:{type:String,unique:!0,required:[!0,"Email is required"],trim:!0,validate:{validator:e=>n.a.isEmail(e),message:"{VALUE} is not a valid email"}},firstName:{type:String,required:[!0,"First name is required"],trim:!0},lastName:{type:String,required:[!0,"Last name is required"],trim:!0},contactNo:{type:Number,required:[!0,"contact number is required"],trim:!0,unique:!0},vehicleNo:{type:String},visitingDates:{type:[]},visitingPlaces:{type:[]},nic:{type:String,required:!0},businessName:{type:String,required:!0},businessAddress:{type:String,required:!0},bio:{type:String},delivering:{type:Boolean,default:!1},startTime:{type:String},endTime:{type:String}});u.virtual("orders",{ref:"Order",localField:"_id",foreignField:"vendor"}),u.virtual("products",{ref:"Product",localField:"_id",foreignField:"vendor"}),u.pre("save",(function(e){return this.isModified("password")?(this.password=this._hashPassword(this.password),e()):e()})),u.methods={_hashPassword:e=>Object(r.hashSync)(e),createToken(){return i.a.sign({_id:this._id},d.a.JWT_SECRET)},toJSON(){return{_id:this._id,userID:this.userName,email:this.email,firstName:this.firstName,lastName:this.lastName,contactNo:this.contactNo,vehicleNo:this.vehicleNo,visitingDates:this.visitingDates,visitingPlaces:this.visitingPlaces,nic:this.nic,businessName:this.businessName,businessAddress:this.businessAddress,bio:this.bio,delivering:this.delivering,startTime:this.startTime,endTime:this.endTime}}};const l=c.model("Vendor",u);t.default=l},function(e,t,s){"use strict";s.r(t);var a=s(7),n=s.n(a),r=s(10),o=s(8),i=s.n(o),d=(s(17),s(2));s(13);const c=s(4),u=(s(21),new c.Schema({userID:{type:c.Schema.Types.ObjectId,ref:"User"},email:{type:String,unique:!0,required:[!0,"Email is required"],trim:!0,validate:{validator:e=>n.a.isEmail(e),message:"{VALUE} is not a valid email"}},firstName:{type:String,required:[!0,"First name is required"],trim:!0},lastName:{type:String,required:[!0,"First name is required"],trim:!0},userName:{type:String,required:[!0,"Username is required"],trim:!0,unique:!0},contactNo:{type:Number,required:[!0,"contact nummber is required"],trim:!0}}));u.virtual("orders",{ref:"Order",localField:"_id",foreignField:"customer"}),u.pre("save",(function(e){return this.isModified("password")?(this.password=this._hashPassword(this.password),e()):e()})),u.methods={_hashPassword:e=>Object(r.hashSync)(e),createToken(){return i.a.sign({_id:this._id},d.a.JWT_SECRET)},toJSON(){return{_id:this._id,userName:this.userName,email:this.email,firstName:this.firstName,lastName:this.lastName,contactNo:this.contactNo,lastReportedLocation:this.lastReportedLocation,deliveryAddresses:this.deliveryAddresses}}};const l=c.model("Customer",u);t.default=l},function(e,t){e.exports=require("validator")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("celebrate")},function(e,t){e.exports=require("bcrypt-nodejs")},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("body-parser")},function(e,t,s){const a=s(4),n=(s(7),new a.Schema({products:{type:Array,required:!0},description:{type:String,trim:!0},price:{type:String,required:!0},completed:{type:String},customer:{type:a.Schema.Types.ObjectId,required:!0,ref:"Customer"},vendor:{type:a.Schema.Types.ObjectId,required:!0,ref:"Vendor"},position:[],date:{type:Date,required:!0}},{timestamps:!0})),r=a.model("Order",n);e.exports=r},function(e,t){e.exports=require("multer")},function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(0),n=s.n(a);const r=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;n.a.object({email:n.a.string().email().required(),password:n.a.string().regex(r).required(),userName:n.a.string().required()})},function(e,t,s){"use strict";var a=s(0),n=s.n(a);const r=n.a.object({email:n.a.string().email().required(),password:n.a.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/).required(),firstName:n.a.string().required(),lastName:n.a.string().required(),userName:n.a.string().required(),contactNo:n.a.string().required(),nic:n.a.string().required(),businessName:n.a.string().required(),businessAddress:n.a.string().required()});t.a={signup_Schema:r}},function(e,t,s){"use strict";var a=s(0),n=s.n(a);const r=n.a.object({email:n.a.string().email().required(),password:n.a.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/).required(),firstName:n.a.string().required(),lastName:n.a.string().required(),userName:n.a.string().required(),contactNo:n.a.string().required()});t.a={signup_Schema:r}},function(e,t,s){const a=s(34),n=s(3);t.msg_get_all_messages=(e,t,s)=>{a.find().exec().then(e=>{console.log(e),t.json(e)}).catch(e=>{console.log(e),t.json({error:e})})},t.msg_create_message=(e,t,s)=>{new a({sender:e.body.sender,receiver:e.body.receiver,message:e.body.message,read:!1,state:0}).save().then(e=>{console.log(e),console.log("Message Send!"),t.json({message:"Message Send!"})}).catch(e=>{console.log(e)})},t.msg_get_message=(e,t,s)=>{const r=e.params.msgId;a.find({receiver:r}).exec().then(e=>{console.log("From database",e),t.json(e);const s=e.sender;n.find({_id:s}).exec().then(e=>{s=e.userName}),0==e.read&&a.update({_id:id},{$set:{read:!0}}).exec()}).catch(e=>{console.log(e),t.json({error:e})})},t.msg_set_read=(e,t,s)=>{const n=e.params.msgId;a.update({_id:n},{$set:{read:!0}}).exec().then(e=>{console.log(e),t.json({message:"Message Read!"})}).catch(e=>{console.log(e),t.json({error:e})})},t.msg_delete_message=(e,t,s)=>{const n=e.params.msgId;a.update({_id:n},{$set:{state:1}}).exec().then(e=>{console.log(e),t.json({message:"Message Deleted!"})}).catch(e=>{console.log(e),t.json({error:e})})}},function(e,t){e.exports=require("passport-jwt")},function(e,t,s){const a=s(4),n=new a.Schema({productName:{type:String},price:{type:Number},details:{type:String},category:{type:[String]},image:{data:Buffer,ContentType:String},createdAt:{type:Date,default:Date.now},vendor:{type:a.Schema.Types.ObjectId,required:!0,ref:"Vendor"}}),r=a.model("Product",n);e.exports=r},function(e,t,s){const a=s(4),n=new a.Schema({owner:{type:a.Schema.Types.ObjectId,required:!0,trim:!0,ref:"User"},type:{type:String,required:!0},position:[]},{timestamps:!0});n.index({position:"2dsphere"});const r=a.model("Location",n);e.exports=r},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("passport-local")},function(e,t,s){const a=s(1).Router(),n=s(37);a.post("/signup",n.signup),e.exports=a},function(e,t,s){const a=s(1).Router(),n=s(18);a.get("/",n.msg_get_all_messages),a.post("/",n.msg_create_message),a.get("/:msgId",n.msg_get_message),a.put("/:msgId",n.msg_set_read),a.delete("/:msgId",n.msg_delete_message),e.exports=a},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("socket.io")},function(e,t){e.exports=require("sharp")},function(e,t){e.exports=require("base64-img")},function(e,t){e.exports=require("bcrypt")},function(e,t,s){const a=s(4),n=new(0,a.Schema)({sender:{type:String,required:!0},receiver:{type:String,required:!0},message:{type:String,required:!0},read:{type:Boolean,required:!0},state:{type:Number,required:!0}}),r=a.model("message",n);e.exports=r},function(e,t,s){const a=s(4),n=new a.Schema({categoryName:{type:String},createdAt:{type:Date,default:Date.now}}),r=a.model("Category",n);e.exports=r},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(2),o=(s(23),s(12)),i=s.n(o),d=s(24),c=s.n(d),u=s(25),l=s.n(u),m=s(11),g=s.n(m);var p=s(4),y=s.n(p);try{y.a.connect(r.a.MONGO_URL,{useNewUrlParser:!0,useUnifiedTopology:!0,useCreateIndex:!0,useFindAndModify:!1})}catch(e){y.a.createConnection(r.a.MONGO_URL)}y.a.connection.once("open",()=>console.log("MongoDB Running")).on("error",e=>{throw e});var f=s(9),h=s(26),w=s.n(h),v=s(19),b=s(3),N=s(5);const j=new w.a({usernameField:"email"},async(e,t,s)=>{try{console.log("in local",e,t);const a=await b.default.findOne({email:e});return a&&a.authenticateUser(t)?(await a.createToken(),console.log("logged in user",a),s(null,a)):s(null,!1)}catch(e){return s(e,!1)}}),q={jwtFromRequest:v.ExtractJwt.fromAuthHeaderAsBearerToken(),secretOrKey:r.a.JWT_SECRET},_=new v.Strategy(q,async(e,t)=>{console.log(e,q);try{const s=await b.default.findById(e._id);return console.log(s),t(null,s||!1)}catch(e){return t(e,!1)}});g.a.use(j),g.a.use(_);const S=g.a.authenticate("local",{session:!1}),O=g.a.authenticate("jwt",{session:!1});async function x(){req.user._id;const e=await N.default.findOne({email:req.user.email});try{await req.user.remove(),await e.remove(),res.status(200).send(`account holder with ${req.user.userName} userName (${e.firstName} ${e.lastName}) account is deleted`)}catch(e){res.status(500).send()}}var T=s(16);const I=s(14)({limits:{fileSize:1e6},fileFilter(e,t,s){if(!t.originalname.match(/\.(png|jpg|jpeg)$/))return s(new Error("Wrong file type"));s(void 0,!0)}}),P=new a.Router;P.post("/signup",Object(f.celebrate)({[f.Segments.BODY]:T.a.signup_Schema}),(async function(e,t){const s={email:e.body.email,password:e.body.password,userName:e.body.userName,type:"Vendor"};try{const a=await b.default.create(s);await a.createToken();const n={email:e.body.email,userName:e.body.userName,firstName:e.body.firstName,lastName:e.body.lastName,contactNo:e.body.contactNo,nic:e.body.nic,businessName:e.body.businessName,businessAddress:e.body.businessAddress,userID:a._id},r=await N.default.create(n);return t.status(201).json(r)}catch(e){return t.status(500).json(e)}})),P.post("/avatar",O,I.single("upload"),(async function(e,t){const s=await sharp(e.file.buffer).resize({width:250,height:250}).png().toBuffer();e.user.avatar=s,await e.user.save(),t.status(200).send()}),(e,t,s,a)=>{s.status(400).send({error:e.message})}),P.delete("/",x),P.delete("/avatar",O,(async function(e,t){e.user.avatar=void 0,await e.user.save(),t.status(200).send()})),P.get("/avatar/:id",(async function(e,t){try{const s=await b.default.findById(e.params.id);if(!s||!s.avatar)throw new Error;t.set("Content-Type","image/png"),t.send(s.avatar)}catch(e){t.status(404).send()}})),P.get("/allVendors",O,(async function(e,t){N.default.find({},(function(e,s){e?t.send(e):t.json(s)}))})),P.get("/vendorbyName",O,(async function(e,t){console.log(e.body.businessName);const s=await N.default.findOne({businessName:e.body.businessName});s?t.status(200).json(s):t.status(500).json(n.a)})),P.get("/vendor",O,(async function(e,t){const s=await N.default.findOne({email:e.user.email});s?t.status(200).json(s):t.status(500).json(n.a)})),P.get("/search/:id",O,(async function(e,t){const s=await N.default.findOne({_id:e.params.id});s?t.status(200).json(s):t.status(500).json(n.a)})),P.patch("/",O,(async function(e,t){const s=await N.default.findOne({email:e.user.email}),a=Object.keys(e.body),n=["firstName","lastName","password","email","contactNo","userName","nic","businessName","businessAddress","vehicleNo","bio","delivering","visitingDates","visitingPlaces","startTime","endTime"];if(!a.every(e=>n.includes(e)))return t.status(400).send({error:"Invalid updates"});try{console.log("updating user",e.body.updateUser),e.body.email&&(e.user.email=e.body.email),e.body.userName&&(e.user.userName=e.body.userName),e.body.password&&(e.user.password=e.body.password),await e.user.save(),await console.log("updated user: ",e.user),await a.forEach(t=>{console.log(t,e.body[t]),s[t]=e.body[t]}),console.log("done update vendor",s);const n=s;await n.save(),t.status(200).send(s)}catch(e){t.status(400).send(e)}})),P.delete("/",O,x);var R=P,E=s(6);const U=s(21);s(3);async function A(e,t){const s=e.user._id;try{const e=await U.find({owner:s});t.status(200).send(e)}catch(e){t.status(500).send(e)}}const D=new a.Router;D.post("/",O,(async function(e,t){console.log(e.body);let s=!1,a=null;var n={position:[e.body.lattitude,e.body.longitude],owner:e.user._id,type:e.user.type};const r=await U.findOne({owner:e.user._id});if(console.log(r),null!==r){console.log("already a location exist for the current user, hence updating the location");try{console.log("updating location"),r.position=[e.body.lattitude,e.body.longitude],await r.save(),a=r,s=!0}catch(e){console.log(e),t.status(500).json(`Unable to update location: ${e} `),s=!1}}else{const e=new U(n);try{await e.save(),a=e,s=!0}catch(e){t.status(500).json(`Unable to create location: ${e} `),s=!1}}if(s)if("Customer"==e.user.type){const s=await E.default.findOne({email:e.user.email});console.log("customer",s);try{t.status(201).json(a)}catch(e){t.status(500).json(`Unable to create location: ${e} `)}}else t.status(201).json(a)})),D.get("/user/",O,A),D.patch("/user/",O,(async function(e,t){const s=e.user._id,a=await U.findOne({owner:s});if(console.log("location to update",a),!a)return t.status(404).send("Invalid updation");const n=Object.keys(e.body),r=["lattitude","longitude"];if(!n.every(e=>r.includes(e)))return t.status(400).send({error:"Invalid updates"});try{a.position=[e.body.lattitude,e.body.longitude],console.log("updated location",a),await a.save(),t.send(a)}catch(e){return t.status(400).json("Unable to update the location")}})),D.delete("/user/",O,(async function(e,t){const s=e.user._id;console.log(s);const a=await U.findOne({owner:s});if(console.log("deleting locatin",a),!a)return t.status(404).send("Invalid deletion");try{await a.remove(),t.status(200).send(a)}catch(e){t.status(500).send()}})),D.get("/users/",O,(async function(e,t){const s=e.user._id;try{const e=await U.findOne({owner:s});console.log("user location",e.position[0]);var a=e.position[0],n=e.position[1];var r="Vendor"==e.type?"Customer":"Vendor",o=await U.aggregate([{$geoNear:{near:{type:"Point",coordinates:[a,n]},distanceField:"dist.calculated",maxDistance:2e3,query:{type:r},includeLocs:"dist.location",spherical:!0}}]);o.splice(0,1),t.status(200).send(o)}catch(e){t.status(500).send(e)}})),D.get("/compete/",O,(async function(e,t){const s=e.user._id;try{const e=await U.findOne({owner:s});console.log("user location",e.position[0]);var a=e.position[0],n=e.position[1];var r="Vendor"==e.type?"Vendor":"Customer",o=await U.aggregate([{$geoNear:{near:{type:"Point",coordinates:[a,n]},distanceField:"dist.calculated",maxDistance:2e3,query:{type:r},includeLocs:"dist.location",spherical:!0}}]);o.splice(0,1),t.status(200).send(o)}catch(e){t.status(500).send(e)}})),D.get("/getUser/:id",O,A);var F=D;s(15);const C=new a.Router;C.post("/login",S,(async function(e,t,s){var a=await e.user;return console.log("user data: ",a),a={id:a.id,email:a.email,type:a.type,userName:a.userName,token:a.token},await t.status(200).json(a),s()})),C.patch("/logout",O,(async function(e,t,s){try{return console.log(e.user.token),e.user.token="",await e.user.save(),t.status(200).send("Successfully logged out"),s()}catch(e){return t.status(500).send(),s()}}));var k=C;s(31);var B=s(17);s(1);const M=s(22),$=s(12),L=s(14);s(32);var V=L({dest:"uploads/"});const J=new a.Router;J.use($.json({limit:"50MB",extended:!0})),J.use($.urlencoded({limit:"50MB",parameterLimit:1e7,extended:!0})),J.post("/upload",V.single("fileData"),(e,t,s)=>{console.log("testing "),console.log(e.file),M.readFile(e.file.path,(e,s)=>{e?(console.log("Error: ",e),t.status(500)):(console.log("File contents ",s),t.status(200))})}),J.post("/image",O,async(e,t,a,n)=>{await console.log("image ",t.body.image);var r=t.body.image.replace(/^data:image\/png;base64,/,"");s(22).writeFile("out.png",r,"base64",(function(e){if(e)throw e})),await console.log("image written"),await a.status(200).send()}),J.post("/signup",Object(f.celebrate)({[f.Segments.BODY]:B.a.signup_Schema}),(async function(e,t){const s={email:e.body.email,password:e.body.password,userName:e.body.userName,type:"Customer"};try{const a=await b.default.create(s);await a.createToken();const n=await E.default.create(Object.assign({},e.body,{userID:a._id}));return t.status(201).json(n)}catch(e){return t.status(500).json(e)}})),J.get("/me",O,(async function(e,t){console.log(e.user);const s=await E.default.findOne({email:e.user.email});console.log(s),t.status(200).send(s)})),J.patch("/",O,(async function(e,t){const s=await E.default.findOne({email:e.user.email}),a=Object.keys(e.body);console.log("in update ",e.user.email,a);const n=["firstName","lastName","password","email","contactNo","userName","deliveryAddresses"];if(!a.every(e=>n.includes(e)))return t.status(400).send({error:"Invalid updates"});try{console.log("updating user"),console.log("customer in update",s),e.body.email&&(e.user.email=e.body.email),e.body.userName&&(e.user.userName=e.body.userName),e.body.password&&(e.user.password=e.body.password),await e.user.save(),await console.log("updated user: ",e.user),await a.forEach(t=>{console.log(t,e.body[t]),s[t]=e.body[t]}),console.log("done update customer",s);const n=s;await n.save(),t.send(s)}catch(e){console.log(e),t.status(400).send(e)}})),J.delete("/",(async function(e,t){console.log(e.usermail),e.user.email;const s=await E.default.findOne({email:e.user.email});try{await e.user.remove(),await s.remove(),t.status(200).send(`account holder with ${e.user.userName} userName (${s.firstName} ${s.lastName}) account is deleted`)}catch(e){t.status(500).send()}})),J.post("/avatar",O,(async function(e,t){try{e.user.profilePic={image:e.body.image,uri:e.body.uri};var s=await e.user.save();console.log("seaved user",s),t.status(200).send(s)}catch(e){console.log(e),t.status(500).send()}})),J.delete("/avatar",O,(async function(e,t){e.user.avatar=void 0,await e.user.save(),t.status(200).send()})),J.get("/avatar/:id",(async function(e,t){try{const s=await b.default.findById(e.params.id);if(!s||!s.avatar)throw new Error;t.set("Content-Type","image/png"),t.send(s.avatar)}catch(e){t.status(404).send()}})),J.get("/count",(async function(e,t){E.default.count().exec().then(e=>{var s=e.toString();return t.status(200).send(s)}).catch(e=>{console.log(e),t.json({error:e})})}));var W=J;const z=s(1),G=s(13),Z=new z.Router;s(6),s(5);Z.post("/",O,async(e,t)=>{const s={products:e.body.products,description:e.body.description,completed:"P",customer:e.user._id,vendor:e.body.vendor,position:[e.body.lattitude,e.body.longitude],date:e.body.date,price:e.body.price},a=new G(s);try{const e=await a.save();console.log("created order ",e),t.status(201).send(e)}catch(e){t.status(400).send(e)}}),Z.get("/customerOrders",O,async(e,t)=>{const s=e.user._id;try{var a=await G.find({customer:s});t.status(200).send(a)}catch(e){t.status(500).send(e)}}),Z.get("/vendorOrders",O,async(e,t)=>{const s=e.user._id;try{const e=await G.find({vendor:s});t.status(200).send(e)}catch(e){t.status(500).send(e)}}),Z.get("/get/:id",O,async(e,t)=>{try{const s=await G.findById(e.params.id);if(!s)return t.status(404).send();t.status(200).send(s)}catch(e){t.status(500).send(e)}}),Z.patch("/deliver/:id",O,async(e,t)=>{try{const s=await G.findById(e.params.id);if(!s)return t.status(404).send();s.status="D",await s.save(),t.send(s)}catch(e){t.status(400).send(e)}}),Z.patch("/deliver/:id",O,async(e,t)=>{try{const s=await G.findById(e.params.id);if(!s)return t.status(404).send();s.status="C",await s.save(),t.send(s)}catch(e){t.status(400).send(e)}}),Z.patch("/update/:id",O,async(e,t)=>{const s=Object.keys(e.body);try{const a=await G.findById(e.params.id);if(!a)return t.status(404).send();s.forEach(t=>a[t]=e.body[t]),await a.save(),t.send(a)}catch(e){t.status(400).send(e)}}),Z.delete("/delete/:id",O,async(e,t)=>{e.params.id;try{const s=await G.findById(e.params.id);if(!s)return t.status(404).send();await s.remove(),t.status(200).send(s)}catch(e){t.status(500).send()}});var K=Z;const Y=s(20),H=(s(12),s(14)({dest:"uploads/"})),Q=new a.Router;Q.get("/",async(e,t)=>{try{const e=await Y.find();t.json(e)}catch(e){t.json({message:e})}}),Q.post("/create",H.single("productImage.png"),(e,t)=>{new Y({productName:e.body.productName,price:e.body.price,details:e.body.details,category:e.body.category,vendor:e.body.vendor,image:e.file}).save().then(e=>{t.json(e)}).catch(e=>{t.json({message:e})})}),Q.get("/get/:id",async(e,t)=>{try{const s=e.params.id,a=await Y.findById(s);t.json(a)}catch(e){t.json({message:e})}}),Q.get("/getproduct/:name",async(e,t)=>{try{const s=e.params.name,a=await Y.find({productName:{$regex:".*"+s+".*"}});console.log(a),t.json(a)}catch(e){t.json({message:e})}}),Q.get("/vendorProducts/:id",async(e,t)=>{try{const s=await Y.find({vendor:e.params.id});console.log("PRODUCTS ",s),t.status(200).send(s)}catch(e){t.status(500).send(e)}}),Q.patch("/update/:id",async(e,t)=>{try{const s=await Y.updateOne({_id:e.params.id},{$set:{productName:e.body.productName,price:e.body.price,details:e.body.details,category:e.body.category,vendor:e.body.vendor}});t.json(s)}catch(e){t.json({message:e})}}),Q.delete("/delete/:id",async(e,t)=>{try{const s=await Y.remove({_id:e.params.id});t.json(s)}catch(e){t.json({message:e})}});var X=Q,ee=s(27),te=s.n(ee),se=s(28),ae=s.n(se);const ne=s(12),re=s(35),oe=new a.Router;oe.use(ne.urlencoded({extended:!0})),oe.get("/",async(e,t)=>{try{const e=await re.find();t.json(e)}catch(e){t.json({message:e})}}),oe.post("/add",async(e,t)=>{new re({categoryName:e.body.categoryName}).save().then(e=>{t.json(e)}).catch(e=>{t.json({message:e})})}),oe.get("/get/:id",async(e,t)=>{try{const s=e.params.id,a=await re.findById(s);t.json(a)}catch(e){t.json({message:e})}}),oe.patch("/update/:id",async(e,t)=>{try{const s=await re.updateOne({_id:e.params.id},{$set:{CategoryName:e.body.productName}});t.json(s)}catch(e){t.json({message:e})}}),oe.delete("/delete/:id",async(e,t)=>{try{const s=await re.remove({_id:e.params.id});t.json(s)}catch(e){t.json({message:e})}});var ie=oe,de=s(29),ce=s.n(de),ue=s(30),le=s.n(ue),me=s(18);const ge=n()();var pe;(pe=ge).use(c()()),pe.use(l()()),pe.use(i.a.json()),pe.use(i.a.urlencoded({extended:!0})),pe.use(g.a.initialize());const ye=ce.a.createServer(ge),fe=le()(ye);ge.set("io",fe),ge.get("/",(e,t)=>{console.log("user logged:",e.user),t.send("Welcome to KoAne")}),(e=>{let t=e.get("io");e.use("/vendor",R),e.use("/customer",W),e.use("/user",k),e.use("/product",X),e.get("/hello",O,(e,t)=>{console.log(e),t.send("this is a private route")}),e.use("/order",K),e.use("/admin",te.a),e.use("/message",ae.a),e.use("/category",ie),e.use("/location",(e,s,a)=>{e.io=t,a()},F)})(ge),fe.on("connection",e=>{console.log("User connected"+e.id),e.on("submit",e=>{e.value;Object(me.msg_create_message)("Admin",e.value,"Welcome")}),e.on("chat message",e=>{console.log(e),fe.emit("chat message",e)}),e.on("disconnect",()=>{console.log("User disconnected")})}),ye.listen(r.a.PORT,e=>{if(e)throw e;console.log(`\n            Server running on port : ${r.a.PORT}\n            ----\n            Running on production\n            ----\n        `)})},function(e,t,s){"use strict";s.r(t),s.d(t,"signup",(function(){return i}));var a=s(3);s(7),s(10),s(8),s(2);const n=s(4),r=new(0,n.Schema)({username:{type:String},email:{type:String,required:!0,unique:!0,match:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/},userID:{type:n.Schema.Types.ObjectId,ref:"User"}});var o=n.model("Admin",r);s(33),s(8);async function i(e,t,s){console.log("Creating an admin");const n={email:e.body.email,password:e.body.password,userName:e.body.userName,type:"Admin"};try{const s=await a.default.create(n);await s.createToken();await o.create(Object.assign({},e.body,{userID:s._id}));return t.status(201).json(s)}catch(e){return t.status(500).json(e)}}}]);