module.exports = {
    lang: 'zh-CN',
    title: 'notes',
    description: '我的文档，学习笔记。',

    themeConfig: {
        smoothScroll: true,

        nav: [
            { text: 'Vue', link: '/vue/' },
            { text: 'JS', link: '/js/' },
            { text: 'CSS', link: '/css/' },
        ],
        sidebar: {
            '/vue/': getVueSidebar(),
            '/js/': getJsSidebar(),
            '/css/': getCssSidebar(),
        }
    }
}

function getVueSidebar() {
    return [
        {
            text: 'Vue',
            children: [
                { text: '开始', link: '/vue/' },
                { text: '组件', link: '/vue/component' }
            ]
        }
    ]
}

function getJsSidebar() {
    return [
        {
            text: 'javaScript',
            children: [
                { text: '开始', link: '/js/' },
            ]
        }
    ]
}

function getCssSidebar() {
   let list = ['animation', 'background', 'box', 'clip-path', 'counter', 'filter', 'flex', 'transition']

  let result = [{ text: '开始', link: '/css/' }]
  list.map((item) => {
    result.push({
      text: item,
      link: `/css/${item}`
    })
  })

  return [
    {
      text: 'CSS',
      children: result
    },
    {
      text: 'Utils',
      children: [
        { text: 'precss', link: '/css/precss' },
        { text: 'postcss', link: '/css/postcss' },
        { text: 'tailwind', link: '/css/tailwind' }
      ]
    }
  ]
}