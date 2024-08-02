const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("contact", { message: "" });
});

router.post("/", async (req, res) => {
	const { name, email, message } = req.body;
	console.log(`Received contact from ${name} (${email}): ${message}`);
	res.render("contact", { title: "Contact - 구름 ICT 콘텐츠 회사", message: "메세지가 성공적으로 전송 되었습니다." });
});

router.post("/api", async (req, res) => {
	const { name, email, message } = req.body;
	console.log(`Received contact from ${name} (${email}): ${message}`);
	res.json({
		message: "성공적으로 메세지를 보내었습니다.",
		success: true,
		status: 200,
	});
});

module.exports = router;
