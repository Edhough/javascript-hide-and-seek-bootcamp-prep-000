function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var elements = document.querySelectorAll('.ranked-list')
  for(let i = 0, l = elements.length; i < l; i++) {
    elements[i].innerHTML = (parseInt(elements[i], 10) + n).toString()
  }
}

function deepestChild() {
  var grandNode = document.querySelectorAll('div#grand-node')
  //grandNode = document.querySelector('#grand-node div div div div')
  var next = grandNode

  while(next.children) {
  next = next.children[0]
  }


  return next[0]
}
