//分类选中切换

var curNuma = 1;
$.each($('.djClassUl dd'),function (index,item){
    $(item).click(function(){
        if($(item).hasClass('cur')){
            return
        }
        $(item).addClass('cur');
        $('.djClassUl dd').eq(curNuma).removeClass('cur');
        curNuma = index;
    })
})

//json请求
function getAjax(state) {
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (json) {
             var result = '';
            var myJson = json;   //保存值
            var res;
            if (state == 'priceT') {
                res = json.sort(function (a, b) {
                    return b.price - a.price; //价格降序
                })
            } else if (state == 'priceB') {
                res = json.sort(function (a, b) {
                    return a.price - b.price;//价格升序
                })
            } else if (state == 'salesB') {
                for (var i = 0, len = json.length; i < len; i++) {
                    if (json[i].hasOwnProperty('message')) {
                        var arr = myJson.splice(i, 1);
                        myJson.unshift(arr[0])
                    }
                }
                res = myJson;
            } else if (state == 'salesT') {
                for (var i = 0, len = json.length; i < len; i++) {
                    if (!json[i].hasOwnProperty('message')) {
                        var arr = myJson.splice(i, 1);
                        myJson.unshift(arr[0])
                    }
                }
                res = myJson;
            } else {
                res = myJson;  //默认
            } 
            $.each(res, function (index, item) {
                result += `<li code="${item.code}">
                            ${item.message ? `<div class="i-mark"><span class="mark-txt">${item.message}</span></div>` : ''}
                            <a href="./goodList.html?code=${item.code}"  target="block" class="good-link">
                                <img src="${item.imgurl}" alt="">
                                <div class="good-info">
                                    <p>${item.title}</p>
                                    <span>￥${item.price}</span>
                                </div>
                            </a>
                        </li>`;
            })
            $('.good-listUl').html(result);
        }
    });
}
getAjax()