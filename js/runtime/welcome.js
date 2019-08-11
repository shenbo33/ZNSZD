



const BG_IMG_SRC = 'images/welcome.png'



/**
 * 欢迎页图片
 * 
 */
export default class Welcome {

  constructor(ctx) {
    this.render(ctx)
  }

  update(){
    
  }

  /**
   * 背景图重绘函数
   * 
   */
  render(ctx) {
    this.bgimage = wx.createImage()
    this.bgimage.src = BG_IMG_SRC
    this.bgimage.width = innerWidth
    this.bgimage.height = innerHeight
    this.bgimage.onload = () => {
      console.log(this.bgimage.width, this.bgimage.height)
      ctx.drawImage(this.bgimage, 0, 0, this.bgimage.width, this.bgimage.height)
    }
  }

  
}
