let express = require("express");
let router = express.Router();
const BookBorrow = require("../controllers/bookBorrow");
const cors = require("cors");
const app = express();
app.use(cors());

// add update delete cart
router.get("/show-borrow-book", BookBorrow.showBookBorrowDetails);
router.post("/show-publication-book", BookBorrow.showBookPublications);
router.get("/show-author-book", BookBorrow.showBookAuthor);
router.post(
  // `/show-member?sort=${sortDirection}&page=${page}&field=${sortField}`,
  // `/show-member`,
  `/show-member`,
  BookBorrow.showMemberDetails
);
module.exports = router;
