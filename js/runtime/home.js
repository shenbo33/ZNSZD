/*
* 登陆人信息同步
*/
export default class Home {
  
  constructor(){
    this.initSetting().then(() => {
      return this.checkSession()
    }).then(() => {
      // 获取
    }).catch(()=>{
      return this.login()
    }).then((code) => {

    })
  }

  checkSession(){
    let p = new Promise((resolve, reject) => {
      wx.checkSession({
        success({ errMsg }) {
          // session_key 未过期，并且在本生命周期一直有效
          debugger
          resolve(errMsg)
        },
        fail() {
          debugger
          // session_key 已经失效，需要重新执行登录流程
          reject()
        }
      })
    })
    return p
  }

  login(){
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
        }
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