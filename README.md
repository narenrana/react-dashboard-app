# Project Setup Guidelines

##Please see this artical on how components and scenes are different (we try to follow this folder structure):
https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1#.b1nwuzsbs
src/components : global components that can be used anywhere in the app
src/scenes: private components can not be used anywhere in the applicaton only subfolders

src/data : api and reducers
src/services: does not have external dependencies 

the structure can be recursive..

##We are using material-ui and bootstrap in this project:
http://www.material-ui.com/#/components/
http://getbootstrap.com/




1. **Install** - Type `npm install` to install all dependencies.
2. **Run** - Type `npm start` to start the project.
4. **Deploy for production** - Type `npm run build` to build for production.



##Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
Issus with npm:
machine swap issue - 
https://www.digitalocean.com/community/questions/npm-gets-killed-no-matter-what?answer=18115

2. **Install [Git](https://git-scm.com/downloads)**. 
3. **[Disable safe write in your editor](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.
4. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.  
 
**On Linux:**  

 * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).    
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` 

**On Windows:** 
 
* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

## Having Issues? Try these things first.
1. Make sure you ran all steps in [Get started](https://github.com/coryhouse/react-slingshot/blob/master/README.md#get-started) including the [initial machine setup](https://github.com/coryhouse/react-slingshot#initial-machine-setup).
2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node. Or install [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.
