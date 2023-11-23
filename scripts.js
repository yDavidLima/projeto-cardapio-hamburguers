const buttonForEach = document.querySelector(".mostrar-tudo")
const buttonMap = document.querySelector(".mapear")
const buttonReduce = document.querySelector(".somar-tudo")
const buttonFilter = document.querySelector(".filtrar")

const listUl = document.querySelector(".ul")


function functionForEach(reutilizar) {
    let myLi = ""

    reutilizar.forEach(element => {

        myLi +=
            `
        <li>
            <img src=${element.src}>
            <h1>${element.name}</h1>
            <p>R$ ${element.price.toFixed(2)}</p>
        </li>
        `
        listUl.innerHTML = myLi

    });
}

function functionMap() {

    const newArrayDescont = menuOptions.map(item => ({

        ...item,
        price: item.price * 0.9


    }))
    console.log(newArrayDescont)
    functionForEach(newArrayDescont)

}


function functionSomarTudo() {

    const total = menuOptions.reduce((acc, item) => acc + item.price, 0)

    listUl.innerHTML =
    `<li>
        <p>Valor total dos Pedidos:
        R$ ${total.toFixed(2)}</p>
    </li>`

}

    function functionFiltrar(){

        const filtrarVeganos = menuOptions.filter(item => item.vegan)

        console.log(filtrarVeganos)
        functionForEach(filtrarVeganos)


    }





buttonFilter.addEventListener("click", functionFiltrar)
buttonReduce.addEventListener("click", functionSomarTudo)
buttonMap.addEventListener("click", functionMap)
buttonForEach.addEventListener("click", () => functionForEach(menuOptions))