import './js/libs/symbol.js'
import './js/libs/weapp-adapter.js'

import Welcome from './js/runtime/welcome'
import Progress from './js/runtime/progress'
import Home from './js/runtime/home'
import Main from './js/main'


// const canvas = window.canvas = wx.createCanvas()
const context = canvas.getContext('2d')

function runWelcome() {
  let prms = new Promise((resolve,reject)=>{
    new Welcome(context)
    resolve("");
  })
  return prms
}

function runProgress() {
  let prms = new Promise((resolve, reject) => {
    new Progress(context)
    resolve("");
  })
  return prms
}



runWelcome()
.then((data) => {
  console.log(data)
  return runProgress()
})
.then((data)=>{
  console.log(data)
  wx.onTouchStart(()=>{
    new Home()
  });
});




