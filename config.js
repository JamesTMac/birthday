// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最可爱的小羊",
		"今天是我们认识的第十三天",
		"（感谢灵魂app）",
		"（也感谢一中）",// 同上...
		"（哈哈）",
        "也是相识后你的第一个生日",
		"应该也是你第一次一个人过的生日",
        "即使在静默的日子里",
        "在独自一人上课的日子里",
        "也要过的有仪式感啊",
        "因为现在又多了一个惦记你的人",
		"今后每天都要像今天一样开心啊",
        "对了",
		"解封后给你送好吃的",
		"带你去看电影",
		"把画的饼通通实现！",
        "就说这么多吧",
		"后面真的没有啦",
		"我没骗你",
		"不过你可以把歌听完",
		"——你的阿边",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "预备，起",
        play: "music",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "青草蛋糕安排上！",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "只听歌有点无聊？往后看",
    }
};
