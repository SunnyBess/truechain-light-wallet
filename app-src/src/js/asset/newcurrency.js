//搜索功能
document.getElementById("search").addEventListener("keypress",function(event) {
    if(event.keyCode == "13") {
        document.activeElement.blur();//收起虚拟键盘
        toSearch();//TODO 完成搜索事件
        event.preventDefault(); // 阻止默认事件---阻止页面刷新
    }
});