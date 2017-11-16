﻿	require.config({
	paths:{
	 'echarts' : 'js/echarts/echarts-original',
	'echarts/chart/line' : 'js/echarts/echarts-original',
	 
	}
	});
	
	require(
	[
	'echarts',
	
	'echarts/chart/line'
	
	],

	function(ec){
		var myChart = ec.init(document.getElementById('main7')); 
 option = {
    title : {
        text: '转发时间曲线',
        subtext: '数据来自新浪微博',
		textStyle:{
					color:'#000000'
					}
    },
    tooltip : {
        trigger: 'axis',
		textStyle:{color:'#FFFFFF'}
    },
    legend: {
        data:['转发次数'],
		textStyle:{color:'#000000'}
    },
    toolbox: {
        show : true,
        feature : {
           
            dataView : {show: true, readOnly: false},
          
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['05月16日 10:50','05月16日 16:30','05月16日 23:30','05月16日 22:30','05月16日 11:20','05月16日 12:10','05月16日 11:10','05月16日 10:40','05月16日 14:40','05月16日 11:40','05月16日 11:30','05月16日 12:00','05月16日 13:20','05月16日 10:30','05月16日 14:00','05月16日 11:50','05月16日 12:40','05月16日 15:50','05月16日 12:30','05月16日 14:50','05月16日 13:00','05月16日 13:30','05月16日 13:40','05月16日 12:50','05月16日 14:30','05月16日 11:00','05月16日 16:10','05月17日 01:50','05月16日 14:20','05月16日 12:20','05月16日 16:40','05月16日 13:50','05月16日 17:00','05月16日 16:50','05月16日 18:00','05月17日 02:00','05月17日 00:30','05月16日 20:40','05月16日 13:10','05月16日 15:20','05月16日 17:50','05月16日 17:30','05月17日 01:40','05月16日 23:00','05月16日 19:10','05月17日 00:20','05月16日 16:20','05月16日 17:20','05月16日 19:50','05月16日 18:50','05月16日 14:10','05月16日 15:30','05月16日 19:40','05月16日 21:40','05月16日 15:00','05月17日 00:00','05月16日 21:30','05月16日 22:40','05月16日 20:50','05月16日 18:20','05月16日 19:20','05月16日 15:10','05月16日 22:50','05月16日 15:40','05月16日 22:00','05月16日 23:20','05月16日 20:10','05月16日 20:30','05月16日 17:40','05月16日 18:30','05月16日 20:20','05月16日 18:10','05月17日 00:10','05月16日 22:20','05月16日 23:10','05月16日 19:30','05月16日 17:10','05月16日 23:40','05月16日 21:50','05月16日 20:00','05月17日 01:00','05月16日 18:40','05月16日 21:00','05月17日 02:10','05月17日 03:00','05月17日 03:10','05月17日 04:20','05月17日 05:50','05月17日 06:30','05月17日 06:50','05月17日 07:00','05月17日 07:10','05月17日 07:30','05月17日 07:40','05月17日 07:50','05月17日 08:00','05月17日 08:10','05月17日 08:20','05月17日 08:30','05月17日 09:10','05月17日 09:20','05月17日 09:30','05月17日 10:20','05月17日 10:30','05月17日 10:50','05月17日 11:00','05月17日 11:50','05月17日 12:00','05月17日 12:10','05月17日 12:20','05月17日 12:50','05月17日 13:20','05月17日 13:30','05月17日 13:40','05月17日 13:50','05月17日 14:00','05月17日 14:10','05月17日 14:40','05月17日 14:50','05月17日 15:00','05月17日 15:10','05月17日 15:20','05月17日 15:50','05月17日 16:20','05月17日 16:40','05月17日 17:00','05月17日 17:20','05月17日 17:30','05月17日 18:40','05月17日 19:10','05月17日 19:20','05月17日 19:30','05月17日 20:00','05月17日 20:20','05月17日 21:50','05月17日 22:20','05月17日 22:50'],
        axisLabel:{textStyle:{color:'#000000'}},
		}
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
			textStyle:{color:'#000000'},
                formatter: '{value} '
            }
        }
    ],
    series : [
        {
            name:'转发次数',
            type:'line',
            data:[79,4,2,16,48,57,48,142,7,60,71,63,10,163,7,55,14,3,14,3,16,14,11,10,9,57,3,1,4,28,4,6,2,3,3,2,1,2,7,5,2,4,1,3,2,1,5,5,1,1,5,2,3,1,2,1,2,2,1,1,3,1,2,2,1,2,1,1,1,2,1,3,1,1,6,2,3,3,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,2,2,1,1,2,1,1,2,1,1,1,3,1,4,2,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1],
            
			markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
                      myChart.setOption(option);          window.onresize = myChart.resize		
	})