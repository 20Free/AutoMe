
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
		text = scrollarea.innerText
		console.log(text)
	}, 1000*maxscrolls)
}

function start(){
	maxScrolls = 10
	console.log("Max Scolls is "+maxScrolls)
	ScrollMax(maxScrolls)
}

start()