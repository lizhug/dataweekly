vm = new Vue({
	el: ".container",
	data: 
		list: []
		data: 
			month: "August"
			week: "4th Week"
			period: "21 August - 27 August"
			name: "Sonam Kapoor"
			image: "http://www.feizl.com/upload2007/2014_08/14081217152228.jpg"
			hotkey: [
				[
					"Long Leg", 10
				]
				[
					"Cute", 10
				]
				[
					"Long Leg 2", 10
				]
			]
			article: "100000"
			platform: "104567"
			media: "131433"
			social: "500"
			uc: "2000"
			engagement: "231231232"
			euc: "1000"
			emedia: "1000"
			eother: "1000"
			hotComment: [
				{
					name: "David"
					content: "fdfdfdafdsfdfdfdsafdfd"
					like: 100
				}
				{
					name: "David2"
					content: "3333fdfdfdafdsfdfdfdsafdfd"
					like: 100
				}
				{ 
					name: "David3"
					content: "3333fdfdfdafdsfdfdfdsafdfd"
					like: 100
				}
			]
	methods:
		deleteComment: (index) ->
			this.data.hotComment.splice index, 1

		addComment: ->
			this.data.hotComment.push {
				name: "11"
				content: "222"
			}
		deleteHotkey: (index) ->
			this.data.hotkey.splice index, 1

		addHotkey: ->
			this.data.hotkey.push ['', '']
		submitData: ->
			this.$http.post(
				"/index.php?c=index&f=submit_data"
				{	
					data: this.data
				}
				{
					emulateJSON: true
				}
			).then((res) ->
				data = JSON.parse(res.body)

				if data.code is "400"
					alert data.message
				else
					alert data.message
			)
		deleteItem: (id) ->
			this.$http.post(
				"/index.php?c=index&f=delete_data"
				{	
					id: id
				}
				{
					emulateJSON: true
				}
			).then((res) ->
				data = JSON.parse(res.body)

				if data.code is "400"
					alert data.message
				else
					alert data.message
			)

		getDataList: ->

			this.$http.post(
				"/index.php?c=index&f=get_data_list"
				{
					emulateJSON: true
				}
			).then((res) ->
				if res.body
					data = JSON.parse(res.body)

					for item, index in data
						item['data'] = JSON.parse(item['data'])
						data[index] = item

					this.list = data
					this.initPage()
			)
		initPage: ->
			week = document.getElementById("data-week").value
			month = document.getElementById("data-month").value
			
			if month 
				for item in this.list
					console.log item['week'] == week, item['week'], item['month'], month, week
					if item['month'] is month and item['week'] is week
						this.data = item['data']
						break
	mounted: ->
		this.getDataList();

})