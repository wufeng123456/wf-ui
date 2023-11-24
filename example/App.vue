<template>
  <div id="app">
    <wf-button type="main"  size="small" icon="correct">click</wf-button>
    <div style="width:500px; display:flex;justify-content: space-between;">
      <wf-badge :value="1" type="success">
        <wf-Button size="small">Number类型</wf-Button>
      </wf-badge>
      <wf-badge :value="100" :max="99" type="warning">
        <wf-Button size="small">限制最大值</wf-Button>
      </wf-badge>
      <wf-badge is-dot>
        <wf-Button size="small" icon="look">小圆点</wf-Button>
      </wf-badge>
      <wf-badge value="hot" type="primary">
        <wf-Button size="small" >String类型</wf-Button>
      </wf-badge>   
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
