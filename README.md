## 简介

这是一个基于 vue2 + antdv + webpack 搭建的管理后台，其内置了常见组件，可满足大多数开发需求。本项目仅供个人学习、工作参考~

## 功能

```
- 登录  用户名密码/手机号验证码
- 权限
- 动态路由
- 富文本
- Markdown
- echarts各种图表
- arcgis地图
- 克里金插值分析图
- 全景图
- 错误页面 403 404 500
- 个人设置
- 系统设置
- 更换主题
- 两种布局方式
- 面包屑
- 标签页
- webSocket
- svg图标
- 全屏
- 返回顶部
- webpack优化
- 抽奖页
- table表
- form表单
- 上传Excel
- 上传头像和裁剪
- htmlcanvas2截屏
- 封装自定义loading
```

## 更新

```
1.优化之前版本的权限控制，菜单通过角色控制，可以给用户对应的角色和多角色
2.优化mock数据部分，建立用户常量和角色常量
3.添加tag标签页鼠标滚动功能
4.添加真正的整体换肤功能
5.添加外链
6.添加可视化图，饼图，柱状图等拖拽
```

## webpack 优化

```
- 关闭生产环境sourceMap;
- 关闭预加载(vue会预加载后面的页面，会导致首屏加载比较慢)
- g-zip压缩(需要nginx配置);
- 生产环境CDN加载部分插件
- 去除生产环境console和debugger;
- 公共代码抽离
- 打包大小分析
- 打包缓存
- 部分依赖使用异步cdn加载

```

### 文件目录说明

```

├── mock                             ---mock模拟数据
├── public                           ---静态资源文件
├── src
│  ├── api                           ---接口
│  ├── assets                        ---图片
│  ├── components                    ---可复用的vue组件
│  ├── layouts                       ---布局方式
│  ├── router                        ---路由
│  ├── store                         ---vuex
│  ├── styles                        ---sass样式
│  ├── utils                         ---方法函数
│  ├── vendor                        ---导出excel
│  ├── views                         ---页面
│  ├── App.vue
│  ├── main.js
│  ├── permission.js                 ---路由拦截
├── tests                            ---单元测试文件
├── .browserslistrc
├── .env
├── .eslintrc.js
├──  babel.config.js
├── .jest.config.js                  ---jest的配置
├──  package.json
├──  package-lock.json
├──  README.md
└──  vue.config.js                   ---webpack的配置


```

## 安装

```
# 克隆项目
git clone https://github.com/Qiushihua1/vue2-antdv-admin.git
# 进入项目目录
cd 项目目录
# 安装依赖
npm install
# 本地开发 启动项目
npm run serve
```

### 部署

```
# 打包项目
npm run build
# 单元测试
npm run test:unit
```
