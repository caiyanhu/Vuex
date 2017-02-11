# basci-vuex-demo

> 基本的记数功能
项目构成：
1. src->App.vue，包含Decrement.vue Increment.vue Display.vue。见名知意。
2. src下建立vuex文件夹，包含store.js actions.js mutations.js getters.js
3. src->main.js是入口文件，new的vue实例中加入store选项，从而使store能注入到所有子组件中
4. 需要修改state的组件中（如Increment.vue）导入mapActions，指定actions.js中的函数
5. actions.js中找到该函数，向mutations.js提交变更
6. mutations.js找到被提交的函数，执行具体的修改state的动作
7. 需要获得state的组件（如Display.vue)导入mapGetters，指定需要导入的state
8. getters.js找到需要导入的变量，传递给需要的组件
vuex状态管理的流向：
![单向状态流](http://vuex.vuejs.org/zh-cn/images/vuex.png)
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
