#怪物探索 - 適地性寵物養成遊戲APP

##遊戲啟發
2015九月時，在"Pokemon GO"概念影片的啟發下，我們決定以同時能夠適用於Android與iOS系統的適地性寵物養成遊戲作為乘載輔大深厚內容的容器，
透過GPS定位的方式探索整個輔大校園，可以一邊了解輔大的故事與文化，同時也可以抓取可愛且具特色的寵物，藉由養成寵物的方式可增加與他人交流的機會。


##遊戲故事
遊戲故事是建構在輔大的三大組織，聖言會、耶穌會及中國聖職上，三大組織分別對應到勇氣、希望、自由三大陣營，勇氣陣營擁有火之力的傳承，
希望陣營則發展出了木之力，自由陣營一直都是水之力的代表，而輔大地區也設定成古代的文明遺跡--奧斯蘭，這裡擁有大量充滿力量的納特斯礦石，
孕育出了這裡獨特的生命，稱之為怪物精靈。

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/御三家.png "御三家")

幾百年來，祖先們在這塊土地上建立了文明，與精靈們共存共榮並堅持著善與愛的信仰，世世代代的傳承下去，但是過多的力量卻招致這裡的毀滅，
貪心的人們不斷地尋找著納特斯礦脈，不計一切代價挖取純度高的礦石，終於在城邦的中心發現了納特斯礦石的核心，正當欣喜若狂的愚人們準備大量開採時，
納特斯核心卻因為過分的動搖而開始爆走，城邦中心出現了大量可怕又強大的怪物，從此這裡變為一片廢墟，只剩一片荒蕪與空虛，
三大陣營對此都各自展開了研究，而玩家便是扮演冒險者的腳色，投身自己所喜好的陣營盡情的探索輔大地區與精靈怪物們一起生活，
一同歡笑、一同成長，寫下屬於自己的故事。

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/校園地圖.png "校園地圖")


##遊戲概念影片

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/CL-RnqUOTXY/0.jpg)](http://www.youtube.com/watch?v=CL-RnqUOTXY)

##遊戲主介面
遊戲主介面為地圖的形式，地圖下方有個探索鍵
>Floating Action Button為參照Google Material design所設計的

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/主畫面.gif "遊戲主介面")


##探索
點擊探索鍵後，會先抓取使用者的所在位置，並在周圍出現怪物點
不同顏色的怪物點代表不同的稀有度

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/探索.gif "探索")


##戰鬥介面
規則採用一對一的回合制戰鬥

技能發動需使用MP，每回合會獲得兩個MP

有逃走鍵可以使用
>寵物圖均為原創設計
>按鈕為參照Google Material design所設計的

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/戰鬥.gif "戰鬥介面")



##單人世界的道館
在單人模式下的道館內容為校園介紹及遊戲的tips，

走訪完所有的道館即可進入多人模式

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/單人.gif "單人世界的道館")

在特定道館會有360度VR全景圖可以體驗

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/VR.gif "VR")

##多人世界的道館
在多人模式下的道館可以對道館館主進行戰鬥，

透過貢獻不同數量的輔大三寶來決定關卡的難易度。

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/多人.png "多人世界的道館")

##寵物中心
在寵物中心可以將玩家背包裡的寵物回滿血

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/寶貝中心.gif "寵物中心")

##寵物背包

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/背包.png "寵物背包")

##強化頁面
使用經驗石可以強化寵物

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/強化.gif "強化")

##商店
購買道具的地方

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/商店.png "商店")


##完整DEMO影片

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/An_2t2BB9z8/0.jpg)](http://www.youtube.com/watch?v=An_2t2BB9z8)



##遊戲架構

資料庫同時採用SQL和NoSQL

地圖採用能高度客製化的Mapbox


![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/架構圖.png "架構圖")


##安裝教學

1. `git clone https://github.com/KevinHu2014/RN-IceSpeed.git`
2. `npm install ` or `yarn add`
3. `react-native run-android`


##未完成的部份

+ 新增新手教學
+ 新增任務系統
+ 多人共鬥機制
+ 更新招式特效
+ iOS版的遊戲





