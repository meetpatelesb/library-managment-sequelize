const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = 8012;
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/product_images"));

let Book = require("./routes/addBook");
let User = require("./routes/addUser");
let ShowBorrowBookDetails = require("./routes/showBorrowBookDetails");

app.use("/book", Book);
app.use("/user", User);
app.use('/user-book',ShowBorrowBookDetails)


app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
