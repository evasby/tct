module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
                src: [
                    'js/libs/*.js', // Все JS в папке libs
                    'js/script.js'  // Конкретный файл
                ],
                dest: 'js/build/production.js',
            }
        },*/
        
        /*uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },*/
        
        /*imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**//**.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },*/
        
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'css/all.css': 'sass/all.scss',
                    'css/all-old-ie.css': 'sass/all-old-ie.scss',
                    //'../slav-d/sites/all/themes/slav/css/all.css': 'sass/all.scss',
                    //'../slav-d/sites/all/themes/slav/css/all-old-ie.css': 'sass/all-old-ie.scss',
                    /*'C:/OpenServer/domains/alvista-d/sites/all/themes/alvista/css/all.css': 'sass/all.scss',
                    'C:/OpenServer/domains/alvista-d/sites/all/themes/alvista/css/all-old-ie.css': 'sass/all-old-ie.scss'*/
                }
            }
        },

        ftp_upload: {
            build: {
                auth: {
                    host: 'by122.atservers.net',
                    port: 21,
                    authKey: 'key1'
                },
                //src: ['css/all.css', 'css/all-old-ie.css', 'css/all.css.map', 'css/all-old-ie.css.map'],
                src: ['css/all.css'],
                //dest: 'www/slav.webformat.by/sites/all/themes/slav/css',
                dest: 'www/tct.by/sites/all/themes/zen/bus/css',
                exclusions: ['css/**/.DS_Store', 'css/**/Thumbs.db', 'dist/tmp']
            }
        },
        
        /*compass: {                  // Task
          dist: {                   // Target
            options: {              // Target options
              sassDir: 'sass',
              cssDir: 'css'
            }
          }
        },*/
        
        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'ftp_upload'],
                //tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            /*scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            }*/
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-upload');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    //grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
    grunt.registerTask('default', ['sass', 'ftp_upload', 'watch']);

};