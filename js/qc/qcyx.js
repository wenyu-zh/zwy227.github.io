﻿require.config({
	paths:{
	 'echarts' : 'js/echarts/echarts-original',
	'echarts/chart/force' : 'js/echarts/echarts-original',
	'echarts/chart/chord' : 'js/echarts/echarts-original'
	 
	}
	});
	
	require(
	[
	'echarts',
	
	'echarts/chart/force',
	'echarts/chart/chord'
	
	],

	function(ec){
		var myChart = ec.init(document.getElementById('main4')); 
		option2 = {
     title : {
					text : "微博传播影响力图",
					subtext : "数据来自微博",
					x : "right",
					y : "bottom",
					padding : [ 10, 30 ],
					textStyle:{
					color:'#000000'
					}
				},
     tooltip : {
					trigger : "item",
					formatter : "{a0}:{b0}<br>情感值:{d}",
					borderRadius : 3,
					backgroundColor : "rgba(0,0,0,0.4)",
					padding : 4,
					axisPointer : {
						type : 'none',
						lineStyle : {
							color : '#4b8',
							width : 2,
							type : 'dashed'
						},
						crossStyle : {
							color : '#1e90ff',
							width : 5,
							type : 'dashed'
						},
						shadowStyle : {
							size : 'auto',
							color : 'rgba(150,150,150,0.3)'
						}
					}
				},animation:false,toolbox: {
        show : true,
        feature : {
           
            dataView : {show: true, readOnly: false},
          
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
  color : [ '#FF7F50','#CD5C5C',"#FFAAAA" , '#D2D2D2'],
    legend: {
        x: 'left',
        data:[{
						name : "一级重要节点",
						textStyle : {
							color : "#ff7f50"
						}
					},{
						name : "二级重要节点",
						textStyle : {
							color : "#CD5C5C"
						}
					},{
						name : "三级重要节点",
						textStyle : {
							color : "#FFAAAA"
						}
					},{
						name : "普通节点",
						textStyle : {
							color : "#D2D2D2"
						}
					}]
    },
    series : [
        {
            type:'force',
            name : "转发关系",
            ribbonType: false,
            categories : [
               {
						name : "一级重要节点",
						"symbolSize": 8
					},{
						name : "二级重要节点",
						"symbolSize": 6
					},
                 {

						name : "普通节点","symbolSize": 2

					},
                 {

						name : "三级重要节点","symbolSize": 4

					}
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.4)',
                        borderWidth : 1
                    },
                    linkStyle: {
                        type: 'curve'

                    }
                },
                emphasis: {
                    label: {
                        show: false
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle : {
                        //r: 30
                    },
                    linkStyle : {}
                }
            },
            useWorker: false,
            minRadius : 15,
            maxRadius : 25,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes:[{"name":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","value": "Neutral","category":0},
{"name":"<1> 谢璐银: 该来的始终会来 ","value": "Positive","category":2},
{"name":"<2> DarkLucifer冥羽: 转发微博 ","value": "Neutral","category":2},
{"name":"<3> 会长牙的: 转发微博 ","value": "Neutral","category":2},
{"name":"<4> 如山泰然_FOCUS: 谷歌今夏测试全自动驾驶汽车 ","value": "Neutral","category":2},
{"name":"<5> 苏浩brother: [色] ","value": "Positive","category":2},
{"name":"<6> 满格儿: 好喜欢[鼓掌] ","value": "Positive","category":2},
{"name":"<7> 衬女人: ","value": "Neutral","category":2},
{"name":"<8> 与非一言堂: 最高速度四十公里每小时，离实用还有比较大的距离。好奇过去路试发生的十一起事故中，非被其他车从后面撞击的四起是如何发生的，怎么判断是其他车的责任？ ","value": "Negative","category":2},
{"name":"<9> 梵雯香水: ","value": "Neutral","category":2},
{"name":"<10> 小猎手-lion: 转发微博 ","value": "Neutral","category":2},
{"name":"<11> 小石湖边的老邻居: 这车也可以 ","value": "Positive","category":2},
{"name":"<12> 回不去的曾经19860913: 转发微博 ","value": "Neutral","category":2},
{"name":"<13> 来不及错过: 转发微博 ","value": "Neutral","category":2},
{"name":"<14> 寒沙-冷血: 转发微博 ","value": "Neutral","category":2},
{"name":"<15> 九月鲜严俊:  ","value": "Neutral","category":2},
{"name":"<16> 文人二麻: 出租行业的未来 ","value": "Positive","category":2},
{"name":"<17> 丨缘分de天空丨: 转发微博 ","value": "Neutral","category":2},
{"name":"<18> 圆圆堆圆圆的雪人: @谢雅而 ","value": "Neutral","category":2},
{"name":"<19> 熙湮不念: 转发微博 ","value": "Neutral","category":2},
{"name":"<20> 包谷此生爱玉米: 我擦，这技术……时代的步伐太快了 ","value": "Positive","category":2},
{"name":"<21> gztbhjg: 转发微博 ","value": "Neutral","category":2},
{"name":"<22> GoingForward: 转发微博 ","value": "Neutral","category":2},
{"name":"<23> 美人她爹: 以谷歌做事的不靠谱程度，跪求这种车的行驶地区，我绕着走还不行吗 ","value": "Negative","category":1},
{"name":"<24> hktraveller: ","value": "Neutral","category":2},
{"name":"<25> 湖光山色有木有: 转发微博 ","value": "Neutral","category":2},
{"name":"<26> 沈博阳: 未来终于来了[good] ","value": "Positive","category":1},
{"name":"<27> 董潇: 转发微博 ","value": "Neutral","category":2},
{"name":"<28> 徐奕林: [好棒] ","value": "Positive","category":2},
{"name":"<29> 奶黄包R: 赶快赶快[哈哈][哈哈][哈哈] ","value": "Positive","category":2},
{"name":"<30> TaylorNieh: [doge] ","value": "Neutral","category":2},
{"name":"<31> 我若成风0: 加油。 ","value": "Positive","category":2},
{"name":"<32> laolu: 转发微博 ","value": "Neutral","category":1},
{"name":"<33> IT168重庆站: 转发微博 ","value": "Neutral","category":2},
{"name":"<34> 雪雪_雪兒snow: 好萌好酷好期待！ ","value": "Positive","category":2},
{"name":"<35> 黑眼圈陈阿婆: 萌啊 ","value": "Positive","category":2},
{"name":"<36> 小乖的橙子: 真Q！ ","value": "Positive","category":2},
{"name":"<37> 小小小釆购_叶: 转发微博 ","value": "Neutral","category":2},
{"name":"<38> 正龙_龙战士DragonWarriors: 转发微博 ","value": "Neutral","category":2},
{"name":"<39> 最爱米拉米: 转发微博 ","value": "Neutral","category":2},
{"name":"<40> yy07086688: 转发微博 ","value": "Neutral","category":2},
{"name":"<41> x烧白: 和自动倒车入库一样，都是令人感动的发明 ","value": "Positive","category":2},
{"name":"<42> sunslive: [给力] ","value": "Positive","category":2},
{"name":"<43> yangdigital: 转发微博 ","value": "Neutral","category":2},
{"name":"<44> 一直在想起个什么名结果想了半天: 这车还真像小白鼠 ","value": "Negative","category":2},
{"name":"<45> 兔子奶奶熊的娘长颈鹿的爱:  ","value": "Neutral","category":2},
{"name":"<46> 正墓室1: 转发微博 ","value": "Neutral","category":2},
{"name":"<47> 保英: 转发微博 ","value": "Neutral","category":2},
{"name":"<48> journey张: Repost ","value": "Neutral","category":2},
{"name":"<49> 喷嚏网铂程: 转发微博 ","value": "Neutral","category":2},
{"name":"<50> 微博的李子豪: 來了……科技…… ","value": "Neutral","category":3},
{"name":"<51> NJ芙蕖: 转发微博 ","value": "Neutral","category":2},
{"name":"<52> 乐业皆悦: 转发微博 ","value": "Neutral","category":2},
{"name":"<53> 带鸡的少侠a: 开这车要考驾照吗 ","value": "Neutral","category":2},
{"name":"<54> 宁静淡泊得大自在: 转发微博 ","value": "Neutral","category":2},
{"name":"<55> 猜猜拆你妹: 转发微博 ","value": "Neutral","category":2},
{"name":"<56> 倒霉的小晖Sarvy: 转发微博 ","value": "Neutral","category":2},
{"name":"<57> mefu_: 学车是不是很快就过时了呢？[思考] ","value": "Negative","category":2},
{"name":"<58> 回眸淚傾城-李俊辉: 转发微博 ","value": "Neutral","category":2},
{"name":"<59> 烟在嘴边还未熄_97996: 美国卡车上月就实验自动控制啦","value": "Neutral","category":2},
{"name":"<60> 郭子豪1225: 转发微博 ","value": "Neutral","category":2},
{"name":"<61> 左小右2014: ","value": "Neutral","category":2},
{"name":"<62> 語言破碎處: @街角的石头  ","value": "Neutral","category":2},
{"name":"<63> 萝卜指导: [doge]","value": "Neutral","category":2},
{"name":"<64> 嘉骏ls: 期待 Uber+无人驾驶模式的出现[兔子] ","value": "Neutral","category":2},
{"name":"<65> 郑州阿海: ","value": "Neutral","category":2},
{"name":"<66> 甲骨文工: 离我们更近[泪][泪] 不开车的时候试着在无人车前扔个纸团，看看什么效果[偷笑] ","value": "Positive","category":2},
{"name":"<67> 二和尚Monkerrrrrrek: uber已经下手了http://t.cn/R27r3sp嘉骏ls: 期待 Uber+无人驾驶模式的出现[兔子] ","value": "Positive","category":2},
{"name":"<68> 音樂_61268: 转发微博 ","value": "Neutral","category":2},
{"name":"<69> 许克安: 新能源+无人自动驾驶，应该是未来汽车的样子","value": "Positive","category":2},
{"name":"<70> 嗨nmb让我睡会儿: 转发微博 ","value": "Neutral","category":2},
{"name":"<71> juanita0706: 转发微博 ","value": "Neutral","category":2},
{"name":"<72> 咕噜咕噜咕噜咕噜咕噜咕噜咩: [花痴] ","value": "Positive","category":2},
{"name":"<73> 彷徨在黑与白的边缘: @小奈1106  ","value": "Neutral","category":2},
{"name":"<74> 魔法-紫水晶: 这已经是第二代了 安全性应该没问题 两三年前在高速上见到过四轮的Google 无人驾驶车 开的很快有85迈以上了 当时目测开得很稳  ","value": "Positive","category":2},
{"name":"<75> 向阳盛开Sunshine: 小米很清楚自己的产品边界，不盲目扩张。五年来小米飞速发展，接下来的两三年重在夯实基础、牢固根基。","value": "Positive","category":2},
{"name":"<76> 根号4公主:  ","value": "Neutral","category":2},
{"name":"<77> 平衡人生达人: ","value": "Neutral","category":2},
{"name":"<78> 汇普-敬天爱人: 转发微博 ","value": "Neutral","category":2},
{"name":"<79> 99老车: ","value": "Neutral","category":2},
{"name":"<80> 许晖_Michael: 转发微博 ","value": "Neutral","category":2},
{"name":"<81> 昧皢季: 轉發微博 ","value": "Neutral","category":2},
{"name":"<82> 任禾: 不是n年前已经开始测试了吗？ ","value": "Neutral","category":2},
{"name":"<83> icu北极星: @凤凰科技  ","value": "Neutral","category":2},
{"name":"<84> 梁凯勇V5: 转发微博 ","value": "Neutral","category":2},
{"name":"<85> 刚铎: 转发微博 ","value": "Neutral","category":2},
{"name":"<86> stocks999999: [拍照] ","value": "Neutral","category":2},
{"name":"<87> lyn_GOGO:  ","value": "Neutral","category":2},
{"name":"<88> 怎么丶给自己个交代: 转发微博 ","value": "Neutral","category":2},
{"name":"<89> 素颜丶小奋斗: 转发微博 ","value": "Neutral","category":2},
{"name":"<90> 刀疤杀手傻白: 妈蛋学完驾照跟我说这个[doge]","value": "Neutral","category":2},
{"name":"<91> 北京信仰: ","value": "Neutral","category":2},
{"name":"<92> 墨菲_sir: 数据支撑未来，大数据的世界，一个人%20的轨迹决定了%80的经济基础。突然在想，我的驾照考了也用不了多少年，性价比越来越低了。","value": "Neutral","category":2},
{"name":"<93> 不再遥远_28004: ","value": "Neutral","category":2},
{"name":"<94> skyasian: 转发微博 ","value": "Neutral","category":2},
{"name":"<95> KingGeV: watch out ","value": "Neutral","category":2},
{"name":"<96> 时光陪你: 未来一切尽有可能 ","value": "Positive","category":2},
{"name":"<97> 元三哥:  ","value": "Neutral","category":2},
{"name":"<98> 椰子壳_汽车: 转发微博 ","value": "Neutral","category":2},
{"name":"<99> LipGhost:  ","value": "Neutral","category":2},
{"name":"<100> 愿一切美好321: 有创新总是好的，慢慢来，看好你哦 ","value": "Positive","category":2},
{"name":"<101> 熊猫胖小海: ","value": "Neutral","category":2},
{"name":"<102> 宇正007: 转发微博 ","value": "Neutral","category":2},
{"name":"<103> cheng2024: 转发微博 ","value": "Neutral","category":2},
{"name":"<104> 宇涵同学: 也许有一天，人驾驶汽车是非法行为 ","value": "Negative","category":2},
{"name":"<105> 潦源: 转发微博 ","value": "Neutral","category":2},
{"name":"<106> 路尚: 看到希望了 ","value": "Positive","category":2},
{"name":"<107> 谢永鹏Scalpel: 转发微博 ","value": "Neutral","category":2},
{"name":"<108> 李琦: 买两个，估计能塞到一个车位里 ","value": "Neutral","category":2},
{"name":"<109> 同源的你: @我叫琦琦我有谁  ","value": "Neutral","category":2},
{"name":"<110> 杨文超_deepin: ","value": "Neutral","category":2},
{"name":"<111> 沈洛天:  ","value": "Neutral","category":2},
{"name":"<112> EmilyWong1107: ","value": "Neutral","category":2},
{"name":"<113> 美人她爹: 扔纸团的时候记得把脸蒙上另外别带手机，不然以后skynet一桶浆糊了会上黑名单","value": "Neutral","category":2},
{"name":"<114> 互联网的口袋: come on ","value": "Neutral","category":2},
{"name":"<115> 专用浏览号: ","value": "Neutral","category":2},
{"name":"<116> 伍迪小龙: 转发微博 ","value": "Neutral","category":2},
{"name":"<117> 陈潇雨要去见习了: 驾照是不是考早了[飞机] ","value": "Neutral","category":2},
{"name":"<118> 自动化网官方微博: #自动驾驶# 厄姆森周五发表博文称，这些原型车由汽车供应商Roush Industries负责在底特律进行生产，将配备可拆卸的方向盘、刹车踏板和油门踏板，以便测试工程师可在“如有必要时接管”车辆控制。 谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。 ","value": "Neutral","category":2},
{"name":"<119> 淵縁沢TAYLOR: @机工战略 人工智能和视觉系统的终极结合之一","value": "Neutral","category":2},
{"name":"<120> 超级米饭_nes: Cute ","value": "Positive","category":2},
{"name":"<121> namidanasi: ","value": "Neutral","category":2},
{"name":"<122> 蒸汽机-孙力强: 高级！ ","value": "Positive","category":2},
{"name":"<123> Amiee-bai: 转发微博 ","value": "Neutral","category":2},
{"name":"<124> 本-多姿: 转发微博 ","value": "Neutral","category":2},
{"name":"<125> 散落吧千本樱景严: 转发微博 ","value": "Neutral","category":2},
{"name":"<126> 李夏伟_lxw: 转发微博 ","value": "Neutral","category":2},
{"name":"<127> 聪明的阿鑫: ","value": "Neutral","category":2},
{"name":"<128> 歪歪的炸毛边小白: driverless car都测试多少年了 … 不过不得不说这款长得是目前我觉得最可爱的[互粉][互粉][互粉] ","value": "Positive","category":2},
{"name":"<129> 和通: [good] ","value": "Positive","category":2},
{"name":"<130> BIT_CHACHA: zan! ","value": "Neutral","category":2},
{"name":"<131> 兔子大喵喵: 感觉还是自己开安全@骑着牛找牛股 @爱SH的三叶草 ","value": "Positive","category":2},
{"name":"<132> 两眼一抹黑的春秋果: 上海肯定开不了，前后左右都贴着，怎么个感应法？ ","value": "Neutral","category":2},
{"name":"<133> KDS蓝色柚子-为德国18年低调攒RP: 万一被女司机别一下，能刹车吗？","value": "Negative","category":2},


                

            ],
            links : [
              {"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<1> 谢璐银: 该来的始终会来 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<2> DarkLucifer冥羽: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<3> 会长牙的: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<4> 如山泰然_FOCUS: 谷歌今夏测试全自动驾驶汽车 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<5> 苏浩brother: [色] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<6> 满格儿: 好喜欢[鼓掌] "},
{"source":"<24> hktraveller: ","target":"<7> 衬女人: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<8> 与非一言堂: 最高速度四十公里每小时，离实用还有比较大的距离。好奇过去路试发生的十一起事故中，非被其他车从后面撞击的四起是如何发生的，怎么判断是其他车的责任？ "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<9> 梵雯香水: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<10> 小猎手-lion: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<11> 小石湖边的老邻居: 这车也可以 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<12> 回不去的曾经19860913: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<13> 来不及错过: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<14> 寒沙-冷血: 转发微博 "},
{"source":"<23> 美人她爹: 以谷歌做事的不靠谱程度，跪求这种车的行驶地区，我绕着走还不行吗 ","target":"<15> 九月鲜严俊:  "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<16> 文人二麻: 出租行业的未来 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<17> 丨缘分de天空丨: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<18> 圆圆堆圆圆的雪人: @谢雅而 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<19> 熙湮不念: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<20> 包谷此生爱玉米: 我擦，这技术……时代的步伐太快了 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<21> gztbhjg: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<22> GoingForward: 转发微博 "},
{"source":"<32> laolu: 转发微博 ","target":"<23> 美人她爹: 以谷歌做事的不靠谱程度，跪求这种车的行驶地区，我绕着走还不行吗 "},
{"source":"<50> 微博的李子豪: 來了……科技…… ","target":"<24> hktraveller: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<25> 湖光山色有木有: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<26> 沈博阳: 未来终于来了[good] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<27> 董潇: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<28> 徐奕林: [好棒] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<29> 奶黄包R: 赶快赶快[哈哈][哈哈][哈哈] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<30> TaylorNieh: [doge] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<31> 我若成风0: 加油。 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<32> laolu: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<33> IT168重庆站: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<34> 雪雪_雪兒snow: 好萌好酷好期待！ "},
{"source":"<47> 保英: 转发微博 ","target":"<35> 黑眼圈陈阿婆: 萌啊 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<36> 小乖的橙子: 真Q！ "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<37> 小小小釆购_叶: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<38> 正龙_龙战士DragonWarriors: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<39> 最爱米拉米: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<40> yy07086688: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<41> x烧白: 和自动倒车入库一样，都是令人感动的发明 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<42> sunslive: [给力] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<43> yangdigital: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<44> 一直在想起个什么名结果想了半天: 这车还真像小白鼠 "},
{"source":"<49> 喷嚏网铂程: 转发微博 ","target":"<45> 兔子奶奶熊的娘长颈鹿的爱:  "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<46> 正墓室1: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<47> 保英: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<48> journey张: Repost "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<49> 喷嚏网铂程: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<50> 微博的李子豪: 來了……科技…… "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<51> NJ芙蕖: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<52> 乐业皆悦: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<53> 带鸡的少侠a: 开这车要考驾照吗 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<54> 宁静淡泊得大自在: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<55> 猜猜拆你妹: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<56> 倒霉的小晖Sarvy: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<57> mefu_: 学车是不是很快就过时了呢？[思考] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<58> 回眸淚傾城-李俊辉: 转发微博 "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<59> 烟在嘴边还未熄_97996: 美国卡车上月就实验自动控制啦"},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<60> 郭子豪1225: 转发微博 "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<61> 左小右2014: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<62> 語言破碎處: @街角的石头  "},
{"source":"<23> 美人她爹: 以谷歌做事的不靠谱程度，跪求这种车的行驶地区，我绕着走还不行吗 ","target":"<63> 萝卜指导: [doge]"},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<64> 嘉骏ls: 期待 Uber+无人驾驶模式的出现[兔子] "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<65> 郑州阿海: "},
{"source":"<23> 美人她爹: 以谷歌做事的不靠谱程度，跪求这种车的行驶地区，我绕着走还不行吗 ","target":"<66> 甲骨文工: 离我们更近[泪][泪] 不开车的时候试着在无人车前扔个纸团，看看什么效果[偷笑] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<67> 二和尚Monkerrrrrrek: uber已经下手了http://t.cn/R27r3sp嘉骏ls: 期待 Uber+无人驾驶模式的出现[兔子] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<68> 音樂_61268: 转发微博 "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<69> 许克安: 新能源+无人自动驾驶，应该是未来汽车的样子"},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<70> 嗨nmb让我睡会儿: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<71> juanita0706: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<72> 咕噜咕噜咕噜咕噜咕噜咕噜咩: [花痴] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<73> 彷徨在黑与白的边缘: @小奈1106  "},
{"source":"<23> 美人她爹: 以谷歌做事的不靠谱程度，跪求这种车的行驶地区，我绕着走还不行吗 ","target":"<74> 魔法-紫水晶: 这已经是第二代了 安全性应该没问题 两三年前在高速上见到过四轮的Google 无人驾驶车 开的很快有85迈以上了 当时目测开得很稳  "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<75> 向阳盛开Sunshine: 小米很清楚自己的产品边界，不盲目扩张。五年来小米飞速发展，接下来的两三年重在夯实基础、牢固根基。"},
{"source":"<66> 甲骨文工: 离我们更近[泪][泪] 不开车的时候试着在无人车前扔个纸团，看看什么效果[偷笑] ","target":"<76> 根号4公主:  "},
{"source":"<64> 嘉骏ls: 期待 Uber+无人驾驶模式的出现[兔子] ","target":"<77> 平衡人生达人: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<78> 汇普-敬天爱人: 转发微博 "},
{"source":"<51> NJ芙蕖: 转发微博 ","target":"<79> 99老车: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<80> 许晖_Michael: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<81> 昧皢季: 轉發微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<82> 任禾: 不是n年前已经开始测试了吗？ "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<83> icu北极星: @凤凰科技  "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<84> 梁凯勇V5: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<85> 刚铎: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<86> stocks999999: [拍照] "},
{"source":"<32> laolu: 转发微博 ","target":"<87> lyn_GOGO:  "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<88> 怎么丶给自己个交代: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<89> 素颜丶小奋斗: 转发微博 "},
{"source":"<29> 奶黄包R: 赶快赶快[哈哈][哈哈][哈哈] ","target":"<90> 刀疤杀手傻白: 妈蛋学完驾照跟我说这个[doge]"},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<91> 北京信仰: "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<92> 墨菲_sir: 数据支撑未来，大数据的世界，一个人%20的轨迹决定了%80的经济基础。突然在想，我的驾照考了也用不了多少年，性价比越来越低了。"},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<93> 不再遥远_28004: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<94> skyasian: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<95> KingGeV: watch out "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<96> 时光陪你: 未来一切尽有可能 "},
{"source":"<78> 汇普-敬天爱人: 转发微博 ","target":"<97> 元三哥:  "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<98> 椰子壳_汽车: 转发微博 "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<99> LipGhost:  "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<100> 愿一切美好321: 有创新总是好的，慢慢来，看好你哦 "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<101> 熊猫胖小海: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<102> 宇正007: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<103> cheng2024: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<104> 宇涵同学: 也许有一天，人驾驶汽车是非法行为 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<105> 潦源: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<106> 路尚: 看到希望了 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<107> 谢永鹏Scalpel: 转发微博 "},
{"source":"<80> 许晖_Michael: 转发微博 ","target":"<108> 李琦: 买两个，估计能塞到一个车位里 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<109> 同源的你: @我叫琦琦我有谁  "},
{"source":"<66> 甲骨文工: 离我们更近[泪][泪] 不开车的时候试着在无人车前扔个纸团，看看什么效果[偷笑] ","target":"<110> 杨文超_deepin: "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<111> 沈洛天:  "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<112> EmilyWong1107: "},
{"source":"<66> 甲骨文工: 离我们更近[泪][泪] 不开车的时候试着在无人车前扔个纸团，看看什么效果[偷笑] ","target":"<113> 美人她爹: 扔纸团的时候记得把脸蒙上另外别带手机，不然以后skynet一桶浆糊了会上黑名单"},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<114> 互联网的口袋: come on "},
{"source":"<113> 美人她爹: 扔纸团的时候记得把脸蒙上另外别带手机，不然以后skynet一桶浆糊了会上黑名单","target":"<115> 专用浏览号: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<116> 伍迪小龙: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<117> 陈潇雨要去见习了: 驾照是不是考早了[飞机] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<118> 自动化网官方微博: #自动驾驶# 厄姆森周五发表博文称，这些原型车由汽车供应商Roush Industries负责在底特律进行生产，将配备可拆卸的方向盘、刹车踏板和油门踏板，以便测试工程师可在“如有必要时接管”车辆控制。 谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。 "},
{"source":"<118> 自动化网官方微博: #自动驾驶# 厄姆森周五发表博文称，这些原型车由汽车供应商Roush Industries负责在底特律进行生产，将配备可拆卸的方向盘、刹车踏板和油门踏板，以便测试工程师可在“如有必要时接管”车辆控制。 谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。 ","target":"<119> 淵縁沢TAYLOR: @机工战略 人工智能和视觉系统的终极结合之一"},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<120> 超级米饭_nes: Cute "},
{"source":"<26> 沈博阳: 未来终于来了[good] ","target":"<121> namidanasi: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<122> 蒸汽机-孙力强: 高级！ "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<123> Amiee-bai: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<124> 本-多姿: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<125> 散落吧千本樱景严: 转发微博 "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<126> 李夏伟_lxw: 转发微博 "},
{"source":"<118> 自动化网官方微博: #自动驾驶# 厄姆森周五发表博文称，这些原型车由汽车供应商Roush Industries负责在底特律进行生产，将配备可拆卸的方向盘、刹车踏板和油门踏板，以便测试工程师可在“如有必要时接管”车辆控制。 谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。 ","target":"<127> 聪明的阿鑫: "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<128> 歪歪的炸毛边小白: driverless car都测试多少年了 … 不过不得不说这款长得是目前我觉得最可爱的[互粉][互粉][互粉] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<129> 和通: [good] "},
{"source":"<0> 新浪科技: 【谷歌今夏测试全自动驾驶汽车：配备方向盘】谷歌将于今年夏天开始在公共道路上测试自主设计的无人驾驶汽车，但这种汽车将配备方向盘和刹车，这与该公司一年前的描述有所不同。谷歌称，这种外形类似豆荚的原型车可容纳两名乘客，是“世界上第一种完全自动驾驶的汽车”。http://t.cn/R273xqq ","target":"<130> BIT_CHACHA: zan! "},
{"source":"<24> hktraveller: ","target":"<131> 兔子大喵喵: 感觉还是自己开安全@骑着牛找牛股 @爱SH的三叶草 "},
{"source":"<131> 兔子大喵喵: 感觉还是自己开安全@骑着牛找牛股 @爱SH的三叶草 ","target":"<132> 两眼一抹黑的春秋果: 上海肯定开不了，前后左右都贴着，怎么个感应法？ "},
{"source":"<132> 两眼一抹黑的春秋果: 上海肯定开不了，前后左右都贴着，怎么个感应法？ ","target":"<133> KDS蓝色柚子-为德国18年低调攒RP: 万一被女司机别一下，能刹车吗？"},


            ]
        }
    ]
};
var ecConfig = require('echarts/config');
function focus(param) {
    var data = param.data;
    var links = option.series[0].links;
    var nodes = option.series[0].nodes;
    if (
        data.source !== undefined
        && data.target !== undefined
    ) { //点击的是边
        var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
        var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
        console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
    } else { // 点击的是点
        console.log("选中了" + data.name + '(' + data.value + ')');
    }
}
myChart.on(ecConfig.EVENT.CLICK, focus)

myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
    console.log(myChart.chart.force.getPosition());
});


                                       myChart.setOption(option2);         
 window.onresize = myChart.resize  
	})