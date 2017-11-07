/**
 * Created by Administrator on 2017/9/2.
 */
/**
 * 缓动动画
 * @param obj 需要此动画效果的元素
 * @param attrs 该元素需要动画效果出现的属性，json形式
 * @param fn 回调函数，在该动画效果执行完毕后执行的函数
 */
function animateSlow(obj,attrs,fn){
    clearInterval(obj.timerID);
    obj.timerID = setInterval(function () {
        var flag = true;
        for(var key in attrs){
            if(key == "opacity") {
                var currentLeft = getComputedStyle(obj, null)[key]*100;
                var step = (attrs[key]*100 - currentLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                currentLeft += step;
                obj.style[key] = currentLeft/100;
                if (currentLeft/100 != attrs[key]) {
                    flag = false;
                }
            }else if(key == "z-index"){
                obj.style[key] = attrs[key];
            }else{
                var currentLeft =parseInt(getComputedStyle(obj,null)[key]);
                var step = (attrs[key] - currentLeft)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);
                currentLeft += step;
                obj.style[key] = currentLeft + "px";
                if(currentLeft != attrs[key]){
                    flag = false;
                }
            }
        }
        if(flag){
            clearInterval(obj.timerID);
            fn();
        }
    },30)
}