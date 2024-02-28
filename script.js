const list = document.querySelector("ul")
const buttonShowingAll = document.querySelector(".showing-all")
const buttonMappingTheItems = document.querySelector(".mapping-the-items")
const buttonSummingTheItems = document.querySelector(".summing-the-items")
const buttonFilteringTheItems = document.querySelector(".filtering-the-items")


function formattingValues(value) {
    const newsValues = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newsValues
}


function showingAll(arrayProduct) {
    let myLi = ''

    arrayProduct.forEach((product) => {
        myLi = myLi + `
    <li>
    <img id="i" src=${product.src}>
    <p id="p">${product.name}</p>
    <p> ${formattingValues(product.price)}</p>
    </li>
    `
    })

    list.innerHTML = myLi
}

function mappingTheItems() {
    const priceDiscount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // dando 10% de desconto nos itens.

    }))

    showingAll(priceDiscount)
}

function summingTheItems() {
    const totalValue = menuOptions.reduce((acc, currency) => acc + currency.price, 0)
    list.innerHTML = `
    <li>
    <p> O valor total dos itens é ${formattingValues(totalValue)}</p>
    </li>
    `
}

function filteringTheItems() {
    const newFilter = menuOptions.filter((product) => product.vegan === true)
    showingAll(newFilter)
}

buttonShowingAll.addEventListener('click', () => showingAll(menuOptions))
buttonMappingTheItems.addEventListener('click', mappingTheItems)
buttonSummingTheItems.addEventListener('click', summingTheItems)
buttonFilteringTheItems.addEventListener('click', filteringTheItems)
