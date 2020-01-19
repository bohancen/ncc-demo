# ncc 打包

## 打包node_modules

  ncc build src_modules.js -m -o build_server_modules/server-modules

## 选项

  -o, --out [file]         Output directory for build (defaults to dist)
  -m, --minify             Minify output
  -C, --no-cache           Skip build cache population
  -s, --source-map         Generate source map
  --no-source-map-register Skip source-map-register source map support
  -e, --external [mod]     Skip bundling 'mod'. Can be used many times
  -q, --quiet              Disable build summaries / non-error outputs
  -w, --watch              Start a watched build
  --v8-cache               Emit a build using the v8 compile cache

## 引入

  通过设置 NODE_PATH=./build_server_modules 做到正常引入模块
  例如 const {express,haha} = require('server-modules')
