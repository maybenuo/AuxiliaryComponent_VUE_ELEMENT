<template>
  <div class="search-line">
    <el-select v-model="searchConfig.searchType" class="width136" size="medium">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      />
    </el-select>
    <el-input v-model="searchConfig.searchWord" class="input-word" size="medium"/>
    <el-button type="primary" size="medium" @click="search">检索</el-button>
  </div>
</template>

<script>
export default {
  name: 'searchLine',
  props: ['searchConfig', 'selectOptions'],
  methods: {
    search() {
      this.$emit('search', this.searchConfig)
    }
  }
};
</script>

<style lang="scss">
  .search-line {
    position: relative;
    text-align: right;
    
    .input-word {
      width: 230px;
      margin: 0 10px;
    }
  }
</style>


