let but = document.getElementById('button');    //按钮
let div = document.getElementsByTagName('div'); //[0]:进度条
let span = document.getElementsByTagName('span');   //[1]:百分比
let timer = null;   //定时器

but.onclick = function(){
    let num = 0;
    if(timer==null){    //判断是否为空，防止同时触发多个定时器
        timer = setInterval(()=>{   //定时器
            num +=1;    
            span[0].innerText = Math.ceil(num/400*100); //计算百分比，截取为整数后赋值
            div[1].style.width = num+'px';      //修改进度条的CSS参数，注意要加上最后的'px'
            if(num==400){
                clearInterval(timer);       //防止越界
            }
        }, 10);     //这个参数是间隔时间
    }
}