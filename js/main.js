const elList = document.querySelector(".list")


for (let i of pokemons){
    //create
    const item = document.createElement('li')
    const img = document.createElement('img')
    const divWrapper = document.createElement('div')
    const divTop = document.createElement('div')
    const title = document.createElement('h2')
    const titleImg = document.createElement('img')
    const desc = document.createElement('p')
    const divBottom = document.createElement('div')
    const bottomLeft = document.createElement('p')
    const bottomRight = document.createElement('p')




    //setAtribut class
    item.setAttribute("class", "item bg-light  text-center w-25 border border-2 border-dark ")
    divWrapper.setAttribute("class", "divWrapper border-top border-2 border-dark px-4 text-start")
    divTop.setAttribute("class", "d-flex align-items-center justify-content-between")
    divBottom.setAttribute("class", "d-flex align-items-center")
    bottomLeft.setAttribute("class", "me-3")

    //setAtribute

    img.setAttribute("src", i.img)
    title.textContent = i.name
    titleImg.setAttribute("src", "/images/like.svg")
    desc.textContent = i.type
    bottomLeft.textContent = i.weight
    bottomRight.textContent = i.height






    //appendchlid
    elList.appendChild(item)
    item.appendChild(img)
    item.appendChild(divWrapper)
    divWrapper.appendChild(divTop)
    divWrapper.appendChild(desc)
    divWrapper.appendChild(divBottom)
    divTop.appendChild(title)
    divTop.appendChild(titleImg)
    divBottom.appendChild(bottomLeft)
    divBottom.appendChild(bottomRight)


}