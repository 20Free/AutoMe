
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
	textFieldsd()
}

function textFieldsd(){
	temp = document.getElementsByClassName("_1p1v")
	z = temp[0]
	z.innerHTML =""
	body = document.getElementsByClassName("_1mf _1mj")
	x = body[0]
	x.innerHTML = "It Works"
	console.log(x.innerHTML)
	var y = document.getElementsByClassName("_30yy _381h_ _39b1")
	y.onclick()

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

function call_api(text){
	var xhttp = new XMLHttpRequest();
	var url = "https://api.textrazor.com"
	var body = "extractors=words&text="+text

	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.setRequestHeader("x-textrazor-key","891347e4cb02cafd44438f2df2337549c08c4da102061da01581d11a")
	xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhttp.setRequestHeader("Access-Control-Allow-Credential", "*");
	xhttp.setRequestHeader("Access-Control-Allow-Origin", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
	xhttp.setRequestHeader("Access-Control-Allow-Origin", "Origin, Content-Type, X-Auth-Token");

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		  console.log(this.responseText)
		}
	};
	xhttp.send(body);
}

function simulateKeyEvent() {
	elem = document.getElementsByClassName('_5rpu')[0]
	elem2 = elem.children[0]
	elem3 = elem2.children[0]
	elem4 = elem3.children[0]
	elem5 = elem4.children[0]

	elem6 = elem.parentElement
	elem7 = elem6.parentElement
	elem8 = elem7.parentElement

	// elem.addEventListener("keypress", function(e){ console.log(e.key, e.char, e.keyCode) })
	// elem2.addEventListener("keypress", function(e){ console.log(e.key, e.char, e.keyCode) })

	console.log("typing..")
	var evt = new KeyboardEvent("keydown", {
		bubbles : false,
		cancelable : false,
		char : "q",
		key : "q",
		shiftKey : false,
		keyCode : 113
	});
	var evt2 = new KeyboardEvent("keypress", {
		bubbles : false,
		cancelable : false,
		char : "q",
		key : "q",
		shiftKey : false,
		keyCode : 113
	});
	elem.dispatchEvent(evt);
	elem.dispatchEvent(evt2);

	elem2.dispatchEvent(evt);
	elem2.dispatchEvent(evt2);

	elem3.dispatchEvent(evt);
	elem3.dispatchEvent(evt2);

	elem4.dispatchEvent(evt);
	elem4.dispatchEvent(evt2);

	elem5.dispatchEvent(evt);
	elem5.dispatchEvent(evt2);

	elem6.dispatchEvent(evt);
	elem6.dispatchEvent(evt2);

	elem7.dispatchEvent(evt);
	elem7.dispatchEvent(evt2);

	elem8.dispatchEvent(evt);
	elem8.dispatchEvent(evt2);

	window.dispatchEvent(evt)
	window.dispatchEvent(evt2);
}
setTimeout(simulateKeyEvent,3000)
//call_api("My name is judah, i am a boy, boys are slow to grow hair, hair is different colors")
//start()