sir;
there was a problem with the grunt browser sync plugın and jshint so I used global Browsersync browser-sync start --server --files "**/*.*" and 
ı couldnt register a default task so I had to use a task named 'send', you can move the files in app 
folder to the right folders due to the names. For thıs ı am usıng and when you change the less file 
thanks to the `grunt watch` it is updating the css and reloading the browser.

error message:



 			=== npm audit security report ===


                                 Manual Review
             Some vulnerabilities require your attention to resolve

          Visit https://go.npm.me/audit-guide for additional guidance


  Low             Prototype Pollution

  Package         lodash

  Patched in      >=4.17.5

  Dependency of   grunt-processhtml [dev]

  Path            grunt-processhtml > htmlprocessor > lodash

  More info       https://npmjs.com/advisories/577


  High            Prototype Pollution

  Package         lodash

  Patched in      >=4.17.11

  Dependency of   grunt-processhtml [dev]

  Path            grunt-processhtml > htmlprocessor > lodash

  More info       https://npmjs.com/advisories/782


  High            Prototype Pollution

  Package         lodash

  Patched in      >=4.17.12

  Dependency of   grunt-processhtml [dev]

  Path            grunt-processhtml > htmlprocessor > lodash

  More info       https://npmjs.com/advisories/1065


  Low             Prototype Pollution

  Package         lodash

  Patched in      >=4.17.19

  Dependency of   grunt-processhtml [dev]

  Path            grunt-processhtml > htmlprocessor > lodash

  More info       https://npmjs.com/advisories/1523