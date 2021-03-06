/*
combined files : 

kg/kcharts/2.0.1/tools/graphtool/index

*/
//简单图形绘制的工具
;KISSY.add('kg/kcharts/2.0.1/tools/graphtool/index',function(S,Raphael){

	var sqrt = Math.sqrt;

	var graphTool = {};
	//等边三角形
	var triangle = function(paper,x,y,r,deg){
		var	path = [
				"M" + [x,y-r].join(","),
				"L" + [x - r * sqrt(3)/2,y - 0 + r * 1/2].join(","),
				[x - 0 + r * sqrt(3)/2,y - 0 + r * 1/2].join(","),
				"Z"
			].join(" "),
			el;

		if(paper && paper.path){
			el = paper.path(path);
			// el.attr({cx:x,cy:y});	//伪造中心点
			el.rotate(deg,x,y);
			return el;
		}
	};
	//菱形
	var rhomb = function(paper,x,y,w,h,deg){
		var path = [
				"M" + [x,y-h/2].join(","),
				"L" + [x - 0 + w/2,y].join(","),
				[x,y - 0 + h/2].join(","),
				[x - w/2,y].join(","),
				"Z"
			].join(","),
			el;
		if(paper && paper.path){
			el = paper.path(path);
			// el.attr({cx:x,cy:y});	//伪造中心点
			el.rotate(deg,x,y);
			return el;
		}
	};

	var square = function(paper,x,y,w,h){
		var path = [
			["M",x-w/2,",",y-h/2].join(""),
			[" L",x/1+w/2,",",y-h/2," v",h," h",-w,'z'].join("")
		],el;
		if(paper && paper.path){
			el = paper.path(path);
			return el;
		}
	}

	graphTool = S.merge(graphTool,{
		triangle:triangle,
		rhomb:rhomb,
		square:square
	});

	return graphTool;
},{requires:['kg/kcharts/2.0.0/raphael/index']});
