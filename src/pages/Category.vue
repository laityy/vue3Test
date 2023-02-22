<template>
    <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="1" header="This is panel header 1">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
            <p>{{ text }}</p>
        </a-collapse-panel>
    </a-collapse>
    <a-button type="primary" size="middle">primary</a-button>
</template>
<script setup>
import { Collapse as ACollapse, CollapsePanel as ACollapsePanel, Button as AButton } from 'ant-design-vue'
// import { Button as AButton } from 'ant-design-vue'
// import { Collapse as ACollapse } from 'ant-design-vue'
// import { CollapsePanel } from 'ant-design-vue'
//可用上面方法实现antdv按需加载 ，   as指定别名：import {源文件名 as 别名} from 'xxx'

import { ref, watch } from 'vue'
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
const activeKey = ref(['1'])
watch(activeKey, (val) => {
    console.log(val)
})

</script>
