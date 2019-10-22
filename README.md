# Webpack

## Install

```
$ npm init
$ npm install webpack --save
```

- Create src/app.js with console log

```
$ npx webpack src/app.js --mode=development
```

- Create index.html in dist/

## Configuration file

- Create webpack.config.js

## Watch changes

- add watch in package.json

## Local server

https://github.com/webpack/webpack-dev-server

```
$ npm install webpack-dev-server --save-dev
```

```
$ npx webpack-dev-server
```

- add serve in package.json

## Styles

### CSS

https://github.com/webpack-contrib/css-loader
https://github.com/webpack-contrib/style-loader

- Create src/assets/css/app.css
- Add module in webpack.config.js

```
$ npm install --save-dev css-loader
$ npm install style-loader --save-dev
```

### SASS

```
$ npm install sass-loader --save-dev
$ npm install node-sass --save-dev
```

- Create src/assets/sass/app.scss
- Add module in webpack.config.js

### LESS

```
$ npm install less-loader --save-dev
$ npm install less --save-dev
```

- Create src/assets/less/app.less
- Add module in webpack.config.js

## BABEL

- Add code in app.js

```
let name = "Clément";
console.log(name);
```

https://github.com/babel/babel-loader
https://github.com/babel/babel/tree/master/packages/babel-preset-env
https://www.npmjs.com/package/@babel/core

```
$ npm install babel-loader --save-dev
$ npm install --save-dev @babel/preset-env
$ npm install --save-dev @babel/core
```

- Add module in webpack.config.js

### RC

- Create `babelrc` file

## Production/Development mode

- Create configuration files in `build/` folder

```
$ npm install webpack-merge --save
```

## Minify (optional)

https://github.com/webpack-contrib/uglifyjs-webpack-plugin

```
$ npm install uglifyjs-webpack-plugin --save-dev
```

- Add module in webpack.config.js : ERROR

## Node environment

- add env on production
- Test env on src/app.js

## Config splitting

- create config files in config/ folder

## Build file

- create build/build.js

https://github.com/sindresorhus/ora
https://github.com/chalk/chalk

```
$ npm install ora
$ npm install chalk
```

- update build.js

## Style file

- update webpack.dev.js

https://github.com/webpack-contrib/extract-text-webpack-plugin
https://github.com/webpack-contrib/mini-css-extract-plugin

```
$ npm install --save-dev mini-css-extract-plugin
```

- update webpack.prod.js

```
$ npm run create
```

### Minify

https://github.com/NMFR/optimize-css-assets-webpack-plugin
https://github.com/webpack-contrib/terser-webpack-plugin

```
$ npm install --save-dev optimize-css-assets-webpack-plugin
$ npm install terser-webpack-plugin --save-dev
```

## Source mapping

- create src/app/api/index.js
- update app.js

https://webpack.js.org/configuration/devtool/

## Aliases

- update buid/webpack.dev.js
- update app.js