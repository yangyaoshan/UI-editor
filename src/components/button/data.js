let list = [
  {
    type: 'primary',
    plain: false,
    round: false,
    circle: false,
    icon: '',
    text: '默认按钮'
  },
  {
    type: 'primary',
    plain: true,
    round: false,
    circle: false,
    icon: '',
    text: '朴素按钮'
  },
  {
    type: 'primary',
    plain: false,
    round: true,
    circle: false,
    icon: 'el-icon-search',
    text: '圆角按钮'
  },
  {
    type: 'primary',
    plain: false,
    round: false,
    circle: true,
    icon: 'el-icon-search',
    text: ''
  },
  {
    type: 'primary',
    plain: false,
    round: false,
    circle: false,
    icon: 'el-icon-edit',
    text: ''
  },
  {
    type: 'text',
    plain: false,
    round: false,
    circle: false,
    icon: '',
    text: '文字按钮'
  },
  {
    type: 'group',
    children: [
      {
        type: 'primary',
        plain: false,
        round: false,
        circle: false,
        icon: 'el-icon-arrow-left',
        text: '上一页'
      },
      {
        type: 'primary',
        plain: false,
        round: false,
        circle: false,
        icon: 'el-icon-arrow-right el-icon--right',
        text: '下一页'
      }
    ]
  }
]
export {
  list
}
