const PROGRESS_WIDTH = innerWidth;
const PROGRESS_TOTAL = 10

export default class Progress {
  constructor(ctx ){
    console.log("初始化Progress...");
    this.width = 0
    this.height = 5
    
    this.x = 0
    this.y = innerHeight - this.height
    this.color = "pink"

    this.loading(ctx, 0)
  }

  loading(ctx, loaded){

    loaded ++
    setTimeout(() => {

      console.log("图片加载成功，URL::", loaded)
      this.update(loaded / PROGRESS_TOTAL)
      this.clear(ctx)
      this.render(ctx)

      if (loaded < PROGRESS_TOTAL){
        this.loading(ctx, loaded)
      }
    }, 100)
  }

  update(scale = 0){
    this.scale = scale
    console.log("设置Progress百分比属性为", this.scale);
    this.width = PROGRESS_WIDTH * this.scale
  }

  render(ctx){
    console.log("渲染Progress百分比属性为", this.scale);
    ctx.fillStyle = this.color
    ctx.fillRect( this.x, this.y, this.width, this.height );
  }

  clear(ctx) {
    ctx.clearRect( this.x, this.y, this.width, this.height )
  }

}