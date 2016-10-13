
//应用配置
const appConfig = {
  //开发环境配置
  development: {
    /**
     * 启动服务 ip
     */
    IP: 'localhost',

    /**
     * 启动服务端口
     */
    PORT: '9090',

    /**
     * 后台 url 路径
     */
    SERVER_URL: '//localhost:9090/api/',
  },

  //生产环境配置
  production: {
    /**
     * 启动服务 ip
     */
    IP: 'localhost',

    /**
     * 启动服务端口
     */
    PORT: '9090',

    /**
     * 后台 url 路径
     */
    SERVER_URL: '//localhost:9090/api/',
  }
};

function getConfig() {
  const env = process.env.NODE_ENV || 'development';
  return {
    ...appConfig[env],
    env
  };
}

export default getConfig();
