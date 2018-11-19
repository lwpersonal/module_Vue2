import './styles/index.scss'

import { get } from 'lodash'
import Say from '@/assets/scripts/common'

Say('app1')
const a = {
  b: 1
}
console.log('app' + a.b)
console.log('a.b.c', get(a.b.c))
