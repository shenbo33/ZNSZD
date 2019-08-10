const PROGRESS_WIDTH=100;

export default class Progress {
  constructor( ctx, RSR ){
    console.log("初始化Progress...");
    this.width = PROGRESS_WIDTH
    this.height=50
    this.y=200
    this.x=400
    this.color = "green"

    this.excute(ctx, RSR)
  }

  excute(ctx, RSR){
    let loaded = 0
    const RSRlen = Object.keys(RSR).length
    for (let vkey in RSR){
      let bgimage = new Image()
      bgimage.src = RSR[vkey]
      bgimage.onload = () => {

        console.log("图片加载成功，URL::", RSR[vkey])
        loaded++
        clear(ctx)
        update(loaded/RSRlen)
        render(ctx)

      }
    }
  }

  update(scale = 0){
    this.scale = scale
    console.log("设置Progress百分比属性为", this.scale);
    this.width = PROGRESS_WIDTH * this.scale
  }

  render(ctx){
    console.log("渲染Progress百分比属性为", this.scale);
    ctx.fillStyle = this.color
    ctx.fillRect( this.x, this.y, this.x + this.width, this.y + this.height );
  }

  clear(ctx) {
    ctx.clearRect( this.x, this.y, this.x + this.width, this.y + this.height )
  }

}