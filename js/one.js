(function () {
    //机器人帮助按钮
    document.getElementById('robot').addEventListener('click',showHelp);
    function showHelp(event) {
        event.stopPropagation();
        event.preventDefault();
        document.getElementById('modal').style.display = 'block';
        document.querySelector('.mask').className = 'mask';
        document.querySelector('.modal').className = 'modal bottom1217 fade-in';

    }
    //取消帮助
    document.querySelector('.cancel-btn1217').addEventListener('click',function () {
        event.stopPropagation();
        event.preventDefault();

        document.querySelector('.mask').className = 'mask out-mask';
        document.querySelector('.modal').className = 'modal fade-out';
    });

    setInterval(function () {
        document.querySelector('.mask').className = 'mask out-mask';
        document.querySelector('.modal').className = 'modal fade-out';
    },1000)

})();