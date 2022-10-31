const pages = [
  {
    "html": {
      "body": "<header class=\"bar\">\n        <img class=\"logo\" src=\"img/logo.png\" alt=\"\">\n        <ul class=\"menu\">\n            <li>\n                <a href=\"/\">\n                    <p>Main</p>\n                </a>\n            </li>\n            <li>\n                <a href=\"/projects\">\n                    <p>Projects</p>\n                </a>\n            </li>\n            <li>\n                <a href=\"/info\">\n                    <p>Info</p>\n                </a>\n            </li>\n        </ul>\n        <ul class=\"social\">\n            <li>\n                <img src=\"img/git.png\" alt=\"\">\n            </li>\n            <li>\n                <img src=\"img/instagram.png\" alt=\"\">\n            </li>\n            <li>\n                <img src=\"img/face.png\" alt=\"\">\n            </li>\n        </ul>\n    </header>\n    <header class=\"content\">\n        <section id=\"projects\">\n         \n            <div id=\"boxes\">\n                <div id=\"box\">\n                    <h2>&lt;/Rafael V.&gt;</h2>\n                    <h3>Software Developer</h3>\n                    <h3>Web Developer</h3>\n                    <h3>Audio Producer</h3>\n                    <h3>Digital Artist</h3>\n                    <a href=\"http://gmail.com\"><p>contact@kruceo.com</p></a>\n                </div>\n            </div>\n        </section>\n        <section>\n\n        </section>\n    </header>\n    <footer>\n        <h2>\n            By Kruceo\n        </h2>\n    </footer>\n",
      "head": "<route>info</route>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>Kruceo | Projects</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n    <script src=\"srum.js\"></script>\n    <style>\n        @import url('https://fonts.googleapis.com/css?family=Karla');\n    </style>\n\n<style>\n\n* {\n  margin: 0 auto;\n}\nbody {\n  background: linear-gradient(black 0%, #11001a 100%);\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n.bar {\n  position: fixed;\n  top: 0;\n  background-color: black;\n  z-index: 5;\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bar .logo {\n  width: 30px;\n  padding-left: 2px;\n}\n.bar .menu {\n  display: flex;\n  padding: 0;\n  position: absolute;\n}\n.bar .menu li {\n  list-style: none;\n  margin: 0 60px;\n}\n.bar .menu li a {\n  text-decoration: none;\n}\n.bar .menu li p {\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-family: 'karla';\n  text-transform: uppercase;\n}\n.bar .menu li p:hover {\n  color: #d61c59;\n}\n.bar .social {\n  width: 100%;\n  margin: 0 0;\n  justify-content: flex-end;\n  display: flex;\n}\n.bar .social li {\n  margin: 0 10px;\n}\n.bar .social li img {\n  width: 30px;\n}\n.content {\n  width: 1000px;\n  height: 50vh;\n  margin-top: 120px;\n  margin-bottom: 60px;\n}\n.content h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-family: 'karla';\n  color: white;\n  margin-bottom: 10px;\n}\n.content #projects #boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 50px;\n}\n.content #projects #boxes #box {\n  width: 100%;\n  height: 250px;\n  background-color: #202020;\n  border-radius: 20px;\n  color: white;\n  font-family: 'karla';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content #projects #boxes #box h2 {\n  font-size: 30px;\n  color: #d61c59;\n}\n.content #projects #boxes #box p {\n  text-align: center;\n  height: 80px;\n}\n.content #projects #boxes #box a {\n  text-decoration: none;\n}\n.content #projects #boxes #box a p {\n  height: fit-content;\n  text-align: end;\n  margin: 10px;\n}\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 255, 255, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'karla';\n  color: rgba(255, 255, 255, 0.09);\n}\n\n\n</style>"
    },
    "cssPaths": [
      "* {\n  margin: 0 auto;\n}\nbody {\n  background: linear-gradient(black 0%, #11001a 100%);\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n.bar {\n  position: fixed;\n  top: 0;\n  background-color: black;\n  z-index: 5;\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bar .logo {\n  width: 30px;\n  padding-left: 2px;\n}\n.bar .menu {\n  display: flex;\n  padding: 0;\n  position: absolute;\n}\n.bar .menu li {\n  list-style: none;\n  margin: 0 60px;\n}\n.bar .menu li a {\n  text-decoration: none;\n}\n.bar .menu li p {\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-family: 'karla';\n  text-transform: uppercase;\n}\n.bar .menu li p:hover {\n  color: #d61c59;\n}\n.bar .social {\n  width: 100%;\n  margin: 0 0;\n  justify-content: flex-end;\n  display: flex;\n}\n.bar .social li {\n  margin: 0 10px;\n}\n.bar .social li img {\n  width: 30px;\n}\n.content {\n  width: 1000px;\n  height: 50vh;\n  margin-top: 120px;\n  margin-bottom: 60px;\n}\n.content h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-family: 'karla';\n  color: white;\n  margin-bottom: 10px;\n}\n.content #projects #boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 50px;\n}\n.content #projects #boxes #box {\n  width: 100%;\n  height: 250px;\n  background-color: #202020;\n  border-radius: 20px;\n  color: white;\n  font-family: 'karla';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content #projects #boxes #box h2 {\n  font-size: 30px;\n  color: #d61c59;\n}\n.content #projects #boxes #box p {\n  text-align: center;\n  height: 80px;\n}\n.content #projects #boxes #box a {\n  text-decoration: none;\n}\n.content #projects #boxes #box a p {\n  height: fit-content;\n  text-align: end;\n  margin: 10px;\n}\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 255, 255, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'karla';\n  color: rgba(255, 255, 255, 0.09);\n}\n"
    ],
    "jsPaths": [],
    "route": "info",
    "path": "./pages/info/",
    "pkg": {
      "name": "name",
      "description": "description",
      "authors": "author",
      "version": "1.0.0",
      "main": "pathToMain",
      "dependencies": {
        "bananaslider": "github:kruceo/bananaslider",
        "less": "^4.1.3",
        "pasteljs": "github:kruceo/pasteljs",
        "vesic-js": "github:inforgdev/vesic-js"
      }
    }
  },
  {
    "html": {
      "body": "<header class=\"bar\">\n        <img class=\"logo\" src=\"public/img/logo.png\" alt=\"\">\n        <ul class=\"menu\">\n            <li>\n                <a href=\"/\">\n                    <p>Main</p>\n                </a>\n            </li>\n            <li>\n                <a href=\"/projects\">\n                    <p>Projects</p>\n                </a>\n            </li>\n            <li>\n                <a href=\"/info\">\n                    <p>Info</p>\n                </a>\n            </li>\n        </ul>\n        <ul class=\"social\">\n            <li>\n                <img src=\"public/img/git.png\" alt=\"\">\n            </li>\n            <li>\n                <img src=\"public/img/instagram.png\" alt=\"\">\n            </li>\n            <li>\n                <img src=\"public/img/face.png\" alt=\"\">\n            </li>\n        </ul>\n    </header>\n    <parallax style=\"z-index: -2;\">\n        <header class=\"wallpaper-ground\">\n            <div>\n                <h2>&lt;Welcome/&gt;</h2>\n            </div>\n            <div class=\"line\"></div>\n            <slider cooldown=\"10000\" speed=\"1000\">\n                <slide>\n                    <h2>JS</h2>\n                </slide>\n                <slide>\n                    <h2>HTML</h2>\n                </slide>\n                <slide>\n                    <h2>CSS</h2>\n                </slide>\n                <slide>\n                    <h2>BURRO</h2>\n                </slide>\n            </slider>\n        </header>\n    </parallax>\n    <header class=\"content\">\n        <section id=\"welcome-itens\">\n            <h2>Just a look</h2>\n            <div id=\"boxes\">\n                <div id=\"box\">\n                    <h2>Open Source</h2>\n                    <p>You will reach open source library here</p>\n                    <img src=\"https://cdn-icons-png.flaticon.com/512/8091/8091819.png\" alt=\"\">\n                </div>\n                <div id=\"box\">\n                    <h2>Multi Language</h2>\n                    <p>Projects in multiple languages and platforms</p>\n                    <img src=\"https://cdn-icons-png.flaticon.com/512/8091/8091807.png\" alt=\"\">\n                </div>\n                <div id=\"box\">\n                    <h2>From dev for dev</h2>\n                    <p>Get libraries to make your work a little bit more easy </p>\n                    <img src=\"https://cdn-icons-png.flaticon.com/512/8091/8091822.png\" alt=\"\">\n                </div>\n                <div id=\"box\">\n                    <h2>Different projects</h2>\n                    <p>See some projects with one screw less</p>\n                    <img src=\"https://cdn-icons-png.flaticon.com/512/8091/8091799.png\" alt=\"\">\n                </div>\n            </div>\n        </section>\n        <section>\n            <h2>Highlights</h2>\n            <slider cooldown=\"5000\">\n                <slide>\n                    <div>\n                        <img src=\"./public/img/72dddd7835.png\" alt=\"tatuclickericon\">\n                        <div>\n                            <h2>&lt;BananaSlider/&gt;</h2>\n                            <p>BananaSlider is a library built in pure JavaScript, is a very easy and customizable way\n                                to create slides (carrousel's) with total control over it. </p>\n                            <a target=\"_blank\" href=\"https://github.com/kruceo/bananaslider\">Take a look</a>\n                        </div>\n                    </div>\n                </slide>\n                <slide>\n                    <div>\n                        <img src=\"./public/img/code-sample.png\" alt=\"tatuclickericon\">\n                        <div>\n                            <h2>&lt;PipocaJS/&gt;</h2>\n                            <p>Version fixer and incrementer for JavaScript and Git repositories, just type \"pipoca\" and\n                                you can forget to increment your package version...\n                                This works watching commits and yours messages. </p>\n                            <a target=\"_blank\" href=\"https://github.com/kruceo/PipocaJS\">Take a look</a>\n                        </div>\n                    </div>\n                </slide>\n            </slider>\n        </section>\n\n        <section>\n\n        </section>\n    </header>\n    <footer>\n        <h2>\n            By Kruceo\n        </h2>\n    </footer>\n\n    \n    \n",
      "head": "<route></route>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>Kruceo | Main</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n    <script src=\"srum.js\"></script>\n    <style>\n        @import url('https://fonts.googleapis.com/css?family=Karla');\n    </style>\n\n<style>\n\n* {\n  margin: 0 auto;\n}\nbody {\n  background: linear-gradient(black 0%, #11001a 100%);\n  background-repeat: no-repeat;\n}\n.bar {\n  position: fixed;\n  top: 0;\n  background-color: black;\n  z-index: 5;\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bar .logo {\n  width: 30px;\n  padding-left: 2px;\n}\n.bar .menu {\n  display: flex;\n  padding: 0;\n  position: absolute;\n}\n.bar .menu li {\n  list-style: none;\n  margin: 0 60px;\n}\n.bar .menu li a {\n  text-decoration: none;\n}\n.bar .menu li p {\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-family: 'karla';\n  text-transform: uppercase;\n}\n.bar .menu li p:hover {\n  color: #d61c59;\n}\n.bar .social {\n  width: 100%;\n  margin: 0 0;\n  justify-content: flex-end;\n  display: flex;\n}\n.bar .social li {\n  margin: 0 10px;\n}\n.bar .social li img {\n  width: 30px;\n}\n.wallpaper-ground {\n  height: 95vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transform: scaleY(1);\n}\n.wallpaper-ground div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wallpaper-ground h2 {\n  font-family: 'karla';\n  color: #d61c59;\n  font-size: 100px;\n  animation: forwards welcome 1s cubic-bezier(0, 1, 1, 1);\n}\n.wallpaper-ground .line {\n  animation: forwards welcome 1.5s;\n  width: 500px;\n  height: 12px;\n  background-color: #d61c59;\n}\n.wallpaper-ground slider h2 {\n  font-size: 40px;\n}\n.content {\n  width: 1000px;\n}\n.content section {\n  margin-top: 120px;\n  margin-bottom: 60px;\n}\n.content section h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-family: 'karla';\n  color: white;\n  margin-bottom: 10px;\n}\n.content section slider slider-frame slide div {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: #242424;\n  color: white;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.content section slider slider-frame slide div img {\n  width: 350px;\n  transition: filter 500ms;\n}\n.content section slider slider-frame slide div img:hover {\n  filter: grayscale();\n}\n.content section slider slider-frame slide div div {\n  display: block;\n}\n.content section slider slider-frame slide div div h2 {\n  padding: 10px;\n  text-align: left;\n  color: #d61c59;\n}\n.content section slider slider-frame slide div div p {\n  padding: 10px;\n  font-family: 'karla';\n  text-align: left;\n  height: 230px;\n}\n.content section slider slider-frame slide div div a {\n  width: 100%;\n  padding: 10px;\n  text-decoration: none;\n  text-align: end;\n  font-family: 'karla';\n  color: #a3a3a3;\n  transition: color 200ms;\n}\n.content section slider slider-frame slide div div a:hover {\n  color: #d61c59;\n}\n.content #welcome-itens #boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 20px;\n}\n.content #welcome-itens #boxes #box {\n  width: 90%;\n  height: 90%;\n  background-color: #242424;\n  border-radius: 20px;\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content #welcome-itens #boxes #box h2 {\n  font-size: 20px;\n  color: #d61c59;\n}\n.content #welcome-itens #boxes #box p {\n  color: white;\n  font-family: 'karla';\n  text-align: center;\n  height: 80px;\n}\n.content #welcome-itens #boxes #box img {\n  width: 80px;\n  padding: 5px;\n}\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 255, 255, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'karla';\n  color: rgba(255, 255, 255, 0.09);\n}\n@keyframes welcome {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    transform: translate(0, -100px);\n    opacity: 0;\n  }\n}\n\n\n</style>"
    },
    "cssPaths": [
      "* {\n  margin: 0 auto;\n}\nbody {\n  background: linear-gradient(black 0%, #11001a 100%);\n  background-repeat: no-repeat;\n}\n.bar {\n  position: fixed;\n  top: 0;\n  background-color: black;\n  z-index: 5;\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bar .logo {\n  width: 30px;\n  padding-left: 2px;\n}\n.bar .menu {\n  display: flex;\n  padding: 0;\n  position: absolute;\n}\n.bar .menu li {\n  list-style: none;\n  margin: 0 60px;\n}\n.bar .menu li a {\n  text-decoration: none;\n}\n.bar .menu li p {\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-family: 'karla';\n  text-transform: uppercase;\n}\n.bar .menu li p:hover {\n  color: #d61c59;\n}\n.bar .social {\n  width: 100%;\n  margin: 0 0;\n  justify-content: flex-end;\n  display: flex;\n}\n.bar .social li {\n  margin: 0 10px;\n}\n.bar .social li img {\n  width: 30px;\n}\n.wallpaper-ground {\n  height: 95vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transform: scaleY(1);\n}\n.wallpaper-ground div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wallpaper-ground h2 {\n  font-family: 'karla';\n  color: #d61c59;\n  font-size: 100px;\n  animation: forwards welcome 1s cubic-bezier(0, 1, 1, 1);\n}\n.wallpaper-ground .line {\n  animation: forwards welcome 1.5s;\n  width: 500px;\n  height: 12px;\n  background-color: #d61c59;\n}\n.wallpaper-ground slider h2 {\n  font-size: 40px;\n}\n.content {\n  width: 1000px;\n}\n.content section {\n  margin-top: 120px;\n  margin-bottom: 60px;\n}\n.content section h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-family: 'karla';\n  color: white;\n  margin-bottom: 10px;\n}\n.content section slider slider-frame slide div {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: #242424;\n  color: white;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.content section slider slider-frame slide div img {\n  width: 350px;\n  transition: filter 500ms;\n}\n.content section slider slider-frame slide div img:hover {\n  filter: grayscale();\n}\n.content section slider slider-frame slide div div {\n  display: block;\n}\n.content section slider slider-frame slide div div h2 {\n  padding: 10px;\n  text-align: left;\n  color: #d61c59;\n}\n.content section slider slider-frame slide div div p {\n  padding: 10px;\n  font-family: 'karla';\n  text-align: left;\n  height: 230px;\n}\n.content section slider slider-frame slide div div a {\n  width: 100%;\n  padding: 10px;\n  text-decoration: none;\n  text-align: end;\n  font-family: 'karla';\n  color: #a3a3a3;\n  transition: color 200ms;\n}\n.content section slider slider-frame slide div div a:hover {\n  color: #d61c59;\n}\n.content #welcome-itens #boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 20px;\n}\n.content #welcome-itens #boxes #box {\n  width: 90%;\n  height: 90%;\n  background-color: #242424;\n  border-radius: 20px;\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content #welcome-itens #boxes #box h2 {\n  font-size: 20px;\n  color: #d61c59;\n}\n.content #welcome-itens #boxes #box p {\n  color: white;\n  font-family: 'karla';\n  text-align: center;\n  height: 80px;\n}\n.content #welcome-itens #boxes #box img {\n  width: 80px;\n  padding: 5px;\n}\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 255, 255, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'karla';\n  color: rgba(255, 255, 255, 0.09);\n}\n@keyframes welcome {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    transform: translate(0, -100px);\n    opacity: 0;\n  }\n}\n"
    ],
    "jsPaths": [
      {
        "type": "module",
        "code": "import { initAllSliders  } from './node_modules/bananaslider/dist/bundle.es.js'\nimport { initAllParallax } from './node_modules/pasteljs/index.js'\ninitAllSliders()\ninitAllParallax()\n",
        "src": "main.js"
      }
    ],
    "route": "",
    "path": "./pages/main/",
    "pkg": {
      "type": "module",
      "dependencies": {
        "bananaslider": "github:kruceo/bananaslider",
        "less": "^4.1.3",
        "pasteljs": "github:kruceo/pasteljs",
        "vesic-js": "github:inforgdev/vesic-js"
      }
    }
  },
  {
    "html": {
      "body": "<header class=\"bar\">\n        <img class=\"logo\" src=\"img/logo.png\" alt=\"\">\n        <ul class=\"menu\">\n            <li>\n                <a href=\"/\">\n                    <p>Main</p>\n                </a>\n            </li>\n            <li>\n                <a href=\"/projects\">\n                    <p>Projects</p>\n                </a>\n            </li>\n            <li>\n                <a href=\"/info\">\n                    <p>Info</p>\n                </a>\n            </li>\n        </ul>\n        <ul class=\"social\">\n            <li>\n                <img src=\"img/git.png\" alt=\"\">\n            </li>\n            <li>\n                <img src=\"img/instagram.png\" alt=\"\">\n            </li>\n            <li>\n                <img src=\"img/face.png\" alt=\"\">\n            </li>\n        </ul>\n    </header>\n    <header class=\"content\">\n        <section id=\"projects\">\n         \n            <div id=\"boxes\">\n                <div id=\"box\">\n                    <h2>&lt;/BananaSlider&gt;</h2>\n                    <h3>JS | CSS | HTML</h3>\n                    <p>Easy and fast, create sliders full customizable.</p>\n                    <a href=\"https://banana.kruceo.com\"><p>Visit website ↝</p></a>\n                </div>\n                <div id=\"box\">\n                    <h2>&lt;/Pastel&gt;</h2>\n                    <h3>JS | CSS | HTML</h3>\n                    <p>Create Parallax Linked to Mouse Scroll.</p>\n                    <a href=\"https://pastel.kruceo.com\"><p>Visit website ↝</p></a>\n                </div>\n                <div id=\"box\">\n                    <h2>&lt;/Orkrux&gt;</h2>\n                    <h3>Node.js</h3>\n                    <p>Framework to append multiple pages in just one. </p>\n                    <a href=\"https://orkrux.kruceo.com\"><p>Visit website ↝</p></a>\n                </div>\n                <div id=\"box\">\n                    <h2>&lt;/Pipoca&gt;</h2>\n                    <h3>Node.js | Git</h3>\n                    <p>Semantic version incrementer utility tool.</p>\n                    <a href=\"https://pipoca.kruceo.com\"><p>Visit website ↝</p></a>\n                </div>\n                <div id=\"box\">\n                    <h2>&lt;/Notavel&gt;</h2>\n                    <h3>JS | CSS | HTML</h3>\n                    <p>TextEditor with line counter and highlight code.</p>\n                    <a href=\"https://notavel.kruceo.com\"><p>Visit website ↝</p></a>\n                </div>\n            </div>\n        </section>\n        <section>\n\n        </section>\n    </header>\n    <footer>\n        <h2>\n            By Kruceo\n        </h2>\n    </footer>\n",
      "head": "<route>projects</route>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>Kruceo | Projects</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n    <script src=\"srum.js\"></script>\n    <style>\n        @import url('https://fonts.googleapis.com/css?family=Karla');\n    </style>\n\n<style>\n\n* {\n  margin: 0 auto;\n}\nbody {\n  background: linear-gradient(black 0%, #11001a 100%);\n  background-repeat: no-repeat;\n}\n.bar {\n  position: fixed;\n  top: 0;\n  background-color: black;\n  z-index: 5;\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bar .logo {\n  width: 30px;\n  padding-left: 2px;\n}\n.bar .menu {\n  display: flex;\n  padding: 0;\n  position: absolute;\n}\n.bar .menu li {\n  list-style: none;\n  margin: 0 60px;\n}\n.bar .menu li a {\n  text-decoration: none;\n}\n.bar .menu li p {\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-family: 'karla';\n  text-transform: uppercase;\n}\n.bar .menu li p:hover {\n  color: #d61c59;\n}\n.bar .social {\n  width: 100%;\n  margin: 0 0;\n  justify-content: flex-end;\n  display: flex;\n}\n.bar .social li {\n  margin: 0 10px;\n}\n.bar .social li img {\n  width: 30px;\n}\n.content {\n  width: 1000px;\n  margin-top: 120px;\n  margin-bottom: 60px;\n}\n.content h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-family: 'karla';\n  color: white;\n  margin-bottom: 10px;\n}\n.content #projects #boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n.content #projects #boxes #box {\n  width: 100%;\n  height: 250px;\n  background-color: #202020;\n  border-radius: 20px;\n  color: white;\n  font-family: 'karla';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content #projects #boxes #box h2 {\n  font-size: 30px;\n  color: #d61c59;\n}\n.content #projects #boxes #box p {\n  text-align: center;\n  height: 80px;\n}\n.content #projects #boxes #box a {\n  text-decoration: none;\n}\n.content #projects #boxes #box a p {\n  height: fit-content;\n  text-align: end;\n  margin: 10px;\n}\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 255, 255, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'karla';\n  color: rgba(255, 255, 255, 0.09);\n}\n\n\n</style>"
    },
    "cssPaths": [
      "* {\n  margin: 0 auto;\n}\nbody {\n  background: linear-gradient(black 0%, #11001a 100%);\n  background-repeat: no-repeat;\n}\n.bar {\n  position: fixed;\n  top: 0;\n  background-color: black;\n  z-index: 5;\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bar .logo {\n  width: 30px;\n  padding-left: 2px;\n}\n.bar .menu {\n  display: flex;\n  padding: 0;\n  position: absolute;\n}\n.bar .menu li {\n  list-style: none;\n  margin: 0 60px;\n}\n.bar .menu li a {\n  text-decoration: none;\n}\n.bar .menu li p {\n  cursor: pointer;\n  color: white;\n  text-align: center;\n  font-family: 'karla';\n  text-transform: uppercase;\n}\n.bar .menu li p:hover {\n  color: #d61c59;\n}\n.bar .social {\n  width: 100%;\n  margin: 0 0;\n  justify-content: flex-end;\n  display: flex;\n}\n.bar .social li {\n  margin: 0 10px;\n}\n.bar .social li img {\n  width: 30px;\n}\n.content {\n  width: 1000px;\n  margin-top: 120px;\n  margin-bottom: 60px;\n}\n.content h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-family: 'karla';\n  color: white;\n  margin-bottom: 10px;\n}\n.content #projects #boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n.content #projects #boxes #box {\n  width: 100%;\n  height: 250px;\n  background-color: #202020;\n  border-radius: 20px;\n  color: white;\n  font-family: 'karla';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content #projects #boxes #box h2 {\n  font-size: 30px;\n  color: #d61c59;\n}\n.content #projects #boxes #box p {\n  text-align: center;\n  height: 80px;\n}\n.content #projects #boxes #box a {\n  text-decoration: none;\n}\n.content #projects #boxes #box a p {\n  height: fit-content;\n  text-align: end;\n  margin: 10px;\n}\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 255, 255, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'karla';\n  color: rgba(255, 255, 255, 0.09);\n}\n"
    ],
    "jsPaths": [],
    "route": "projects",
    "path": "./pages/projects/",
    "pkg": {
      "name": "name",
      "description": "description",
      "authors": "author",
      "version": "1.0.0",
      "main": "pathToMain",
      "dependencies": {
        "bananaslider": "github:kruceo/bananaslider",
        "less": "^4.1.3",
        "pasteljs": "github:kruceo/pasteljs",
        "vesic-js": "github:inforgdev/vesic-js"
      }
    }
  }
]
function genPage(index) {
  window.onload = null
  console.time('page-gen')
  let body = document.createElement('body')
  let head = document.createElement('head')
  let pageIndex = index
  body.innerHTML = pages[pageIndex].html.body
  head.innerHTML = pages[pageIndex].html.head

  body.querySelectorAll('a').forEach(each => {
    if (each.href.includes('http') && each.href.includes('://')) {
      each.onclick = (y) => {
        y.preventDefault()
        changePage(each.href)
      }
    }
  })
  pages[pageIndex].jsPaths.forEach(scr => {
    let ele = document.createElement('script')
    ele.type = scr.type
    ele.innerHTML = scr.code;
    body.appendChild(ele)
  })
  
  document.documentElement.removeChild(document.querySelector('head'))
  document.documentElement.appendChild(head)
  document.documentElement.removeChild(document.querySelector('body'))
  document.documentElement.appendChild(body)
  console.timeEnd('page-gen')
  window.dispatchEvent(new Event('load'))

}
console.log(window.location.pathname)
function changePage(newState) {
  const stateObj = { name: newState };
  history.pushState(stateObj, '', newState);
  window.dispatchEvent(new Event('popstate'))
};

function verifyPath() {
  pages.forEach((element, index) => {

    const path = window.location.pathname.replace('/', '')
    if (element?.route != null && (element.route ?? "") == path) {
      genPage(index)
      return
    }
  });
}
window.addEventListener('popstate', (e) => {
  verifyPath()
});

verifyPath();
