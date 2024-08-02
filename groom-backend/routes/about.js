const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("about", {
		projects: [
			{ name: "Project A", description: "개발 dev 코스" },
			{ name: "Project B", description: "AI 활용 dev 코스" },
		],
	});
});

module.exports = router;
