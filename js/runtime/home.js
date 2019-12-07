
const HOME_IMG_SRC = 'images/home.png'
/*
* 设置主页面板
*/
export default class Home {
  
  constructor(ctx){
    this.render(ctx)
  }

  render(ctx){
    Promise.all([this.renderBg(ctx)])
    .then(()=>{
      console.log("主页加载完成")
    }).catch(()=>{
      console.log("主页加载报错")
    })
  }

  renderBg(ctx) {
    let p = new Promise((resolve, reject)=>{
      this.bgimage = wx.createImage()
      this.bgimage.src = HOME_IMG_SRC
      this.bgimage.width = innerWidth
      this.bgimage.height = innerHeight
      this.bgimage.onload = () => {
        console.log(this.bgimage.width, this.bgimage.height)
        ctx.drawImage(this.bgimage, 0, 0, this.bgimage.width, this.bgimage.height)
      }
    })
    return p
  }

  renderMenu(ctx) {
    let p = new Promise((resolve, reject) => {
      this.bgimage = wx.createImage()
      this.bgimage.src = HOME_IMG_SRC
      this.bgimage.width = innerWidth
      this.bgimage.height = innerHeight
      this.bgimage.onload = () => {
        console.log(this.bgimage.width, this.bgimage.height)
        ctx.drawImage(this.bgimage, 0, 0, this.bgimage.width, this.bgimage.height)
      }
    })
    return p
  }

  renderInfo(ctx) {
    let p = new Promise((resolve, reject) => {
      this.bgimage = wx.createImage()
      this.bgimage.src = HOME_IMG_SRC
      this.bgimage.width = innerWidth
      this.bgimage.height = innerHeight
      this.bgimage.onload = () => {
        console.log(this.bgimage.width, this.bgimage.height)
        ctx.drawImage(this.bgimage, 0, 0, this.bgimage.width, this.bgimage.height)
      }
    })
    return p
  }


}