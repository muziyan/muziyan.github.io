import {dirname, resolve as _resolve} from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const resolve = (dir) => _resolve(__dirname,dir)

const output = {
  path: resolve('dist')
}

const resolveConfig = {
  extensions: ['.js']
}

const rules = [
  {
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false, // disable the behaviour
    },
  }
]

// 1. default
// export default {
//   entry: resolve('./src/index.js'),
//   output
// }


// 2. object
// export default {
//   entry: {
//     mainApp: resolve('./src/index.js')
//   },
//   output
// }


// 3. multi-main entry
// export default {
//   entry: [
//     resolve('./src/index.js'),
//     resolve('./src/test.js')
//   ],
//   output: {
//     ...output,
//     filename: 'bundle.js'
//   }
// }


// 4. 多入口起点多输出文件
// export default {
//    entry: {
//     app: resolve('./src/index.js'),
//     adminApp: resolve('./src/main.js'),
//   },
//   output,
//   resolve: resolveConfig,
//   module: {
//     rules
//   }
// }
