function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}

(function () {
    var indexFun = (function () {
        /**
         * 获取url中的参数
         * @param key
         * @returns {*}
         */
        var getUrlParams = function(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        };
        var pie1_data = [];
        var pie2_data = [];
        var graph_data = {
            series: [{
                type: 'graph',
                layout: 'none',
                animation: true,
                animationEasing:'cubicln',
                animationDurationUpdate: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 100;
                },
                data: [
                    {
                        x:window.innerWidth/2,
                        y:184,
                        fixed:true,
                        symbolSize: 130,
                        itemStyle: {
                            normal: {
                                color: '#ffc63f'
                            }
                        },
                        label:{
                            normal:{
                                show:true,
                                color:'#060a10',
                                fontSize:20,
                                fontWeight:600
                            }
                        }
                    },
                    {
                        x:window.innerWidth/2-80,
                        y:104,
                        symbolSize: 80,
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
                                fontSize:18
                            }
                        }
                    },
                    {
                        x:window.innerWidth/2+80,
                        y:94,
                        symbolSize: 80,
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
                                fontSize:18
                            }
                        }
                    },
                    {
                        x:window.innerWidth/2-100,
                        y:250,
                        symbolSize: 70,
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
                                fontSize:14
                            }
                        }
                    },
                    {
                        x:window.innerWidth/2+100,
                        y:220,
                        symbolSize: 70,
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
                                fontSize:14
                            }
                        }
                    },
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
                    edgeLength: [120, 220],
                    repulsion: 300,
                    gravity: 0.1
                }
            }]
        };
        var ca_width = 0;
        var ca = document.getElementById("loading-line");
        var co = ca.getContext('2d');
        var mySwiper,graph_ani, month = getUrlParams('month'),
            week = getUrlParams('week'),
            name = getUrlParams('name'),
            lang = getUrlParams('lang') || "en",
            loaded = 0,
            total = 0,
            o_data;

        var UpdateCanvas = function (func){
            window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.amozRequestAnimationFrame || (function (func){setTimeout(func, 16.666);});
            window.requestAnimationFrame(func);
        },
        Animate = function (){

            // Create gradient
            //获取屏幕的宽度
            var  clientWidth = document.documentElement.clientWidth;
            ca.setAttribute('width',clientWidth+'px');

            co.save();

            // Before drawing the line the canvas should be clipped
            co.beginPath;
            co.rect(0,0,ca_width,185)
            co.clip();

            co.beginPath();
            co.lineWidth = 2;
            co.lineCap = 'round';
            co.strokeStyle ="#ffc63f";
            co.translate(0,100);
            co.scale(.55,.8);
            var coords = [
                {x: 0, y:0},{x: 190, y:0},{x: 202, y:-43},
                {x: 216, y:66},{x: 219, y:0},
                {x: 233, y:0},{x: 243, y:-80},
                {x: 260, y:74},{x: 273, y:0},
                {x: 290, y:0},{x: 295, y:-18},
                {x: 303, y:25},{x: 308, y:0},
                {x: 316, y:35},{x: 334, y:-92},
                {x: 340, y:72},{x: 358, y:-15},
                {x: 365, y:0},{x: 438, y:0},
                {x: 454, y:-35},{x: 470, y:56},
                {x: 490, y:-82},{x: 500, y:0},
                {x: 505, y:-16},{x: 518, y:72},
                {x: 526, y:-40},{x: 530, y:0},
                {x: 720, y:0}]

            for (var i=0; i<coords.length; i++) {
                //co.moveTo(coords[i].x, coords[i].y);
                co.lineTo(coords[i].x, coords[i].y);
            }

            co.stroke();
            co.restore();
            co.fillStyle="#ffc63f";
            if (ca_width < 600) {
                ca_width += 1;
                co.fillStyle="#ffc63f";
                UpdateCanvas(Animate);

                // Reset the ca_width to zero to allow the button to be pressed again
            } else {
                ca_width = 0;
            }
        },
        /**
         * loading函数
         * @type {Object}
         */
        loading_ani = setInterval(function () {
                Animate();
            },2000),
        /**
         * loading函数
         * @param iFileData
         */
        loader = function(iFileData){
                total = iFileData.length;
                for(var i = 0; i < total; i++) {
                    loadImage(iFileData[i]);
                }
        },
            /**
             * 加载图片
             * @param iData
             */
        loadImage = function(iData){
            var img = new Image();
            img.onload = function () {
                loaded++;
                checkLoadComplete();
            };
            img.onerror = function(){
                loaded++;
                checkLoadComplete();
            }
            img.src = iData;
        },
        checkLoadComplete = function(){
            var percent = parseInt(loaded*100/total);
            $('#loading-num').html(percent+'%');
            if(loaded == total) {
                $('.loading').hide();
                clearInterval(loading_ani);
                //swiperFun();
            }
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
         * 初始化数据
         */
        initData= function () {
            var nameArr =[];
            $.ajax({
                url:'http://dataweekly.z1025.com/index.php?c=index&f=get_data_jsonp&month='+month+'&week='+week+'&name='+name+'&lang='+lang,
                dataType:'jsonp',
                type:'POST',
                success:function (data) {
                    if(lang == 'id'){
                        $('html').attr('lang','id')
                        $('body').addClass('in')
                    }

                    o_data = JSON.parse(data.data.data);
                    $('.actor-img').attr('src',o_data.image);
                    $('.actor-name').text(o_data.name);
                    $('.bg1-title').html(month+" "+week+" Report<br><span>"+o_data.period+"</span>");

                    $('.bg7-sub-page h2').html(o_data.qa);
                    $('.bg7-sub-page .qa').html(o_data.qa_rule);
                    $('.bg7-sub-page img').attr('src',o_data.qa_image);
                    $('.bg7-sub-btn').text(o_data.qa_btn)

                    //饼图
                    $('#art-num').text(o_data.article)
                    $('#article_txt').html(o_data.article_txt)
                    pie1_data.push({"value":parseInt(o_data.platform),"name":"platform"})
                    pie1_data.push({"value":parseInt(o_data.media),"name":"media"})
                    pie1_data.push({"value":parseInt(o_data.social),"name":"social"})
                    pie1_data.push({"value":parseInt(o_data.uc),"name":"uc"})
                    $('#eng-num').text(o_data.engagement)
                    $('#engagement_txt').html(o_data.engagement_txt)
                    pie2_data.push({"value":parseInt(o_data.euc),"name":"euc"})
                    pie2_data.push({"value":parseInt(o_data.emedia),"name":"emedia"})
                    pie2_data.push({"value":parseInt(o_data.eother),"name":"eother"});

                    //评论
                    if(o_data.hotComment.length<=5){
                        $('.bg6-btn').remove();
                    }
                    var c_tpl = []
                    for(var s in o_data.hotComment){
                        c_tpl.push('<div class="bg6-col ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s"><div class="zan"><i></i>'+o_data.hotComment[s].like+'</div><h4>'+o_data.hotComment[s].name+'</h4><p>'+o_data.hotComment[s].content+'</p></div>')
                    }
                    $('.bg6-col-wrap').html(c_tpl.join(''))

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
                url:'http://dataweekly.z1025.com/index.php?c=index&f=get_data_list_jsonp&lang='+lang,
                dataType:'jsonp',
                type:'POST',
                success:function (data) {
                    var tpl = [],o_data2;
                    for(var j in data){
                        o_data2 = JSON.parse(data[j].data);
                        tpl.push("<section class=\"bg2-col\"><h2>"+o_data2.period+" "+o_data2.month+" 2017</h2><div class=\"bg2-c2\">");
                        for(var k =0;k<(o_data2.hotkey.length>5?5:o_data2.hotkey.length);k++){
                            if(o_data2.hotkey.length == 3){
                                k>1?tpl.push(' <div class="circle5">'+o_data2.hotkey[k][0]+'</div>'):tpl.push(' <div class="circle'+(k*1+1)+'">'+o_data2.hotkey[k][0]+'</div>')
                            }else{
                                tpl.push(' <div class="circle'+(k*1+1)+'">'+o_data2.hotkey[k][0]+'</div>');
                            }
                        }
                        tpl.push('</div></section>')
                    }
                    $('.history-wrap').append(tpl.join(""));
                }
            })
        },
        /**
         * 页面滚动
         * @param data
         */
        swiperFun = function (data) {
            mySwiper = new Swiper ('#swiper', {
                //initialSlide :3,
                direction : 'vertical',
                mousewheelControl : true,
                onInit: function(swiper){
                    swiperAnimateCache(swiper);
                    swiperAnimate(swiper);
                },
                onSlideChangeEnd: function(swiper){
                    swiperAnimate(swiper);
                    clearInterval(graph_ani);
                    if(swiper.activeIndex == 1){
                        var graph = echarts.init(document.getElementById('graph'));
                        var graph_ori_data = {
                            grid:{
                                left:'16%',
                                top:10,
                                right:'5%',
                                bottom:25
                            }
                        }
                        graph.setOption(Object.assign(graph_ori_data,graph_data));
                        // graph_ani = setInterval(function () {
                        //     var num = parseInt(Math.random()*(300-200)+200);
                        //     graph.setOption({
                        //         force: {
                        //             repulsion: num
                        //         }
                        //     })
                        // },500)
                    }
                    // if(swiper.activeIndex == 2){
                    //     var chart1 = echarts.init(document.getElementById('echart1'));
                    //     var chart1_opt ={
                    //         grid:{
                    //             left:'16%',
                    //             top:10,
                    //             right:'5%',
                    //             bottom:25
                    //         },
                    //         xAxis:  {
                    //             type: 'category',
                    //             boundaryGap: false,
                    //             axisTick:{
                    //                 show:false
                    //             },
                    //             axisLabel:{
                    //                 textStyle:{
                    //                     color:'#8593aa'
                    //                 }
                    //             },
                    //             axisLine:{
                    //                 lineStyle:{
                    //                     color:'#1b2432',
                    //                     width:2
                    //                 }
                    //             },
                    //             splitLine:{
                    //                 show:true,
                    //                 lineStyle:{
                    //                     color:'#1b2432'
                    //                 }
                    //             },
                    //             data: ['Jan','Feb','Mar','Apr','May','Jun','July']
                    //         },
                    //         yAxis: {
                    //             type: 'value',
                    //             max:50000,
                    //             axisLabel:{
                    //                 textStyle:{
                    //                     color:'#8593aa'
                    //                 }
                    //             },
                    //             axisLine:{
                    //                 lineStyle:{
                    //                     color:'#1b2432',
                    //                     width:2
                    //                 }
                    //             },
                    //             axisTick:{
                    //                 show:false
                    //             },
                    //             splitLine:{
                    //                 show:false
                    //             }
                    //         },
                    //         series: [
                    //             {
                    //                 type:'line',
                    //                 lineStyle:{
                    //                     normal:{
                    //                         color:'#eca427',
                    //                         width:3
                    //                     }
                    //                 },
                    //                 itemStyle:{
                    //                     normal:{
                    //                         color:'#ffe8bb',
                    //                         borderColor:'#ffc63f',
                    //                         borderWidth:6
                    //                     }
                    //                 },
                    //                 data:line_data
                    //             }
                    //         ]
                    //     };
                    //     chart1.setOption(chart1_opt)
                    // }
                    if(swiper.activeIndex == 2){
                        var chart4 = echarts.init(document.getElementById('echart4'));
                        var chart4_opt ={

                            tooltip : {
                                trigger: 'item',
                                formatter: "{b} : {d}%"
                            },

                            visualMap: {
                                show: false,
                                min:data.social,
                                max:data.media,
                                inRange: {
                                    colorAlpha: [.1, .68]
                                }
                            },
                            series : [
                                {
                                    name:'访问来源',
                                    type:'pie',
                                    radius : '55%',
                                    center: ['50%', '50%'],
                                    data:pie1_data,
                                    label:{
                                        normal:{
                                            formatter: "{b}",
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
                                        normal: {
                                            color: '#ffc63f'
                                        }
                                    },

                                    animationType: 'scale',
                                    animationEasing: 'elasticOut',
                                    animationDelay: function (idx) {
                                        return Math.random() * 200;
                                    }
                                }
                            ]
                        };
                        chart4.setOption(chart4_opt)
                    }
                },
                onProgress: function(swiper) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slide = swiper.slides[i];
                        var progress = slide.progress;
                        var translate, boxShadow;

                        translate = progress * swiper.height * 0.8;
                        scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
                        boxShadowOpacity = 0;

                        slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';

                        if (i == swiper.myactive) {
                            es = slide.style;
                            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
                            es.zIndex=0;
                        }else{
                            es = slide.style;
                            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
                            es.zIndex=1;
                        }
                    }

                },
                onTransitionEnd: function(swiper, speed) {
                    swiper.myactive = swiper.activeIndex;
                },
                onSetTransition: function(swiper, speed) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        es = swiper.slides[i].style;
                        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';

                    }

                }
            });
        },
        bindEvent = function () {
            $('.btn').on('touchstart',function () {
                var openid = $(this).attr('open-page');
                $('.'+openid).addClass('sub-page-on');
                if($(this).hasClass('bg6-btn') || $(this).hasClass('bg7-btn') || $(this).hasClass('bg2-btn')){
                    mySwiper.disableTouchControl();
                }
            })
            $('.back').on('touchstart',function () {
                $(this).parent().removeClass('sub-page-on');
                if($(this).hasClass('bg6-back') || $(this).hasClass('bg7-back') || $(this).hasClass('bg2-back')){
                    mySwiper.enableTouchControl();
                }
            })
            // var chart2 = echarts.init(document.getElementById('echart2'));
            // var chart3 = echarts.init(document.getElementById('echart3'));
            // var chart1_opt2 ={
            //     grid:{
            //         left:'16%',
            //         top:10,
            //         right:'5%',
            //         bottom:25
            //     },
            //     xAxis:  {
            //         type: 'category',
            //         boundaryGap: false,
            //         axisTick:{
            //             show:false
            //         },
            //         axisLabel:{
            //             textStyle:{
            //                 color:'#8593aa'
            //             }
            //         },
            //         axisLine:{
            //             lineStyle:{
            //                 color:'#1b2432',
            //                 width:2
            //             }
            //         },
            //         splitLine:{
            //             show:true,
            //             lineStyle:{
            //                 color:'#1b2432'
            //             }
            //         },
            //         data: ['Jan','Feb','Mar','Apr','May','Jun','July']
            //     },
            //     yAxis: {
            //         type: 'value',
            //         max:50000,
            //         axisLabel:{
            //             textStyle:{
            //                 color:'#8593aa'
            //             }
            //         },
            //         axisLine:{
            //             lineStyle:{
            //                 color:'#1b2432',
            //                 width:2
            //             }
            //         },
            //         axisTick:{
            //             show:false
            //         },
            //         splitLine:{
            //             show:false
            //         }
            //     },
            //     series: [
            //         {
            //             type:'line',
            //             lineStyle:{
            //                 normal:{
            //                     color:'#eca427',
            //                     width:3
            //                 }
            //             },
            //             itemStyle:{
            //                 normal:{
            //                     color:'#ffe8bb',
            //                     borderColor:'#ffc63f',
            //                     borderWidth:6
            //                 }
            //             },
            //             data:line_data2
            //         }
            //     ]
            // };
            // var chart1_opt3 ={
            //     grid:{
            //         left:'16%',
            //         top:10,
            //         right:'5%',
            //         bottom:25
            //     },
            //     xAxis:  {
            //         type: 'category',
            //         boundaryGap: false,
            //         axisTick:{
            //             show:false
            //         },
            //         axisLabel:{
            //             textStyle:{
            //                 color:'#8593aa'
            //             }
            //         },
            //         axisLine:{
            //             lineStyle:{
            //                 color:'#1b2432',
            //                 width:2
            //             }
            //         },
            //         splitLine:{
            //             show:true,
            //             lineStyle:{
            //                 color:'#1b2432'
            //             }
            //         },
            //         data: ['Jan','Feb','Mar','Apr','May','Jun','July']
            //     },
            //     yAxis: {
            //         type: 'value',
            //         max:50000,
            //         axisLabel:{
            //             textStyle:{
            //                 color:'#8593aa'
            //             }
            //         },
            //         axisLine:{
            //             lineStyle:{
            //                 color:'#1b2432',
            //                 width:2
            //             }
            //         },
            //         axisTick:{
            //             show:false
            //         },
            //         splitLine:{
            //             show:false
            //         }
            //     },
            //     series: [
            //         {
            //             type:'line',
            //             lineStyle:{
            //                 normal:{
            //                     color:'#eca427',
            //                     width:3
            //                 }
            //             },
            //             itemStyle:{
            //                 normal:{
            //                     color:'#ffe8bb',
            //                     borderColor:'#ffc63f',
            //                     borderWidth:6
            //                 }
            //             },
            //             data:line_data3
            //         }
            //     ]
            // };
            // chart2.setOption(chart1_opt2)
            // chart3.setOption(chart1_opt3)
            $('.bg3-btn').on('touchstart',function () {
                $(this).addClass('bg3-btn-on').siblings('.bg3-btn').removeClass('bg3-btn-on');
                var num = $(this).attr('data-open');
                $('.bg3-tab-con').addClass('hide').eq(num).removeClass('hide');


            })
            $('.bg5-btn2').on('touchstart',function () {
                $(this).addClass('bg5-tab-on');
                $('.bg5-btn1').removeClass('bg5-tab-on');
                $('.tab-cont2').removeClass('hide');
                $('.tab-cont1').addClass('hide');
                console.log('fuck')
                var chart5 = echarts.init(document.getElementById('echart5'));
                var chart5_opt ={
                    grid:{
                        left:'16%',
                        top:10,
                        right:'5%',
                        bottom:25
                    },
                    visualMap: {
                        show:false,
                        min:80,
                        max:600,
                        inRange: {
                            colorAlpha: [.1, .68]
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {d}%"
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '60%',
                            center: ['50%', '50%'],
                            data:pie2_data,
                            label:{
                                normal:{
                                    formatter: "{b}",
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
                chart5.setOption(chart5_opt)
            })
            $('.bg5-btn1').on('touchstart',function () {
                $(this).addClass('bg5-tab-on');
                $('.bg5-btn2').removeClass('bg5-tab-on');
                $('.tab-cont1').removeClass('hide');
                $('.tab-cont2').addClass('hide');
            })
            $('.share,.share-btn').on('touchstart',function () {
                window.location = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(window.location.href)+'&t='+encodeURIComponent(document.title), 'newWindow', 'width=800, height=400','center';
            })
        },
        init = function () {
            Animate();
            initData();
            loader([
                'http://dataweekly.z1025.com/templates/mobi/img/back.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg1-logo-bg.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg1-logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg1.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/bg2-logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-btn1-hov.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-btn1.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-btn2-hov.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-btn2.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-btn3-hov.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-btn3.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3-up.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg3.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-icon1.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-line1.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-line2.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-line3.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-line4.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-line5.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-line6.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4-logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg4.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/bg5-c.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg5-tab-hov.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg5-tab.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg5.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/bg6-logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/bg6.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/bg7.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/c-name.png',
                'http://dataweekly.z1025.com/templates/mobi/img/c1.png',
                'http://dataweekly.z1025.com/templates/mobi/img/c2.png',
                'http://dataweekly.z1025.com/templates/mobi/img/c3.png',
                'http://dataweekly.z1025.com/templates/mobi/img/down.png',
                'http://dataweekly.z1025.com/templates/mobi/img/line1.png',
                'http://dataweekly.z1025.com/templates/mobi/img/line2.png',
                'http://dataweekly.z1025.com/templates/mobi/img/loading-line.png',
                'http://dataweekly.z1025.com/templates/mobi/img/loading.jpg',
                'http://dataweekly.z1025.com/templates/mobi/img/logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/ques.png',
                'http://dataweekly.z1025.com/templates/mobi/img/share.png',
                'http://dataweekly.z1025.com/templates/mobi/img/slide.png',
                'http://dataweekly.z1025.com/templates/mobi/img/slide2.png',
                'http://dataweekly.z1025.com/templates/mobi/img/sub-logo.png',
                'http://dataweekly.z1025.com/templates/mobi/img/sub-logo2.png',
                'http://dataweekly.z1025.com/templates/mobi/img/sub-title.png',
                'http://dataweekly.z1025.com/templates/mobi/img/zan.png'
            ]);
            bindEvent();
        }
        return{
            init:init
        }
    })()

    indexFun.init();

})()