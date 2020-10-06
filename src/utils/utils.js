
// 防抖
export function debounce (func, delay) {
    let timer
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
  
  // 高亮关键词
  export function setHighlight (keyword, item, className) {
    let s = new Set()
    for (let k of keyword) {
      s.add(k)
    }
    s.forEach(function (value) {
      item = item.replace(value, function () {
        return `<em class="${className}">${value}</em>`
      })
    })
    return item
  }
  