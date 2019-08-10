<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames" :accordion="accordion" :theme="theme" width="auto" @on-select="handleSelect">

    </Menu>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>

</style>
