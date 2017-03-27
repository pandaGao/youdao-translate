# youdao-translate
有道翻译API for Node.js.    
Youdao translate open api for Node.js with Promise.

## Installation
require Node.js >= 4.8.1
```bash
npm install youdao-translate --save
```

## Usage
First, you need to apply your key and read the documentation from [here]('http://fanyi.youdao.com/openapi?path=data-mode')
``` javascript
const Youdao = require('youdao-translate')

Youdao.init({
  key: '626956391',
  keyfrom: 'pandaworkflow'
  // only: 'dict' or 'translate'
})

Youdao.query('panda').then((data) => {
  console.log(data)
})
```

## License

MIT
