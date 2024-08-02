var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "groom-backend" });
});

router.get("/groom", function (req, res) {
	res.render("groom.ejs",{companyDescription: "모두가 개발자가 된다는 슬로건을 가지고 있는 ict 회사 입니다."});
});

module.exports = router;
