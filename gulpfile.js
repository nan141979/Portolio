var gulp = require('gulp'), 
    sass = require('gulp-sass');

//task (tarefa) que vai ser chamada
// dois parametros (tarefa que vai ser chamada, funcao que vai ser executada)
gulp.task('sass', function(){
    
    // o gulp tem dois métodos responsavel pela origem do arquivo e saida do arquivo
    // (origem)src/sass = =========> tubulação =======> //(destino)src/css 
    gulp.src('./src/sass/**/*.scss')//origem
    .pipe(sass()) // sass vem acima => = require(gulp-sass)
    .pipe(gulp.dest('./src/css/'));//destino
});

gulp.task('listen',function(){
   gulp.watch('./src/sass/**/*.scss',['sass']); 
});