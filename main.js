const newButton = document.createElement('button');
document.body.appendChild(newButton)
newButton.append('Remove')
newButton.addEventListener('click', function(){
newMain.remove()
})
const newMain = document.createElement('main');
document.body.appendChild(newMain)
const newImg = document.createElement('img');
newMain.appendChild(newImg)
newImg.src = '182-1824450_house-stark-the-north-remembers.png';
const newAlink = document.createElement('a');
const link = document.createTextNode("a website");
newAlink.appendChild(link);
newAlink.title = "this is a website"
newAlink.href = 'https://towardsdatascience.com/3-numpy-image-transformations-on-baby-yoda-c27c1409b411';
newMain.appendChild(newAlink)