
/*
* 登陆人信息同步
*/
export default class Userinfo {
  
  constructor(){
    let p = new Promise((resolve, reject) => {
      this.initSetting().then(() => {
        return this.checkSession()
      }).then(() => {
        console.log("获取storage中的WX_CODE ::", wx.getStorage({
          key: 'WX_CODE',
          success: (res) => {
            resolve(res)
          },
          fail:() => {
            reject(arguments)
          }
        }))
      }).catch(()=>{
        this.login().then((code) => {
          wx.setStorage({
            key: "WX_CODE",
            data: code
          })
          console.log("向storage中加入WX_CODE::", code)
          resolve(code)
        })
      })
    })
    return p
  }

  checkSession(){
    let p = new Promise((resolve, reject) => {
      wx.checkSession({
        success({ errMsg }) {
          console.log("session_key 未过期，并且在本生命周期一直有效")
          resolve(errMsg)
        },
        fail() {
          console.log("session_key 已经失效，需要重新执行登录流程")
          reject()
        }
      })
    })
    return p
  }

  login(){
    console.log("执行登陆操作")
    let p = new Promise((resolve, reject) => {
      wx.login({
        success: ({ code, errMsg }) => {
          if (code) {

            console.log("登陆成功,获取到code:: ", code)
            resolve(code)
          }
        }
      })
    })
    return p
  }

  initSetting(){
    let p = new Promise((resolve, reject) => {
      this.setSetting()
        .then((authSetting) => {
          return this.setUserInfo(authSetting)
        })
        .then((authSetting) => {
          return this.setUserInfo(authSetting)
        })
        .then((authSetting) => {
          return this.setUserInfo(authSetting)
        })
        .then(() => {
          this.loadWxUserInfo()
          resolve()
        })
    })
    return p
  }
  
  setSetting(){
    let p = new Promise((resolve, reject) => {
      wx.getSetting({
        success(res) {
          console.log(res.authSetting)
          console.log('call resolve()...')
          resolve(res.authSetting)
        },
        fail(){
          console.error("启动游戏失败，请检查网络。");
          reject();
        },
      })
    })
    return p
  }

  setUserInfo(authSetting){
    let p = new Promise((resolve, reject) => {
      if (!authSetting['scope.userInfo']) {
        wx.authorize({
          scope: 'scope.userInfo',
          success() {
            console.log('scope.userInfo 通过 ...')
            resolve(authSetting)
          }
        })
      }else{
        resolve(authSetting)
      }
    })
    return p
  }

  setUserLocation(authSetting) {
    let p = new Promise((resolve, reject) => {
      if (!authSetting['scope.userLocation']) {
        wx.authorize({
          scope: 'scope.userLocation',
          success() {
            console.log('scope.userLocation 通过 ...')
            resolve(authSetting)
          }
        })
      } else {
        resolve(authSetting)
      }
    })
    return p
  }

  setWritePhotosAlbum(authSetting) {
    let p = new Promise((resolve, reject) => {
      if (!authSetting['scope.writePhotosAlbum']) {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            console.log('scope.writePhotosAlbum 通过 ...')
            resolve(authSetting)
          }
        })
      } else {
        resolve(authSetting)
      }
    })
    return p
  }
  
  loadWxUserInfo(){
    wx.getUserInfo({
      withCredentials:true,
      lang: 'en',

      success: (res)=> {
        wx.setStorage({
          key: "WX_USERINFO",
          data: res
        })
        console.log("向storage中加入用户信息::", res)
      },
      fail: ()=>{

      },
      complete:()=>{

      }
    })
  }


}