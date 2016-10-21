# <%= appName %>

<%= description %>

## Server 

### generate dll file

At first, generate dll file. You need to exec the following command.

```
gulp dll
```

### start server

```
gulp server
```

## Build

```
gulp build
```

## Start server after building

```
gulp connect
```

## Unit Test

```
npm run test 
```

If you writ unit test incremental, you should use the following command, it will save compile time.

```
npm run test-watch
```


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
  
## Issue

https://github.com/xxx/<%= appName %>/issues

## Change Log

Please view [here](./CHANGELOG.md)

## Digressions

* node-sass 安装失败解决方法
    ```
    npm install -g cnpm
    SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass
    ```
    

