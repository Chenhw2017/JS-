var buttonLeft=document.getElementsByClassName('arrow-left');
var buttonRight=document.getElementsByClassName('arrow-right');
var pictureSrc=["file:///D:/H5/workplace/JD/CarouselFifure/images/1.png","file:///D:/H5/workplace/JD/CarouselFifure/images/2.png","file:///D:/H5/workplace/JD/CarouselFifure/images/3.jpg","file:///D:/H5/workplace/JD/CarouselFifure/images/4.jpg","file:///D:/H5/workplace/JD/CarouselFifure/images/5.png","file:///D:/H5/workplace/JD/CarouselFifure/images/6.jpg","file:///D:/H5/workplace/JD/CarouselFifure/images/7.jpg"]
//初始化定时器返回值
var setIntervalLeft=0;
var setIntervalRight=0;
var setTimeoutLeft=0;
var setTimeoutRight=0;
//轮播图每隔2秒钟轮转一次
var setIntervalNumber1 = setInterval(changePicture,3000);
//将点击事件执行的匿名函数封装起来
function changePicture(){
(function(){
    var currentPicture=document.getElementsByClassName('picture-current-img');
    var prePicture=document.getElementsByClassName('picture-pre-img');
    var nextPicture=document.getElementsByClassName('picture-next-img');
    nextPicture[0].src=currentPicture[0].src;
    currentPicture[0].src=prePicture[0].src;
   
    for(var i=0;i<pictureSrc.length;i++){
        // console.log('test');
        // console.log(pictureSrc[i]);
        // console.log(nextPicture[0].src);
        // console.log('test2');
        if(pictureSrc[i]===prePicture[0].src){
            // if(i<1){
            //     prePicture[0].src=pictureSrc[i-6];
            //     break;
            // }
            if(i==0){
                prePicture[0].src=pictureSrc[pictureSrc.length-1]; 
                break;
            }
            var nextIndex=i;
            prePicture[0].src=pictureSrc[i-1];
            break;
        }
    }})();
};
//左按钮设置点击监听
buttonLeft[0].onclick=function(){
    clearInterval(setIntervalNumber1);//清除初始化定时器
    clearInterval(setIntervalLeft);//清除点击左按钮产生的定时器
    clearInterval(setIntervalRight);//清除点击右按钮产生的定时器
    clearTimeout(setTimeoutLeft);//清除左按钮产生的延时器
    clearTimeout(setTimeoutRight);//清除右按钮产生的延时器
    var currentPicture=document.getElementsByClassName('picture-current-img');
    var prePicture=document.getElementsByClassName('picture-pre-img');
    var nextPicture=document.getElementsByClassName('picture-next-img');
    prePicture[0].src=currentPicture[0].src;
    currentPicture[0].src=nextPicture[0].src;
    for(var i=0;i<pictureSrc.length;i++){
        // console.log('test');
        // console.log(pictureSrc[i]);
        // console.log(nextPicture[0].src);
        // console.log('test2');
        //定位nextPicture[0]的src属性在数组中的位置
        if(pictureSrc[i]===nextPicture[0].src){
            //当nextPicture[0]的src属性在数组末尾时，下一图片的位置在数组首位
            if(i>5){
                nextPicture[0].src=pictureSrc[i-6];
                break;
            }
            //将数组中nextPicture[0]的src属性值元素在数组中位置的下一位赋值给nextPicture[0]的src
            nextPicture[0].src=pictureSrc[i+1];
            break;
        }
    }
    //点击6秒后没有点击事件发生时延时器
    setTimeoutLeft=setTimeout(function(){setIntervalLeft=setInterval(changePicture,3000);},6000);
}
//右按钮设置点击监听
buttonRight[0].onclick=function(){
    clearInterval(setIntervalNumber1);//清除初始化定时器
    clearInterval(setIntervalLeft);//清除点击左按钮产生的定时器
    clearInterval(setIntervalRight);//清除右按钮产生的定时器
    clearTimeout(setTimeoutLeft);//清除左按钮产生的延时器
    clearTimeout(setTimeoutRight);//清除右按钮产生的延时器
    var currentPicture=document.getElementsByClassName('picture-current-img');
    var prePicture=document.getElementsByClassName('picture-pre-img');
    var nextPicture=document.getElementsByClassName('picture-next-img');
    nextPicture[0].src=currentPicture[0].src;
    currentPicture[0].src=prePicture[0].src;
   
    for(var i=0;i<pictureSrc.length;i++){
        // console.log('test');
        // console.log(pictureSrc[i]);
        // console.log(nextPicture[0].src);
        // console.log('test2');
        if(pictureSrc[i]===prePicture[0].src){
            // if(i<1){
            //     prePicture[0].src=pictureSrc[i-6];
            //     break;
            // }
            //当prePicture[0].src值在数组中首位时，向右滑动，数组中最后一位应赋值给prePicture[0].src
            if(i==0){
                console.log("test0");
                prePicture[0].src=pictureSrc[pictureSrc.length-1]; 
                break;
            }
            //若果不是首位，则只需将prePicture[0].src在数组中位置前一位的pictureSrc[i-1]赋值给prePicture[0].src即可
            prePicture[0].src=pictureSrc[i-1];
            break;
        }
    }
    //点击6秒后没有点击事件发生时延时器
    setTimeoutRight=setTimeout(function(){setIntervalRight=setInterval(changePicture,3000);},6000);
}