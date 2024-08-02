var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const servicesRouter = require("./routes/services");
const contactRouter = require("./routes/contact");
const memberApiRouter = require("./routes/member-api");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//layouts 사용 설정
app.use(expressLayouts);
app.set("layout", "layout"); // 기본 레이아웃 설정
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//이 코드는 /user/:id 경로로 들어오는 요청을 처리하며, 해당 요청의 id 값을 캡처하여 사용자에게
//"사용자 정보"와 함께 보여주는 역할을 합니다.
//이를 통해 간단한 사용자 식별 정보를 제공하는 API 엔드포인트의 기능을 구현할 수 있습니다.
app.use("/user/:id", function (req, res, next) {
	const uid = req.params.id;
	console.log("어플리케이션 미들웨어 호출 요청됨: ", req.method);
	res.send("사용자 정보: " + uid);
});

//Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/services", servicesRouter);
app.use("/contact", contactRouter);
app.use("/memberApi", memberApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
