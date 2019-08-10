
import Welcome from './js/runtime/welcome'
import Progress from './js/runtime/progress'

const BG_IMG_SRC = 'images/welcome.png'
const canvas = window.canvas = wx.createCanvas()
const context = canvas.getContext('2d')

const BG_WIDTH = window.innerWidth
const BG_HEIGHT = window.innerHeight


// 系统资源
const RSR = {
  "bg.jpg": "../images/bg.jpg",
  "enemy.png": "../images/enemy.png",
  "Common.png": "../images/Common.png",
  "bullet.png": "../images/bullet.png",
  "hero.png": "../images/hero.png",
  "explosion1.png": "../images/explosion1.png",
  "explosion2.png": "../images/explosion2.png",
  "explosion3.png": "../images/explosion3.png",
  "explosion4.png": "../images/explosion4.png",
  "explosion5.png": "../images/explosion5.png",
  "explosion6.png": "../images/explosion6.png",
  "explosion7.png": "../images/explosion7.png",
  "explosion8.png": "../images/explosion8.png",
  "explosion9.png": "../images/explosion9.png",
  "explosion10.png": "../images/explosion10.png",
  "explosion11.png": "../images/explosion11.png",
  "explosion12.png": "../images/explosion12.png",
  "explosion13.png": "../images/explosion13.png",
  "explosion14.png": "../images/explosion14.png",
  "explosion15.png": "../images/explosion15.png",
  "explosion16.png": "../images/explosion16.png",
  "explosion17.png": "../images/explosion17.png",
  "explosion18.png": "../images/explosion18.png",
  "explosion19.png": "../images/explosion19.png",
}

new Welcome(context)
new Progress(context, RSR)
// 游戏全局的入口文件
// import Main from './js/main'

// new Main()