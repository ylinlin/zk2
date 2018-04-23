var gulp=require("gulp")
var webserver=require("gulp-webserver")
var data=require("./src/data/data.json")
var uglify=require("gulp-uglify")
var sass=require("gulp-sass")
var cleancss=require("gulp-clean-css")


gulp.task("mincss",function(){
	gulp.src("src/css/*.css")
	.pipe(cleancss())
	.pipe(gulp.dest("dist/css"))
})
gulp.task("minjs",function(){
	gulp.src("src/**/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
})
gulp.task("server",function(){
	gulp.src("src")
	.pipe(webserver({
		port:8090,
		host:"localhost",
		open:true,
		livereload:true,
		middleware:function(req,res,next){
			if(req.url==="/list"){
				res.end(JSON.stringify(data))
			}
			next();
		}
	}))
})
gulp.task("watch",function(){
	gulp.watch("src/css/*.css",['mincss'])
})


gulp.task("default",['server',"minjs","mincss"])