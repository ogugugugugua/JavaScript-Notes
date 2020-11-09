let xml = new XMLHttpRequest();
xml.open('get','./nav.json', true);
xml.send();
xml.onreadystatechange = function(){
    // console.log(xml.status);//服务器状态
    // console.log(xml.readyState);//ajax状态
    if(xml.readyState==4 && xml.status==200){
        let data = JSON.parse(xml.responseText).data;
        // console.log(data);
        let li1 = '';
        data.forEach(first => {
            // console.log(first);
            
            let li2 = '';
            first.content.forEach((second)=>{
                // console.log(second);

                let li3 = '';
                second.content.forEach((third)=>{
                    // console.log(third);
                    li3 += '<li class="li3"><a href="##">'+third+'</a></li>';

                });

                li2 += '<li class="li2">'+
                            '<a href="##">'+second.title+'</a>'+
                            '<ul class="ul3">'+
                                li3 +
                            '</ul>'+
                        '</li>';
            });

            li1 += '<li class="li1">'+
                        '<a href="##">'+first.title+'</a>'+
                        '<ul class="ul2">'+
                            li2 +
                        '</ul>'+
                    '</li>';
        });

        document.getElementById('ul1').innerHTML = li1;

        //鼠标移入li1时显示ul2
        //鼠标移入li2时显示ul3
        let l1 = document.getElementsByClassName('li1');
        let u2 = document.getElementsByClassName('ul2');
        let l2 = document.getElementsByClassName('li2');
        let u3 = document.getElementsByClassName('ul3');

        showAndHide(l1,u2); //二级菜单显示或隐藏
        showAndHide(l2,u3); //三级菜单显示或隐藏
    }
}

function showAndHide(li, ul){
    for(let i = 0; i<li.length; i++){
        li[i].index = i;
        li[i].onmouseover = function(){
            ul[this.index].style.display = 'block';
        }
        li[i].onmouseout = function(){
            ul[this.index].style.display = 'none';
        }
    }
}