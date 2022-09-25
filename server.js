const express = require("express");
const path = require("path");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
// const phpExpress = require("php-express")({ binPath: process.env.phpBinPath || "/usr/bin/php" });

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "out")));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*/x", (_, res) => res.redirect("x"));
app.get("/", (req, res) => res.render("home", { layout: "layout" }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started %s", port));
