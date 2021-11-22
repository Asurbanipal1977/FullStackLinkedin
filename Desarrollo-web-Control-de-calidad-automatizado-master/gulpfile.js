/******
 *
 * IMPORTANTE
 *
 * Este archivo usa una version antigua de Gulp que puede tener problemas de compatibilidad con node
 *
 * si tienes problemas, sigue las instrucciones detalladas en el repositorio original
 *
 * https://github.com/siddharta1337/Desarrollo-web-Control-de-calidad-automatizado
 *
 */


var gulp = require('gulp');
var webserver = require('gulp-webserver');
var opn = require('opn');
var  phantom  =  require("gulp-phantom");
var casperJs = require('gulp-casperjs');

var csslint = require('gulp-csslint');
var jslint = require('gulp-jslint');

//Definimos el servidor
var server = {
    host: 'localhost',
    port: '8001'
}

//Definimos la tarea webserver. La propiedad livereload es true para que se actualice cada vez que haya un cambio.
gulp.task('webserver', function () {

    gulp.src('app')
        .pipe(webserver({
            host: server.host,
            port: server.port,
            livereload: true,
            directoryListing: false
        }));

});

//Abre nuestro navegador en esta url
gulp.task('openbrowser', function () {
    opn('http://' + server.host + ':' + server.port);
});

//Se define que archivos se controlan cada vez que haya cambios
gulp.task('watch', function () {
    gulp.watch('app/*.html');
    gulp.watch('app/css/*.css');
});


gulp.task('phantom', function () {
    gulp.src("./phantom/*.js")
    .pipe(phantom())
    .pipe(gulp.dest("./test_data/"));
    // gulp.src("./casper/*.js")
    //     .pipe(phantom())
    //     .pipe(gulp.dest("./test_data/"));

})

// gulp.task('casper' , function(){
//     gulp.src("./casper/*.js")
//     .pipe(casperJs());
// })

// gulp.task('validar-js' , function(){
//     gulp.src('app/script/*.js')
//     .pipe(jslint())
//     .pipe(jslint.reporter('stylish'));

// })

// gulp.task('validar-css' , function(){
//     gulp.src('app/css/*.css')
//     .pipe(csslint())
//     .pipe(csslint.formatter(require('csslint-stylish')))

// })

//Se define la tarea por defecto
gulp.task('default', ['webserver', 'watch', 'openbrowser'])