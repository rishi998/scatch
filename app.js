const express=require("express");
const app=express();

const cookieparser=require("cookie-parser")
const path=require("path")
const ownersrouter=require("./routes/ownersrouter");
const usersrouter=require("./routes/usersrouter");
const productsrouter=require("./routes/productsrouter");

const db=require("./config/mongoose-connection")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/owners",ownersrouter);
app.use("/users",usersrouter);
app.use("/products",productsrouter);

app.listen(3000) 