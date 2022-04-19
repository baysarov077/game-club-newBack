const { Router } = require("express");

const router = Router();
app.use(require("./routes/users.route"));
app.use(require("./routes/news.route"));
app.use(require("./routes/comments.route"));

module.exports = router;
