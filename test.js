require('utilise')
const fs = require('fs')
    , t = require('tap')
    , spawn = require('child_process').spawnSync
    , resolve = require('path').resolve
    , base = './test-cases/dist/resources'

fs.existsSync(`${base}/index.js`) && fs.unlinkSync(`${base}/index.js`)
spawn('sh', ['-c', `./export ${base}`], { stdio: 'inherit' })

const resources = require(base)

t.same(keys(resources), [
    'component-function.css'
  , 'component-function'
  , 'component-object'
  , 'foo' 
  ]
, 'total resources'
)

t.same(resources['component-function.css'], {
    name: 'component-function.css'
  , body: ":host { display: 'flex' }"
  }
, 'css'
)

t.same(resources['foo'], {
    name: 'foo'
  , body: 'bar'
  }
, 'data')

t.same(resources['component-function'].name
, 'component-function'
, 'component-function: has name'
)

t.same(typeof resources['component-function'].body
, 'function'
, 'component-function: body is function'
)

t.same(resources['component-function'].headers
, { needs: '[css]' }
, 'component-function: set needs headers'
)

t.same(resources['component-object'].name
, 'component-object'
, 'component-object: has name'
)

t.same(typeof resources['component-object'].body
, 'function'
, 'component-object: body is function'
)

t.end()