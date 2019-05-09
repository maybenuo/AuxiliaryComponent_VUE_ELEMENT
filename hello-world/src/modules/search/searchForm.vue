<template>
  <div class="search-form">
    <el-form :model="searchConfig" ref="templateBaseInfo" :inline="true" class="info-form" label-width="100px">
      <el-form-item
        class="form-li"
        v-for="(item, index) in formHeader"
        :key="index"
        :label="item.label"
        :prop='item.prop'>
        <el-select v-if="item.type === 'select'" v-model="searchConfig[item.prop]">
          <el-option
            v-for="(option, order) in item.options"
            :key="order"
            :label="option.label"
            :value="option.value">
          </el-option>
        </el-select>
        <el-input v-if="item.type === 'input'" v-model="searchConfig[item.prop]"></el-input>
        <p v-if="item.type === 'text'">{{ formData[item.prop] }}</p>        
        <el-radio-group v-if="item.type === 'radio'" v-model="formData[item.prop]">
          <el-radio v-for="option in item.options" :label="option.label" :key="option.value">{{ option.label }}</el-radio>
        </el-radio-group>        
        <el-date-picker
            v-if="item.type === 'dateTime'"
            v-model='searchConfig[item.prop]'
            type='daterange'
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
      <el-form-item class="form-btn">
        <el-button @click="search" type="primary">查询</el-button>
        <el-button @click="reset" >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: ['searchConfig', 'formHeader'],
  data () {
    return {

    }
  },
  methods: {
    reset() {
      this.$refs.templateBaseInfo.resetFields()
    },
    search() {
      this.$emit('search', this.searchConfig)
    }
  }
}
</script>

<style lang="scss">
  .search-form {
    text-align: left;
    width: 96%;
    margin: 0 auto;

    .form-li {

      .el-form-item-content {
        width: 170px;
      }
    }

    .form-btn {
      display: block !important;
      text-align: right;
    }
  }
</style>
