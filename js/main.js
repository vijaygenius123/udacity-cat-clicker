const catImg = document.getElementById('cat-image')
const clickCount = document.getElementById('click-count')

catImg.addEventListener('click',() => {
  clickCount.innerText = parseInt(clickCount.innerText, 10) + 1
}, false)
