const express = require("express");
const session = require("express-session");
const {
  User,
  order,
  passportlocal,
  passport,
  userschema,
  passportlocalmongoose,
} = require("./db/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "hbs");
app.use(express.static("./public/js"));
app.use(express.static(__dirname + "/public/js/script.js"));

app.use(
  session({
    resave: false,
    secret: "our little secret",
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/admin", (req, res) => {
  res.render("admin.hbs");
});
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/login", (req, res) => {
  res.render("login.hbs");
});

app.get("/signup", (req, res) => {
  res.render("signup.hbs");
});
app.get("/order", (req, res) => {
  res.render("order");
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, users) {
      if (err) {
        console.log(err);
        res.render("signup");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.render("profile");
        });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
      res.render("login");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
app.post("/placeorder", (req, res) => {
  console.log(req.body);
  const order1 = new order({
    type: req.body.type,
    way: req.body.way,
    weight: req.body.weight,
    pickupinfo: {
      pickup: req.body.pickup,
      pickupnumber: req.body.pickupnumber,
      pickuppin: req.body.pickuppin,
    },

    destinationinfo: {
      delivery: req.body.delivery,
      deliverpin: req.body.deliverypin,
      deliverynumber: req.body.deliverynumber,
    },
    payment: req.body.payment,
  });
  order1.save();
  res.send("successfully ordered");
});

app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).render("profile");
  } else {
    res.redirect("/login");
  }
});
