<template>
  <div class="inline-form">
    <!-- search form: 多字段输入的搜索模板 -->
    <div class="white-board com-block-layout height300">
      <search-form :searchConfig="searchConfig" :formHeader="searchHeader" @search="search"></search-form>
    </div>
    <hr class='spilt-line' />
    <!-- search line: 只带下拉菜单的搜索模板 -->
    <div class="white-board com-block-layout height200">
      <search-line :searchConfig="lineConfig" :selectOptions="lineOptions" @search="search"></search-line>
    </div>
    <hr class='spilt-line' />
  </div>
</template>

<script>
  import dataMixins from './dataMixins'
  import searchForm from '@/modules/search/searchForm.vue'
  import searchLine from '@/modules/search/searchLine.vue'
  export default {
    name: 'inlineForm',
    mixins: [dataMixins],
    data() {
      return {

      }
    },
    methods: {
      /* searchForm 操作函数 */
      search(searchParams) {
        console.log('searchParams:')
        console.log(searchParams)  
      }
    },
    components: { searchForm, searchLine }
  }
</script>

<style lang="scss">
  .inline-form {
    width: 100%;
    height: 100%;  
  }

</style>


