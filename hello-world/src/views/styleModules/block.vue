<template>
  <div class="block-style">
    <!-- 白板样式 -->
    <white-board></white-board> 
  </div>
</template>

<script>
import whiteBoard from '@/modules/blockCSS/whiteBoard.vue'
export default {
  name: 'blockStyle',
  data() {
    return {}
  },
  components: { whiteBoard }
}
</script>

<style lang="scss">
  .block-style {
    width: 90%;
    height: 300px;
    text-align: left;
  }

</style>

