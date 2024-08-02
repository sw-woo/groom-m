const express = require("express");
const router = express.Router();

//member-api test를 위한 더미 데이터 생성

let members = [
	{
		member_id: 1,
		email: "swpheus1@gmail.com",
		name: "우성우",
		profile_img_path: "/images/profile.png",
		telephone: "010-2760-5246",
		reg_date: new Date(),
	},
	{
		member_id: 2,
		email: "swpheus2@gmail.com",
		name: "우성우2",
		profile_img_path: "/images/profile2.png",
		telephone: "010-1234-5678",
		reg_date: new Date(),
	},
];
// 추후 실제 DB랑 연동 예정 입니다.

// 1. 회원 전체 목록 조회
router.get("/members", async (req, res) => {
	try {
		const jsonResult = {
			status: 200,
			message: "전체 멤버 검색",
			result: members,
		};

		res.json(jsonResult);
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "서버 오류 발생",
			error: error.message,
		});
	}
});

// 2. 특정 회원 정보 조회
router.get("/member/:id", async (req, res) => {
	try {
		const memberId = parseInt(req.params.id);
		const member = members.find((m) => m.member_id === memberId);

		if (member) {
			const jsonResult = {
				status: 200,
				message: "특정 멤버 검색 성공",
				result: member,
			};
			res.json(jsonResult);
		} else {
			const jsonResult = {
				status: 404,
				message: "해당 회원이 없습니다.",
				result: null,
			};
			res.status(404).json(jsonResult);
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "서버 오류 발생",
			error: error.message,
		});
	}
});

// 3. 새로운 회원 등록
router.post("/member", async (req, res) => {
	try {
		const { email, name, profile_img_path, telephone } = req.body;

		const newMember = {
			member_id: members.length + 1,
			email,
			name,
			profile_img_path,
			telephone,
			reg_date: new Date(),
		};

		members.push(newMember);

		const jsonResult = {
			status: 201,
			message: "새로운 회원 등록 성공",
			result: newMember,
		};
		res.status(201).json(jsonResult);
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "서버 오류 발생",
			error: error.message,
		});
	}
});

// 4. 회원 정보 수정
router.put("/member/:id", async (req, res) => {
	try {
		const memberId = parseInt(req.params.id);
		const memberIndex = members.findIndex((m) => m.member_id === memberId);

		if (memberIndex !== -1) {
			const updatedMember = {
				...members[memberIndex],
				...req.body,
			};

			members[memberIndex] = updatedMember;
			const jsonResult = {
				status: 200,
				message: "멤버 업데이트 성공",
				result: updatedMember,
			};

			res.json(jsonResult);
		} else {
			const jsonResult = {
				status: 404,
				message: "멤버를 찾을 수 없습니다.",
			};
			res.status(404).json(jsonResult);
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "서버 오류 발생",
			error: error.message,
		});
	}
});

// 5. 회원 삭제
router.delete("/member/:id", async (req, res) => {
	try {
		const memberId = parseInt(req.params.id);
		const memberIndex = members.findIndex((m) => m.member_id === memberId);

		if (memberIndex !== -1) {
			members.splice(memberIndex, 1); // 배열에서 해당 인덱스 번호의 요소를 제거합니다.
			const jsonResult = {
				status: 200,
				message: "멤버 삭제 성공",
			};

			res.json(jsonResult);
		} else {
			const jsonResult = {
				status: 404,
				message: "멤버를 찾을 수 없습니다.",
			};
			res.status(404).json(jsonResult);
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "서버 오류 발생",
			error: error.message,
		});
	}
});

module.exports = router;
