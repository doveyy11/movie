/* 基本样式 */
body {
    font-family: 'Oswald', sans-serif;
    background: url('haibao.png') no-repeat center center fixed;
    background-size: cover;
}

/* 导航栏样式 */
.sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #ff69b4;
    padding-top: 50px;
    text-align: center;
    box-shadow: 2px 0 5px rgba(0,0,0,0.3);
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar li {
    margin: 20px 0;
}

.sidebar a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
}

.sidebar a:hover {
    color: #fff;
    background-color: #ff1493;
    padding: 10px;
    border-radius: 5px;
}

/* 主内容区域 */
.content {
    margin-left: 220px;
    padding: 20px;
    color: #fff;
}

.title {
    opacity: 0;
    transition: opacity 2s ease-in-out;
}

#intro-btn {
    font-size: 18px;
    background-color: #ff69b4;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
}

/* 电影简介样式 */
#movie-intro {
    font-size: 16px; /* 比标题小 */
    font-family: 'Lora', serif;
    line-height: 1.5;
    opacity: 0;
    transition: opacity 2s ease-in-out;
}

/* 音乐播放器按钮 */
.play-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: url('play-button.png') no-repeat center center;
    background-size: contain;
    border: none;
    cursor: pointer;
}
