function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
$(function() {



    var indexFun = (function () {
        var getUrlParams = function(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        }
        var pie1_data = [];
        var pie2_data = [];
        var graph_data = {
            series: [{
                type: 'graph',
                //layout: 'force',
                animation: true,
                animationEasing:'cubicln',
                animationDurationUpdate: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 100;
                },
                data: [
                    {
                        x:330,
                        y:317,
                        fixed:true,
                        symbolSize: 238,
                        itemStyle: {
                            normal: {
                                color: '#ffc63f'
                            }
                        },
                        label:{
                            normal:{
                                show:true,
                                color:'#060a10',
                                fontSize:46,
                                fontWeight:600
                            }
                        }
                    },
                    {
                        x:175+75,
                        y:175+75,
                        symbolSize: 175,
                        itemStyle: {
                            normal: {
                                color: '#06080d',
                                borderColor:'#ffc63f',
                                borderWidth:1
                            }
                        },
                        label:{
                            normal:{
                                show:true,
                                color:'#f0cc01',
                                fontSize:35
                            }
                        }
                    },
                    {
                        x:660-164-70,
                        y:260,
                        symbolSize: 164,
                        itemStyle: {
                            normal: {
                                color: '#06080d',
                                borderColor:'#ffc63f',
                                borderWidth:1
                            }
                        },
                        label:{
                            normal:{
                                show:true,
                                color:'#f0cc01',
                                fontSize:35
                            }
                        }
                    },
                    {

                        x:228,
                        y:634-128-50-100,
                        symbolSize: 128,
                        itemStyle: {
                            normal: {
                                color: '#06080d',
                                borderColor:'#ffc63f',
                                borderWidth:1
                            }
                        },
                        label:{
                            normal:{
                                show:true,
                                color:'#f0cc01',
                                fontSize:20
                            }
                        }
                    },
                    {
                        x:660-142-50-0,
                        y:634-142-50-50,
                        symbolSize: 130,
                        itemStyle: {
                            normal: {
                                color: '#06080d',
                                borderColor:'#9f8909',
                                borderWidth:1
                            }
                        },
                        label:{
                            normal:{
                                show:true,
                                color:'#b79c04',
                                fontSize:22
                            }
                        }
                    }
                ],
                links:[

                ],
                lineStyle:{
                    normal:{
                        color:'#e6c301',
                        width:1
                    }
                },
                force: {
                    initLayout: 'circular',
                    edgeLength: [250, 350],
                    repulsion: 300,
                    gravity: 0.1
                }
            }]
        };
        var swiper;
        var graph_inter,
               month = getUrlParams('month'),
                week = getUrlParams('week'),
                name = getUrlParams('name');
        var initData = function () {
                var nameArr =[];
            $.ajax({
                url:'http://dataweekly.z1025.com/index.php?c=index&f=get_data_jsonp&month='+month+'&week='+week+'&name='+name,
                dataType:'jsonp',
                type:'POST',
                success:function (data) {
                    var o_data = JSON.parse(data.data.data);
                    $('.actor-img').attr('src',o_data.image);
                    $('.actor-name').text(o_data.name);
                    $('.bg1-title').html(month+" "+week+" Report<br><span>"+o_data.period+"</span>");

                    $('.bg8-sub-page h2').html(o_data.qa);
                    $('.bg8-sub-page .qa-text').html(o_data.qa_rule);
                    $('.bg8-sub-page .qa img').attr('src',o_data.qa_image);
                    $('.bg8 .sub-btn').text(o_data.qa_btn)

                    //饼图
                    $('#art-num').text(o_data.article)
                    $('#article_txt').html(o_data.article_txt)
                    pie1_data[0] = {"value":o_data.platform,"name":"platform"}
                    pie1_data[1] = {"value":o_data.media,"name":"media"}
                    pie1_data[2] = {"value":o_data.social,"name":"social"}
                    pie1_data[3] = {"value":o_data.uc,"name":"uc"}
                    $('#eng-num').text(o_data.engagement)
                    $('#engagement_txt').html(o_data.engagement_txt)
                    pie2_data[0] = {"value":o_data.euc,"name":"euc"}
                    pie2_data[1] = {"value":o_data.emedia,"name":"emedia"}
                    pie2_data[2] = {"value":o_data.eother,"name":"eother"};

                    //评论
                    var c_tpl = []
                    for(var s in o_data.hotComment){
                        c_tpl.push('<div class="bg7-col ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s"><div class="zan"><i></i>'+o_data.hotComment[s].like+'</div><h4>'+o_data.hotComment[s].name+'</h4><p>'+o_data.hotComment[s].content+'</p></div>')
                    }
                    $('.bg7-col-wrap').html(c_tpl.join(''))
                    swiperFun(o_data);

                    //圆形关键词
                    for(var l in o_data.hotkey){
                        graph_data.series[0].data[l].name = o_data.hotkey[l][0];
                        nameArr.push( o_data.hotkey[l][0]);
                        graph_data.series[0].links.push({
                            source: o_data.hotkey[l][0],
                            target: o_data.hotkey[0][0]
                        })
                        // if(l>0){
                        //     graph_data.series[0].links.push({
                        //         source: o_data.hotkey[l-1][0],
                        //         target: o_data.hotkey[l][0]
                        //     })
                        // }
                    }
                    // var tempArr = groupSplit(nameArr,2);
                    // for(var y in tempArr){
                    //     graph_data.series[0].links.push({
                    //         source: tempArr[y][0],
                    //         target: tempArr[y][1]
                    //     })
                    // }
                }
            })

            //check history
                $.ajax({
                    url:'http://dataweekly.z1025.com/index.php?c=index&f=get_data_list_jsonp',
                    dataType:'jsonp',
                    type:'POST',
                    success:function (data) {
                       if(data.length<=2){
                           $('.history h2 a').hide();
                           var tpl = [],o_data2;
                           for(var j in data){
                               o_data2 = JSON.parse(data[j].data);
                               //console.log(o_data2)
                               tpl.push("<section class=\"bg3-col\"><h2><span>"+o_data2.period+"</span>"+o_data2.month+"/"+o_data2.week+"</h2><div class=\"bg3-c2\">");
                               for(var k =0;k<o_data2.hotkey.length;k++){
                                   tpl.push(' <div class="circle'+(k*1+1)+'">'+o_data2.hotkey[k][0]+'</div>');
                               }
                               tpl.push('</div></section>')
                           }
                           $('.history .history-wrap').append(tpl.join(""));
                       }else{
                           var tpl = [],tpl2=[],o_data2;
                           console.log('fuck')
                           //外页
                           for(var j=0;j<2;j++){
                               o_data2 = JSON.parse(data[j].data);
                               //console.log(o_data2)
                               tpl.push("<section class=\"bg3-col\"><h2><span>"+o_data2.period+"</span>"+o_data2.month+" 2017</h2><div class=\"bg3-c2\">");
                               for(var k =0;k<o_data2.hotkey.length;k++){
                                   tpl.push(' <div class="circle'+(k*1+1)+'">'+o_data2.hotkey[k][0]+'</div>');
                               }
                               tpl.push('</div></section>')
                           }
                           //内页
                           for(var n in data){
                               o_data2 = JSON.parse(data[n].data);
                               //console.log(o_data2)
                               tpl2.push("<section class=\"bg3-col\"><h2><span>"+o_data2.period+"</span>"+o_data2.month+" 2017</h2><div class=\"bg3-c2\">");
                               for(var m =0;m<o_data2.hotkey.length;m++){
                                   tpl2.push(' <div class="circle'+(m*1+1)+'">'+o_data2.hotkey[m][0]+'</div>');
                               }
                               tpl2.push('</div></section>')
                           }
                           $('.history .history-wrap').append(tpl.join(""));
                           $('.bg3-sub-page .history-wrap').append(tpl2.join(""));
                       }
                    }
                })
        },
        /**
         * 对数组元素进行排列组合
         * @param arr
         * @param size
         * @returns {Array}
         */
        groupSplit = function(arr, size) {
            var r = []; //result

            function _(t, a, n) { //tempArr, arr, num
                if (n === 0) {
                    r[r.length] = t;
                    return;
                }
                for (var i = 0, l = a.length - n; i <= l; i++) {
                    var b = t.slice();
                    b.push(a[i]);
                    _(b, a.slice(i + 1), n - 1);
                }
            }
            _([], arr, size);
            return r;
        },
        /**
         * 页面滚动
         * @param o_data 接口数据
         */
        swiperFun = function (o_data) {
            swiper = new Swiper('.swiper-container', {
                //initialSlide :1,
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
                        var graph_chart = echarts.init(document.getElementById("graph"));
                        var graph_data1 = {grid: {left: "16%", top: 10, right: "5%", bottom: 25}};
                        var graph_data2= Object.assign(graph_data1,graph_data);
                        graph_chart.setOption(graph_data2);
                        // graph_inter = setInterval(function () {
                        //     graph_chart.setOption({
                        //         series: [{
                        //             data: [
                        //                 {
                        //                     x:graph_data.series[0].data[0].x+10
                        //                 }
                        //             ]
                        //         }]
                        //     })
                        // },1000)

                    }
                    if(swiper.activeIndex == 2){
                        var pie1 = echarts.init(document.getElementById('pie1'));
                        var pie1_opt ={
                            grid:{
                                left:'16%',
                                top:10,
                                right:'5%',
                                bottom:25
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{b} : {d}%"
                            },
                            visualMap: {
                                show:false,
                                min:o_data.social,
                                max:o_data.media,
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
                                            formatter: '{b}',
                                            textStyle:{
                                                color:'#ffc63f',
                                                fontSize:16
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
                            tooltip : {
                                trigger: 'item',
                                formatter: "{b} : {d}%"
                            },
                            visualMap: {
                                show:false,
                                min:o_data.euc,
                                max:o_data.eother,
                                inRange: {
                                    colorAlpha: [.1, .68]
                                }
                            },
                            series : [
                                {
                                    type: 'pie',
                                    radius : '87%',
                                    center: ['50%', '50%'],
                                    data:pie2_data,
                                    label:{
                                        normal:{
                                            formatter: '{b}',
                                            textStyle:{
                                                color:'#92a6c4',
                                                fontSize:16
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
                }
            });
        },
        /**
         * 点击绑定
         */
        bindFun = function () {
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
            $('.share,.share-btn').on('click',function () {
                window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(window.location.href)+'&t='+encodeURIComponent(document.title), 'newWindow', 'width=800, height=400','center');
            })
        },
        /**
         * 初始化
         */
        init = function () {
            initData();

            bindFun();
        };
        return{
            init:init
        }
    })()
    indexFun.init();
})
