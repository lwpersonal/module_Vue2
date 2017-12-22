/*
 * @Author: AI
 * @Date: 2017-10-11 21:02:55
 * @Last Modified by: AI
 * @Last Modified time: 2017-10-20 15:11:37
 * @describe 布局适配方案
 */
(function flexible (window: any, document: any) {
  const docEl: any = document.documentElement
  const dpr: number = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    // let scrollWidth = window.screen.availWidth

    // if(scrollWidth > 700){
    //   return
    // }
    const rem: number = docEl.clientWidth / 10

    docEl.style.fontSize = rem + 'px'
  }

  function init () {
    // 初始化，最大适应700px
    // let scrollWidth = window.screen.availWidth
    let rem: number

    // if(scrollWidth > 700){
    //   rem = 70
    // } else {
    rem = docEl.clientWidth / 10
    // }

    docEl.style.fontSize = rem + 'px'
  }

  init()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody: any = document.createElement('body')
    const testElement: any = document.createElement('div')

    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
