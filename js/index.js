/* $(function () {
    var $this = $(".top-notice");
    var scrollTimer;
    $this.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 2000);
    }).trigger("mouseleave");

    function scrollNews(obj) {
        var $self = obj.find("ul");
        var lineHeight = $self.find("li:first").height();
        $self.animate({
            "marginTop": -lineHeight + "px"
        }, 500, function () {
            $self.css({
                marginTop: 0
            }).find("li:first").appendTo($self);
        })
    }
}) */


// 子菜单
$(document).ready(function(){
    $(".lkq-all").mouseout(function(){
      $(".lkq-Submenu").hide();
    });
    $(".lkq-all").mouseover(function(){
      $(".lkq-Submenu").show();
    });
  });

// 轮播图

