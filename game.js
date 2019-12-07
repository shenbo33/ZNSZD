import './js/libs/symbol.js'
import './js/libs/weapp-adapter.js'

import Welcome from './js/runtime/welcome'
import Progress from './js/runtime/progress'
import Userinfo from './js/runtime/userinfo'
import Home from './js/runtime/home'
import Main from './js/main'


// const canvas = window.canvas = wx.createCanvas()
const context = canvas.getContext('2d')


function runProgress() {
  let prms = new Promise((resolve, reject) => {
    
    resolve();
  })
  return prms
}

new Welcome(context)
.then((data) => {
  return new Progress(context)
})
.then((data)=>{
  wx.onTouchStart(()=>{
    new Userinfo()
    .then((res) => { 
      console.log("获取用户数据::",res)
      new Home(context)
    })
    .catch(()=>{
      console.log("获取用户数据失败", arguments)
    })
  });
});




