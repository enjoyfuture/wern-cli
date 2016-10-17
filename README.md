# wern-cli
A Comprehensive Guide for React Boilerplate containing Webpack, Gulp, React, Redux, Router, Immutable, etc.


## Installation

First, install wern-cli using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g wern-cli
```

Then generate your new project:

```bash
mkdir demo
cd demo
wern init
```

## Install Dependencies

```bash
cd demo && npm install
```

### start your project server:

```bash
npm install -g gulp
gulp dll
gulp server
```

### build your project:

```bash
gulp build
```

## Generate your module

```
werng moduleName
```

Note: The "moduleName" is you enter module name. After exec this command, 
it will create "react component", "redux action", ande "redux reducer" etc.


## Wern Cli Development

### wern templates

The wern-cli generator react templates can download from the github `https://github.com/enjoyfuture/wern-template`.

### compile 

```
npm run compile
```

### npm publish

```
npm publish
```

## Change Log

[Change Log](./CHANGELOG.md)


## Help and Version

```bash
wern -v // Check CLI version
wern --help // Get help and check usage
```


## Frameworks and Tools

* [react](http://facebook.github.io/react/)
* [redux](http://redux.js.org/)
* [react-redux](https://github.com/reactjs/react-redux)
* [react-router](https://github.com/reactjs/react-router)
* [eslint](http://eslint.org/)


## License

MERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).
