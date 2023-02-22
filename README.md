
`2023-2-3:`
尝试vue3做的todolist案例
1. 列表通过v-for遍历数据数组生成，该数组位于App组件，通过props传入Items完成遍历

2. 添加操作在App完成，直接对数据进行push。 父------>子

3. 删除操作在Items，对父组件传来的数组进行修改。 子------>父

4. 每次修改数组，都会触发响应式。App的数组和Items的数组是同一份，添加是修改App数组，删除是修改Items数组

tips：
npm list vue 查看当前项目vue版本


`2023-2-4:`

1. 封装原有的todolist组件(ItemList),原来是在App上，现在可以防止App过于臃肿

2. 添加路由功能，共4个页面，用router-link跳转，导航栏封装为TabBar组件

3. 将todolist展示在首页



tips:
注意vue3中roter的引入和配置

history: createWebHistory(), //createWebHistory实现history模式实现，
history: createWebHashHistory(), //这里是使用hash模式,url中含有#
在创建router(createRouter)实例时，作为对象的属性传入

alt+左键，选中多行同时编写

`2023-2-5:`

1. tabbar一栏点击选中变色， 获取当前活跃的路由和本组件路由(由props传过来)做对比

2. this.$route.path在TabBar.vue中不能正确获得路由信息

`2023-2-9:`

1. 使用vue3的Composition组合式API对todolist代码重构，修改了Item Items ItemList组件

2. 在`<script setup>`中，无法访问`this`，options API中在setup()中没有`this`，但是其他配置项（生命周期钩子中）可以访问`this`

- 定义的数据使用ref或reactive定义后，直接使用即可

- 组件在`<script setup>`中无需注册，直接使用

- props使用defineProps定义，参数为字符串数组，或者一个对象，与之前props的配置类似

- 使用路由信息时，使用vue-router提供的useRoute，useRouter方法
  - this.$route  ===>  const route = useRoute()
  - this.$router  ===>  const router = useRouter()

- 使用生命周期函数：
  - 从vue中引入勾子函数，想computed一样，传入一个函数
  - `import onMounted from 'vue'`
  - `onMounted(()=>{console.log('onMounted')})`

`2023-2-9:`

1. todoList案例中，遵循props单项数据流，修改原来的直接操作props，引入自定义事件$emit()，在父组件中修改props，此变化再单向流入子组件

- items组件触发自定义事件deleteItem，在ItemList组件中监听，监听到后修改数据数组msg


Tips：

- v-on:click="methodName(param1)" 等同于 @click="handler('hi')"  注意：v-on传入的是字符串，要用""包裹，参数也在""里面
- @methodName="$emit('dirEvent',[...params])"
- hooks文件夹，存放组合式函数，将组件的一些共同功能抽离成一个单独的js文件

`2023-2-9:`

1. `v-model`:

v-model通过数据动态绑定和触发自定义事件
```vue
<Cpn v-model="message"></Cpn>
等同于
<Cpn :modelValue="message" @update="newValue => message = newValue"></Cpn>

组件中：
<input 
:value="message"
@input="$emit('updata',$event.target.value)"
/>
```

- 应用在`表单`中：

```vue
<input v-model="searchText" />
```
等同：
```vue
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
```
应用在`组件`中：
```vue
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
```

Tips: 
npm run dev是在vue-cli2.0中使用         "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
npm run serve是在vue-cli3.0中使用       "serve": "vue-cli-service serve",
本质上是不同版本脚手架启动项目的脚本
不能直接运行vue-cli-service，但是在npm run的时候，会前往node_modules/.bin下找到vue-cli-service文件，然后将该文件作为脚本运行。

```vue
<script setup>
里面是无法访问this的，this始终为undefined
</script>
<script>
export default{
    setup(){
        let a = 123
        return{
            a
        }
    }
    updated(){
        console.log(this.a) //这种形式除了setup函数内部this是undefined，函数外是可以访问到this的
    }
}
</script>
```

this在setup内是undefined

`2023-2-13:`

1. 在声明匿名函数时名称可以省略。函数名称只是函数体中的一个本地变量。即name属性


`2023-2-19:`

Tips：
- vue官网是用vuepress框架写的
- vue事件绑定 ()可写可不写，都是给元素绑定一个事件         **官网：**  ` v-on 也可以接受一个方法名或对某个方法的调用。`
  - foo 方法事件处理器  foo()，count++ 内联事件处理器      
  - 如果要传参，需要带括号，即写成内联事件处理器
  - 传入特殊事件参$event   @click="add($event)"  或者什么都不传，直接接收 @click="add"


`2023-2-21:`

1. 23考研出分了，345，估计还是没学上
2. 对本项目引入 mixins混入 和 vuex全局状态管理，
   - mixins一般较少使用，就是一个包含组件配置项的对象，import引入后，记得添加配置项:mixins: [myMixins],然后与当前组件选项自动合并
   - vuex包含，state(状态),mutations(同步操作 commit),actions(异步操作,通常异步操作同步 dispatch)三部分, 要引入配置好后导出store，再给appuse
3. 目前项目用到的技术：vue3 vueRouter  vuex  mixin  antdv  组合式函数 
4. 学习happyfri项目---vue2+vuex，基本摸透了逻辑交互
5. 第一次提交项目到github
Tips:
1. 服务端渲染和客户端渲染最本质的区别就是由谁来完成html的拼接
   - 服务端渲染SSR是在服务端生成DOM树，开发效率低，增大服务器压力，但有多个页面，有利于SEO
   - 客户端渲染CSR是在客户端生成DOM树，有利于前后端分离，但是首屏加载慢，而且不利于SEO，因为是SPA，只有一个页面


`2023-2-22:`

1. antdv    
   - 全部引入（将组件库所有组件全部引入，单独引入全部样式，打包体积很大） app.use(Antd)
   - 全局部分引入（是指在根组件注册全局组件，以后在子组件可以直接使用） app.use(Button)
   - 局部引入（在组件中局部注册，用哪个引入哪个，）  import { Button as AButton } from 'ant-design-vue'
   - 按需加载  引入babel-plugin-import，实现按需加载  import { Button as AButton } from 'ant-design-vue';

2. 对象的原型指向其构造函数的原型对象
```js
function A(){}
let a = new A()
a.__proto__ === a.constructor.prototype    //true
// __proto__  称为原型 ，存在于对象，但js一切皆对象，因此函数对象都有__proto__
// prototype  称为原型对象  只有函数才有prototype


class P{}
typeof A //'function'
typeof P //'function'
```