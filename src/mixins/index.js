//mixins混入，用于创建一个包含任意组件选项的对象，
//当组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。
//mixins合并冲突（覆盖与合并）（组件没有的就合并，组件有的以组件自身为主）
const mixins = {
    //mixins是一个js对象,可以包含我们组件中script项中的任意功能选项，
    //如data、components、methods、created、computed等等,本质也是提高代码重用性
    data() {
        return {
            name_mixin: 'name_mixin',
        }
    },
    methods: {
        hello() {
            console.log('mixin里面的hello方法')
        },
    },
    mounted() {
        console.log('mixin里的mounted调用')
    },
}

export default mixins
