const Youdao = require('../index.js')

Youdao.init({
  key: '626956391',
  keyfrom: 'pandaworkflow'
})

Youdao.query('panda').then((data) => {
  console.log(data)
})
