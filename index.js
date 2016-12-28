function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0, l = ranks.length ; i < l ; i++) {
    var newval = parseInt(ranks[i].innerHTML) + 1;
    ranks[i].innerHTML = newval.toString();
  }
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node');
  var query = grandNode.querySelectorAll('div');
  return query[query.length - 1]
}
