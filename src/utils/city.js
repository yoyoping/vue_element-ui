export default [
  {
    id: '1',
    name: '北京',
    municipality: true,
    children: [
      {
        id: '1-1',
        name: '东城区'
      },
      {
        id: '1-2',
        name: '西城区'
      }
    ]
  },
  {
    id: '2',
    name: '上海',
    municipality: true,
    children: [
      {
        id: '2-1',
        name: '黄埔区'
      },
      {
        id: '2-2',
        name: '徐汇区'
      }
    ]
  },
  {
    id: '3',
    name: '四川',
    children: [
      {
        id: '3-1',
        name: '成都',
        children: [
          {
            id: '3-1-1',
            name: '锦江区'
          },
          {
            id: '3-1-2',
            name: '天府新区'
          }
        ]
      },
      {
        id: '3-2',
        name: '广安',
        children: [
          {
            id: '3-2-1',
            name: '广安区'
          },
          {
            id: '3-2-2',
            name: '武胜'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: '云南省',
    children: [
      {
        id: '4-1',
        name: '昆明市',
        children: [
          {
            id: '4-1-1',
            name: '五华区'
          },
          {
            id: '4-1-2',
            name: '盘龙区'
          }
        ]
      },
      {
        id: '4-2',
        name: '丽江市',
        children: [
          {
            id: '4-2-1',
            name: '古城区'
          },
          {
            id: '4-2-2',
            name: '永胜县'
          }
        ]
      }
    ]
  }
]
