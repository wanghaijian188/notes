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
      { text: 'uni-app', link: '/uniapp/' },
      { text: '微信小程序', link: '/wx/' },
      { text: 'php', link: '/php/' },
      { text: '其他', link: '/other/' },
    ],
    sidebar: {
      '/vue/': getVueSidebar(),
      '/js/': getJsSidebar(),
      '/css/': getCssSidebar(),
      '/uniapp/': getuniappSidebar(),
      '/wx/': getwxSidebar(),
      '/php/': getphpSidebar(),
      '/other/': getotherSidebar(),
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

function getuniappSidebar() {
  return [
    {
      text: 'javaScript',
      children: [
        { text: '开始', link: '/js/' },
      ]
    }
  ]
}

function getwxSidebar() {
  return [
    {
      text: 'javaScript',
      children: [
        { text: '开始', link: '/js/' },
      ]
    }
  ]
}

function getphpSidebar() {
  return [
    {
      text: 'javaScript',
      children: [
        { text: '开始', link: '/js/' },
      ]
    }
  ]
}

function getotherSidebar() {
  return [
    {
      text: 'javaScript',
      children: [
        { text: '开始', link: '/js/' },
      ]
    }
  ]
}