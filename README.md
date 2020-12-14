react全家桶安装 react + react-router-rom + axios + redux + saga + antd + serviceWorker + 热更

### 全局安装 由于权限问题 需要添加sudo提权
sodu npm install -g create-react-app

### 安装项目 npx 为npm自带方法 如果没有可自行安装 npm install -g npx ； npx -v
npx create-react-app my-app 

###  将设置暴露出来
npm run eject

### 运行项目
npm start

### 项目打包
npm run build

配置

### sass 注意版本兼容  tudo 1 
npm install node-sass --save

### react-router-dom  路由嵌套的版本不同写法不同 withRouter（component）是一个效果；
npm install --save react-router-dom

### 环境变量 process.env.NODE_ENV

### 代理  webpack.json中配置代理 （简单配置啊）
+ https://www.cnblogs.com/lanshu123/p/10660548.html
+ "proxy": "http://127.0.0.1:8080",

### axios 几乎不需要修改什么  2020-07-03 09:52:00 更新时间
+ npm install axios --save
+ https://blog.csdn.net/chf1142152101/article/details/107099403/

### react-redux 合并store
npm install redux react-redux --save

### redux-saga 
npm install redux-saga --save

### 热更 serviceWorker 保留文件 
只需要配置即可

### 路由方式实现懒加载  Suspense + lazy 主要是以异步加载js的方式缓解首屏的js包大小
`
    <React.Suspense fallback={null}>
        <Switch>
            <Route exact path="/home" component={React.lazy(() => import('./pages/childrens/child1'))}/>
        </Switch>
    </React.Suspense>
`

### 端口被一直占用
+ 只需要配置 hosts文件 127.0.0.1 localhost
+ https://juejin.cn/post/6844904119107321864

### browserRouter
#### nginx  配置
1 location /react {
2    alias /project/react/;
3    # browserHistory模式 404问题
4    try_files $uri $uri/ /react/index.html;
5    index index.html;
6    autoindex on;
7    gzip on;
8    add_header Access-Control-Allow-Origin '*';
9    add_header Access-Control-Allow-Methods 'GET, POST, PUT, OPTIONS';
10    add_header Access-Control-Expose-Headers 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range';
11  }
#### webpack配置
1 devServer {
2	historyApiFallback: true
3 }
+ https://blog.csdn.net/qq_26003101/article/details/100902882