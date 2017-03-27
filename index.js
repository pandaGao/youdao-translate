const http = require('http')
const url = require('url')

class Youdao {
  constructor () {
    this.key = ''
    this.keyfrom = ''
    this.only = ''
  }

  init (config) {
    this.key = config.key || ''
    this.keyfrom = config.keyfrom || ''
    this.only = config.only || ''
  }

  query (keyword) {
    return new Promise((resolve, reject) => {
      let queryObj = {
        keyfrom: this.keyfrom,
        key: this.key,
        type: 'data',
        doctype: 'json',
        version: '1.1',
        q: keyword
      }
      if (this.only) {
        queryObj.only = this.only
      }
      let targetURL = url.format({
        protocol: 'http:',
        slashes: true,
        hostname: 'fanyi.youdao.com',
        pathname: 'openapi.do',
        query: queryObj
      })
      http.get(targetURL, (res) => {
        const statusCode = res.statusCode
        if (statusCode !== 200) {
          reject(new Error(`Request Failed. Status Code: ${statusCode}`))
        }
        res.setEncoding('utf8')
        let rawData = ''
        res.on('error', (e) => reject(e))
        res.on('data', (chunk) => rawData += chunk)
        res.on('end', () => {
          try {
            let jsonData = JSON.parse(rawData)
            resolve(jsonData)
          } catch (e) {
            reject(e)
          }
        })
      }).on('error', (e) => {
        reject(e)
      })
    })
  }
}

module.exports = new Youdao()
