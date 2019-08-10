<template>
    <Layout style="height: 100%" class="main">
      <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">

      </Sider>
    </Layout>
</template>

<script>
import SideMenu from './components/side-menu'
export default {
    name: 'Main',
    props: {},
    data() {
        return {
          collapsed:false,
        }
    },
    components: {
      SideMenu,
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
    beforeDestroy() {},
}
</script>

<style lang="less" scoped>
@import './main.less'
</style>
