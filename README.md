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

### Unit Test
```bash
npm run test
```
or watch test

```bash
npm run test-watch
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

## Unit Test Frame

* ava : 测试框架，类似于 mocha jest jasmine QUnit 等
  官网：https://github.com/avajs/ava
  中文指南：https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md
* enzyme : React测试工具，依赖 react-addons-test-utils 可以类似 jquery 风格的 api 操作react 节点
  官网：https://github.com/airbnb/enzyme
  文档：http://airbnb.io/enzyme/
* sinon : 提供 fake 数据， 替换函数调用等功能
  官网：http://sinonjs.org/
* nyc : JS code coverage tool that computes statement, line, function and branch coverage（用来检测单元测试覆盖率）
  官网：https://github.com/istanbuljs/nyc
  Note: With this configuration, the Istanbul instrumentation will only be active when NODE_ENV or BABEL_ENV is test.
* nock: 用来模拟 http 请求测试用
  官网：https://github.com/node-nock/nock
* 参考文章
  * http://zhaozhiming.github.io/blog/2016/03/28/use-ava-and-enzyme-to-test-react-component-part1/
  * http://zhaozhiming.github.io/blog/2016/03/29/use-ava-and-enzyme-to-test-react-component-part2/
  * http://zhaozhiming.github.io/blog/2016/03/29/use-ava-and-enzyme-to-test-react-component-part3/
  
  
## License

MERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).
