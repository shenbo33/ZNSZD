



const BG_IMG_SRC = 'images/welcome.png'



/**
 * 欢迎页图片
 * 
 */
export default class Welcome {

  constructor(ctx) {
    let p = new Promise((resolve, reject) => {
      this.render(ctx)
      .then(() => {
        console.log("背景渲染成功..")
        resolve()
      })
    })
    return p
  }

  update(){
    
  }

  /**
   * 背景图重绘函数
   * 
   */
  render(ctx) {
    let p = new Promise((resolve, reject) => {
      this.bgimage = wx.createImage()
      this.bgimage.src = BG_IMG_SRC
      this.bgimage.width = innerWidth
      this.bgimage.height = innerHeight
      this.bgimage.onload = () => {
        console.log(this.bgimage.width, this.bgimage.height)
        ctx.drawImage(this.bgimage, 0, 0, this.bgimage.width, this.bgimage.height)
        resolve()
      }
    })
    return p
  }

  
}
