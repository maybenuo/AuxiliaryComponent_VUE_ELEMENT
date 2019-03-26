<template>
  <div class="inline-form">
    <!-- search form -->
    <search-form :searchConfig="searchConfig" :formHeader="searchHeader" @search="search"></search-form>
  </div>
</template>

<script>
  import dataMixins from './dataMixins'
  import searchForm from '@/modules/searchForm/search.vue'
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
    components: { searchForm }
  }
</script>


