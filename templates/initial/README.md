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
    

