﻿require.config({
	paths:{
	 'echarts' : 'js/echarts/echarts-original',
	'echarts/chart/pie' : 'js/echarts/echarts-original',
	 
	}
	});
	
	require(
	[
	'echarts',
	
	'echarts/chart/pie'
	
	],

	function(ec){
		var myChart = ec.init(document.getElementById('main5')); 

	var option3 = {
    title : {
        text: '微博评论情感分布',
        subtext: '数据来自新浪微博',
        x:'right',
		y:'bottom',
		textStyle:{
					color:'#000000'
					}
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
		
        data:['支持','中性','反对'],
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
    series : [
        {
            name:'情感分布',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:11.31, name:'支持'},
               
                {value:51.45, name:'中性'},
                {value:37.24, name:'反对'}
                
            ]
        }
    ]
};
                    

	      myChart.setOption(option3);    window.onresize = myChart.resize		        
	})