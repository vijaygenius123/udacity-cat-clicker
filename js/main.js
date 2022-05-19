const catList = document.getElementById('cat-list')


function Cat(name, imageURL, initialCount){
  this.name = name;
  this.imageURL = imageURL;
  this.count = initialCount;
  this.countSpan = null;
  this.setup = (rootNode) => {
    const catNameHeading = document.createElement('h1')
    const catImg = document.createElement('img')
    this.countSpan = document.createElement('span')
    const countHeading = document.createElement('h3')

    catNameHeading.innerText = `${this.name}`
    catImg.setAttribute('src', this.imageURL)
    this.countSpan.innerText = this.count;
    countHeading.innerHTML = ` Times clicked`;
    countHeading.prepend(this.countSpan)
    catImg.addEventListener('click',() => {
      this.countSpan.innerText =  ++(this.count);
    }, false)

    rootNode.append(catNameHeading)
    rootNode.append(catImg)
    rootNode.append(countHeading)
  }
}

const cat1 = new Cat('Jazz', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426', 0)
const cat2 = new Cat('Streak', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496', 0)

cat1.setup(catList)
cat2.setup(catList)
