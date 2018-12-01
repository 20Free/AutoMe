
function getScrollableId(){
	body = document.body.innerHTML
	first = body.lastIndexOf('uiScrollableAreaWrap scrollable" id="')
	area = body.substr(first,50)
	console.log(area)
	start = area.indexOf('="')+2
	end = area.indexOf('"',area.indexOf('="')+2)
	id = area.substring(start,end)
	console.log(id)
	return id
}

function ScrollMax(maxscrolls){
	id = getScrollableId()
	var scrollarea = document.getElementById(id)

	count = 0

	console.log('waiting for seconds: '+maxscrolls)

	inter = setInterval(function(){
		scrollarea.scrollTop = 0
		console.log(count)
		count++
	}, 1000)
	setTimeout(function(){
		clearTimeout(inter)
		text = scrollarea.innerHTML
		parse_text(scrollarea)
	}, 1000*maxscrolls)
}

function start(){
	maxScrolls = 5
	console.log("Max Scolls is "+maxScrolls)
	ScrollMax(maxScrolls)
}

function parse_text(textDom){
	messages = document.getElementById('js_1')
	message_array = messages.getElementsByClassName('_1t_p')
	theirs = []
	mine = []
	dict = {}
	count = 0
	for (var id = 0; id < message_array.length; id++) {

		messagegroup = message_array[id].getElementsByClassName('_41ud')[0]
		message_group_messages = messagegroup.getElementsByClassName('_58nk')
		message_group_orientation = messagegroup.getElementsByClassName('_3058')[0].getAttribute('data-tooltip-position')

		message_texts = []

		for (var mes = 0; mes < message_group_messages.length; mes++){
			message_texts.push(message_group_messages[mes].innerText)
		}

		if (message_group_orientation == "right"){
			mine = message_texts
			dict[count] = [mine,theirs]
			count++
		}else{
			theirs = message_texts
		}

	}
	console.log(dict)
}


start()