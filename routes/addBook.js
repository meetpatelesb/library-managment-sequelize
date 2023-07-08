let express = require("express");
let router = express.Router();
const Book = require("../controllers/book");
const cors = require("cors");
const app = express();
app.use(cors());


// add update delete cart
router.post("/add", Book.addBook);

module.exports = router;
