<template>
    <div class="tabBar">
        <TabBarItem path="/home">
            <template v-slot:text>
                <span class="tabBarLink">todolist</span>
            </template>
        </TabBarItem>
        <TabBarItem path="/category">
            <template #text>
                <span class="tabBarLink">category</span>
            </template>
        </TabBarItem>
        <TabBarItem path="/search">
            <template #text>
                <span class="tabBarLink">search</span>
            </template>
        </TabBarItem>
        <TabBarItem path="/me">
            <template #text>
                <span class="tabBarLink">me</span>
            </template>
        </TabBarItem>
    </div>
</template>

<script setup>
import TabBarItem from "./TabBarItem";

    // created () {
    //     console.log('tabBar:', this);
    //     console.log('tabBar:', this.$router);
    //     console.log('tabBar:', this.$data);

    // }

</script>

<style>
.tabBar {
    display: flex;
    justify-content: space-between;
    padding: 0 55px;
    background-color: #ccc;
    color: rgb(21, 18, 68);
}

.tabBarLink {
    text-decoration: none;
    cursor: pointer;

}

.tabBarLink:hover {
    color: red;
}
</style>
