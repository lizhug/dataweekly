> 格式中有中文的，才是变量

# pc端文字标签格式
- 格式：
```javascript
[["标签名",文字大小],["标签名",文字大小]...]
```

- 注意：文字大小最大为70，也就是最大的标签为70

# 圆形标签格式
- 格式：

```javascript
{
        series: [{
            type: 'graph',
            layout: 'force',
            animation: true,
            animationEasing:'cubicln',
            animationDurationUpdate: function (idx) {
                return idx * 100;
            },
            draggable:true,
            data: [
                {
                    name: '标签名',
                    symbolSize: 圆形大小,
                    itemStyle: {
                        normal: {
                            color: '#ffc63f'
                        }
                    },
                    label:{
                        normal:{
                            show:true,
                            color:'#060a10',
                            fontSize:字体大小,
                            fontWeight:600
                        }
                    }
                }
            ],
            links:[
                {
                    source: '连接的标签名',
                    target: '被连接的标签名'
                }
            ],
            lineStyle:{
                normal:{
                    color:'#e6c301',
                    width:1
                }
            },
            force: {
                initLayout: 'circular',
                edgeLength: [240, 260],
                repulsion: 300,
                gravity: 0.1
            }
        }]
    }
```

- 注意：pc端圆形大小最大为238，字体最大为46，font-weight如果不想加粗可以去掉；mobi端圆形大小最大为130，字体最大为20，``force``的数据也有所不同，如下：

```javascript
force: {
                initLayout: 'circular',
                edgeLength: [10, 220],
                repulsion: 300,
                gravity: 0.1
            }
```

# 折线图数据

- 格式：

```javascript
[数值,数值....]
```

# 饼图数据
- 格式：

```javascript
[
        {value:数据1的值, name:'数据1的名'},
        {value:数据2的值, name:'数据2的名'}
    ]
```



# 请求单个数据
请求地址 /index.php?c=index&f=get_data
请求类型 POST
请求参数 
    month 月份
    week  星期

返回格式  json
返回值示例
{"month":"August","week":"3th Week","data":{"id":"4","month":"August","week":"3th Week","data":"{\"month\":\"August\",\"week\":\"3th Week\",\"period\":\"21 August - 27 August\",\"name\":\"Sonam Kapoor\",\"image\":\"http:\/\/www.feizl.com\/upload2007\/2014_08\/14081217152228.jpg\",\"hotkey\":\"Long Leg|Cute|Young|Beauty|Rich|Kind|White\",\"article\":\"100000\",\"platform\":\"104567\",\"media\":\"131433\",\"social\":\"500\",\"uc\":\"2000\",\"engagement\":\"231231232\",\"euc\":\"1000\",\"emedia\":\"1000\",\"eother\":\"1000\",\"hotComment\":[{\"name\":\"David\",\"content\":\"fdfdfdafdsfdfdfdsafdfd\"},{\"name\":\"David2\",\"content\":\"3333fdfdfdafdsfdfdfdsafdfd\"},{\"name\":\"David5\",\"content\":\"3333fdfdfdafdsfdfdfdsafdfd\"}]}"}}

# 请求数据列表
请求地址 /index.php?c=index&f=get_data_list
请求类型 POST
请求参数   无
返回格式  json
返回值示例

