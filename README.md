# wf-ui

### 参考链接
https://juejin.cn/post/7105696184375164935

### 快速开始

#### 1、安装
```bash
npm i wufeng-ui
```

#### 2、引用组件库
```javaScript
// 按需引入方式
import 'wufeng-ui/dist/css/button.css'
import { Button } from 'wufeng-ui'
Vue.use(Button)

// 全量导入方式 (npm包方式 | script标签方式配合externals)
import 'wufeng-ui/dist/css/index.css'
import wfui from 'wufeng-ui'
Vue.use(wfui)
```
