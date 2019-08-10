import 'libs/weapp-adapter'
import 'libs/symbol'
import Welcome from './runtime/welcome'
import Progress from './runtime/progress'
import DataBus from './databus'

let ctx = canvas.getContext('2d')
let databus = new DataBus()


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



/**
 * 游戏主函数
 */
export default class Main {

  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    this.restart()
  }

  loading() {

    
    this.progress.update(1)
    this.progress.render(ctx)

    // let [rsrCount, rsrTotal] = [0, 10]
    // while (rsrCount < rsrTotal){
    //   rsrCount++
    //   setTimeout(() => {
    //     this.clear(ctx)
    //     this.progress.update(rsrCount / rsrTotal)
    //     this.progress.render(ctx)
    //   }, 1000)
    // }


    console.info("OK2")


  }


  restart() {
    databus.reset()
    canvas.removeEventListener('touchstart', this.touchHandler)

    this.bg = new Welcome(ctx)
    this.progress = new Progress(ctx)

    this.bindLoop = this.loop.bind(this)
    this.hasEventBind = false

    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }


  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.bg.render(ctx)
    this.loading(ctx)   
  }

  // 游戏逻辑更新主函数
  update() {
    
  }

  // 实现游戏帧循环
  loop() {
    databus.frame++
    // this.update()
    this.render()
    this.aniId = window.requestAnimationFrame(this.bindLoop, canvas)
  }
}
