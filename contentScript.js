body = document.body.innerHTML
first = body.lastIndexOf('uiScrollableAreaWrap scrollable" id="')
area = body.substr(first,50)
console.log(area)
start = area.indexOf('="')+2
end = area.indexOf('"',area.indexOf('="')+2)
id = area.substring(start,end)
console.log(id)
scrollarea = document.getElementById(id)
scrollarea.scrollTop = 0