const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("services", {
		services: [
			{ name: "IT 교육 컨설팅", description: "전문 IT 교육 컨설팅 서비스." },
			{ name: "콘텐츠 제작", description: "고품질 IT 교육 콘텐츠 제작 서비스." },
			{ name: "소프트웨어 개발", description: "사용자 맞춤형 LMS 소프트웨어 개발 솔루션." },
		],
	});
});

module.exports = router;
