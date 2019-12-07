const PROGRESS_WIDTH = innerWidth;
const PROGRESS_TOTAL = 10
const PROGRESS_TIME = 1000 * 0.3

export default class Progress {
  constructor(ctx) {

    console.log("初始化Progress...");
    this.width = 0
    this.height = 5
    
    this.x = 0
    this.y = innerHeight - this.height
    this.color = "pink"
  
    let p = new Promise((resolve, reject) => {
      this.loopLoading(ctx, 0)
      .then(()=>{
        resolve()
      })
    })
    return p
  }

  /**
   * 异步递归加载进度条
   */
  loopLoading(ctx, loaded){

    let _t = this
    return new Promise((resolve, reject) => {
      !function loopLoad(ctx, loaded){
        
        _t.loading(ctx, loaded)
        .then((loaded)=>{
          if (loaded < PROGRESS_TOTAL) {
            return Promise.reject(loaded)
          } else {
            return Promise.resolve(loaded)
          }
        }).then((loaded)=>{
          console.log("加载完成", loaded, PROGRESS_TOTAL);
          resolve()
        }).catch((loaded)=>{
          loopLoad(ctx, ++loaded)
        })
      }(ctx, loaded)
    })
  }

  loading(ctx, loaded){
    let p = new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log(" 加载中 ::", loaded)
        this.update(loaded / PROGRESS_TOTAL)
        this.clear(ctx)
        this.render(ctx)
        resolve(loaded)
      }, PROGRESS_TIME)
    })
    return p
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