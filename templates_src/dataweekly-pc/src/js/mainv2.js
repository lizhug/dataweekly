function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
var graph_inter;
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    mousewheelControl: true,
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper);
        if(swiper.activeIndex == 1){
            WordCloud(document.getElementById('tagcloud'), {
                list: taglist,
                gridSize: 12,
                //weightFactor: 2,
                minRotation:0,
                maxRotation:0,
                fontFamily: 'Microsoft Yahei',
                backgroundColor:"transparent",
                minSize:'10px',
                color: function(word, weight) {
                    return (weight === 70) ?"#ffc63f": (['#ffc63f', '#8593aa', '#262d37','#222932'])[Math.floor(Math.random() * 3)]
                }
            } );
        }
        if(swiper.activeIndex == 2){
            var graph_chart = echarts.init(document.getElementById("graph"));
            var graph_data1 = {grid: {left: "16%", top: 10, right: "5%", bottom: 25}};
            graph_chart.setOption(Object.assign(graph_data1,graph_data));
            graph_inter = setInterval(function () {
                var t = parseInt(100 * Math.random() + 200);
                graph_chart.setOption({force: {repulsion: t}})
            },150)
        }
        if(swiper.activeIndex == 3){
            var pie1 = echarts.init(document.getElementById('pie1'));
            var pie1_opt ={
                grid:{
                    left:'16%',
                    top:10,
                    right:'5%',
                    bottom:25
                },
                visualMap: {
                    show:false,
                    min:100000,
                    max:140000,
                    inRange: {
                        colorAlpha: [.1, .68]
                    }
                },
                series : [
                    {
                        type: 'pie',
                        radius : '85%',
                        center: ['50%', '50%'],
                        data:pie1_data,
                        label:{
                            normal:{
                                formatter: '{b}:{d}%',
                                position:'inside',
                                textStyle:{
                                    color:'#ffc63f'
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                lineStyle:{
                                    color:'#ffc63f'
                                }
                            }
                        },
                        itemStyle: {
                            normal:{
                                color:'#ffc63f'
                            }
                        }
                    }
                ]
            };
            pie1.setOption(pie1_opt);

            var pie2 = echarts.init(document.getElementById('pie2'));
            var pie2_opt ={
                grid:{
                    left:'16%',
                    top:10,
                    right:'5%',
                    bottom:25
                },
                visualMap: {
                    show:false,
                    min:2500000,
                    max:4700000,
                    inRange: {
                        colorAlpha: [.1, .68]
                    }
                },
                series : [
                    {
                        type: 'pie',
                        radius : '85%',
                        center: ['50%', '50%'],
                        data:pie2_data,
                        label:{
                            normal:{
                                formatter: '{b}:{d}%',
                                position:'inside',
                                textStyle:{
                                    color:'#92a6c4'
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                lineStyle:{
                                    color:'#489aee'
                                }
                            }
                        },
                        itemStyle: {
                            normal:{
                                color:'#1f4578'
                            }
                        }
                    }
                ]
            };
            pie2.setOption(pie2_opt);
        }
        if(swiper.activeIndex == 4){
            var chart1 = echarts.init(document.getElementById('echart1'));
            var chart1_opt ={
                grid:{
                    left:'16%',
                    top:10,
                    right:'5%',
                    bottom:25
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#8593aa'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#1b2432',
                            width:2
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#1b2432'
                        }
                    },
                    data: ['Jan','Feb','Mar','Apr','May','Jun','July']
                },
                yAxis: {
                    type: 'value',
                    max:50000,
                    axisLabel:{
                        textStyle:{
                            color:'#8593aa'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#1b2432',
                            width:2
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                },
                series: [
                    {
                        type:'line',
                        lineStyle:{
                            normal:{
                                color:'#eca427',
                                width:3
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:'#ffe8bb',
                                borderColor:'#ffc63f',
                                borderWidth:6
                            }
                        },
                        data:line_data
                    }
                ]
            };
            chart1.setOption(chart1_opt)

            var chart2 = echarts.init(document.getElementById('echart1'));
            var chart2_opt ={
                grid:{
                    left:'16%',
                    top:10,
                    right:'5%',
                    bottom:25
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#8593aa'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#1b2432',
                            width:2
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#1b2432'
                        }
                    },
                    data: ['Jan','Feb','Mar','Apr','May','Jun','July']
                },
                yAxis: {
                    type: 'value',
                    max:50000,
                    axisLabel:{
                        textStyle:{
                            color:'#8593aa'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#1b2432',
                            width:2
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                },
                series: [
                    {
                        type:'line',
                        lineStyle:{
                            normal:{
                                color:'#eca427',
                                width:3
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:'#ffe8bb',
                                borderColor:'#ffc63f',
                                borderWidth:6
                            }
                        },
                        data:line_data2
                    }
                ]
            };
            chart2.setOption(chart2_opt)

            var chart3 = echarts.init(document.getElementById('echart1'));
            var chart3_opt ={
                grid:{
                    left:'16%',
                    top:10,
                    right:'5%',
                    bottom:25
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#8593aa'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#1b2432',
                            width:2
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#1b2432'
                        }
                    },
                    data: ['Jan','Feb','Mar','Apr','May','Jun','July']
                },
                yAxis: {
                    type: 'value',
                    max:50000,
                    axisLabel:{
                        textStyle:{
                            color:'#8593aa'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#1b2432',
                            width:2
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                },
                series: [
                    {
                        type:'line',
                        lineStyle:{
                            normal:{
                                color:'#eca427',
                                width:3
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:'#ffe8bb',
                                borderColor:'#ffc63f',
                                borderWidth:6
                            }
                        },
                        data:line_data3
                    }
                ]
            };
            chart3.setOption(chart3_opt)
        }
    }
});

var chart2 = echarts.init(document.getElementById('echart2'));
var chart3 = echarts.init(document.getElementById('echart3'));
var chart1_opt2 ={
    grid:{
        left:'16%',
        top:10,
        right:'5%',
        bottom:25
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisTick:{
            show:false
        },
        axisLabel:{
            textStyle:{
                color:'#8593aa'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#1b2432',
                width:2
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#1b2432'
            }
        },
        data: ['Jan','Feb','Mar','Apr','May','Jun','July']
    },
    yAxis: {
        type: 'value',
        max:50000,
        axisLabel:{
            textStyle:{
                color:'#8593aa'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#1b2432',
                width:2
            }
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        }
    },
    series: [
        {
            type:'line',
            lineStyle:{
                normal:{
                    color:'#eca427',
                    width:3
                }
            },
            itemStyle:{
                normal:{
                    color:'#ffe8bb',
                    borderColor:'#ffc63f',
                    borderWidth:6
                }
            },
            data:line_data2
        }
    ]
};
var chart1_opt3 ={
    grid:{
        left:'16%',
        top:10,
        right:'5%',
        bottom:25
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisTick:{
            show:false
        },
        axisLabel:{
            textStyle:{
                color:'#8593aa'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#1b2432',
                width:2
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#1b2432'
            }
        },
        data: ['Jan','Feb','Mar','Apr','May','Jun','July']
    },
    yAxis: {
        type: 'value',
        max:50000,
        axisLabel:{
            textStyle:{
                color:'#8593aa'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#1b2432',
                width:2
            }
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        }
    },
    series: [
        {
            type:'line',
            lineStyle:{
                normal:{
                    color:'#eca427',
                    width:3
                }
            },
            itemStyle:{
                normal:{
                    color:'#ffe8bb',
                    borderColor:'#ffc63f',
                    borderWidth:6
                }
            },
            data:line_data3
        }
    ]
};
chart2.setOption(chart1_opt2)
chart3.setOption(chart1_opt3)

$('.sub-btn').on('click',function () {
    $(this).closest('.bg').find('.sub-page').addClass('sub-page-on');
    swiper.disableMousewheelControl();
})
$('.back').on('click',function () {
    $(this).closest('.sub-page').removeClass('sub-page-on');
    swiper.enableMousewheelControl();
})
$('.bg5-btn').on('click',function () {
    $(this).addClass('bg5-btn-cur').siblings('.bg5-btn').removeClass('bg5-btn-cur');
    var index = $(this).index('.bg5-btn');
    $('.bg5-tab-con').addClass('hide').eq(index).removeClass('hide')
})
$('.bg2-btn').on('click',function () {
    swiper.slideTo(7);
    $('.bg8-btn').click();
})
$('.share,.share-btn').on('click',function () {
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(window.location.href)+'&t='+encodeURIComponent(document.title), 'newWindow', 'width=800, height=400','center');
})