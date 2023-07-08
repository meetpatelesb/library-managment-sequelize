let express = require("express");
let router = express.Router();
const User = require("../controllers/user");
const cors = require("cors");
const app = express();
app.use(cors());

// add update delete cart
router.post("/add", User.addUser);

module.exports = router;
