// 获取按钮和电影简介元素
const introBtn = document.getElementById('intro-btn');
const movieIntro = document.getElementById('movie-intro');

// 按钮点击事件
introBtn.addEventListener('click', function() {
    // 改变电影简介的透明度，使其浮现出来
    movieIntro.style.opacity = 1;
});
