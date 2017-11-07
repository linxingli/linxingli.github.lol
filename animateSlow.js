/**
 * Created by Administrator on 2017/9/2.
 */
/**
 * ��������
 * @param obj ��Ҫ�˶���Ч����Ԫ��
 * @param attrs ��Ԫ����Ҫ����Ч�����ֵ����ԣ�json��ʽ
 * @param fn �ص��������ڸö���Ч��ִ����Ϻ�ִ�еĺ���
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