module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    checktextdomain: {
      options:{
        text_domain: 'indieauth',
        keywords: [
          '__:1,2d',
          '_e:1,2d',
          '_x:1,2c,3d',
          'esc_html__:1,2d',
          'esc_html_e:1,2d',
          'esc_html_x:1,2c,3d',
          'esc_attr__:1,2d',
          'esc_attr_e:1,2d',
          'esc_attr_x:1,2c,3d',
          '_ex:1,2c,3d',
          '_n:1,2,4d',
          '_nx:1,2,4c,5d',
          '_n_noop:1,2,3d',
          '_nx_noop:1,2,3c,4d'
        ]
      },
      files: {
        src:  [
          '**/*.php',         // Include all files
          'includes/*.php', // Include includes
          '!node_modules/**', // Exclude node_modules/
          '!tests/**',        // Exclude tests/
          '!vendor/**',       // Exclude vendor/
	  '!static/**',   // Exclude static resources
        ],
        expand: true
     }
   },

    wp_readme_to_markdown: {
      target: {
        files: {
          'readme.md': 'readme.txt'
        }
      }
    },
    makepot: {
      target: {
        options: {
          mainFile: 'indieauth.php',
          domainPath: '/languages',
          exclude: ['build/.*'],
          potFilename: 'indieauth.pot',
          type: 'wp-plugin',
          updateTimestamp: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wp-readme-to-markdown');
  grunt.loadNpmTasks('grunt-wp-i18n');
  grunt.loadNpmTasks('grunt-checktextdomain');
  // Default task(s).
  grunt.registerTask('default', ['wp_readme_to_markdown', 'makepot', 'checktextdomain']);
};
