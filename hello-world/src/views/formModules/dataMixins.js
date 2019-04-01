const dataMixins = {
  name: 'dataMixins',
  data() {
    return {
      /* searchForm 参数 */
      searchConfig: {
        caseNum: '',
        caseName: '',
        acceptanceUnit: '',
        caseUndertaker: '',
        caseSuspects: '',
        caseReporter: '',
        caseVictim: '',
        caseStatus: 1,
        acceptanceTime: ''
      },
      searchHeader: [
        {
          label: '案件编号',
          prop: 'caseNum',
          type: 'input'
        },
        {
          label: '案件名称',
          prop: 'caseName',
          type: 'input'
        },
        {
          label: '受理单位',
          prop: 'acceptanceUnit',
          type: 'input'
        },
        {
          label: '承办人',
          prop: 'caseUndertaker',
          type: 'input'
        },
        {
          label: '嫌疑人',
          prop: 'caseSuspects',
          type: 'input'
        },
        {
          label: '报案人',
          prop: 'caseReporter',
          type: 'input'
        },
        {
          label: '受害人',
          prop: 'caseVictim',
          type: 'input'
        },
        {
          label: '案件状态',
          prop: 'caseStatus',
          type: 'select',
          options: [
            {
              label: '受理',
              value: 1
            },
            {
              label: '拒绝',
              value: 2
            }
          ]
        },
        {
          label: '受理时间',
          prop: 'acceptanceTime',
          type: 'dateTime'
        }
      ],
      /*  search line data */
      lineConfig: {
        searchType: '',
        searchWord: ''
      },
      lineOptions: [
        {
          value: '1',
          label: '姓名'
        },
        {
          value: '2',
          label: '身份证号码'
        }
      ]
    }
  },
  methods: {

  }
}

export default dataMixins


