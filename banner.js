let banner1x
let banner2x
let bannerObj
let bannerImg
function preloadBanner(){ 
    bannerImg=loadImage("texture9.jpg")
}
function bannerstart(bannerSize){
banner1x=0
bannerObj=createGraphics(bannerSize,100)
banner2x=bannerObj.width
}
function loadbanner(){
    if (banner1x>-bannerObj.width){
        banner1x-=0.5
        
    }
    else{
        banner1x=0
    }
    banner2x=banner1x+bannerObj.width
    bannerObj.image(bannerImg,banner1x,0,bannerObj.width,100)
    bannerObj.image(bannerImg,banner2x,0,bannerObj.width,100)
}
