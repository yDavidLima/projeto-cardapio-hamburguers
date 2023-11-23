const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
    ]
    




//  VERSÃO RODOLFO
// const list = document.querySelector(".ul")
// const buttonForEach = document.querySelector(".mostrar-tudo")
// const buttonMap = document.querySelector(".mapear")
// const buttonsomarTudo = document.querySelector(".somar-tudo")
// const buttonFilter = document.querySelector(".filtrar")



// let myLi = ""

// function functionForEach(reutilizar){
    
//     myLi = ""
//     reutilizar.forEach(item =>{ 
//          myLi = myLi + `
//     <li>
//         <img src=${item.src}>
//         <h1>${item.name}</h1>
//         <p>R$ ${item.price.toFixed(2)}</p>
//     </li>
//     `
// })
//         list.innerHTML = myLi
//     }




//    function functionMap(){

    
//     const newArrayDescont = menuOptions.map((item) =>({

//             ...item,
//             price: item.price * 0.9,
                
        
// }))
// functionForEach(newArrayDescont)

            
//         }

//    function functionSomarTudo(){
//     const valorTotal = menuOptions.reduce((acc,item) => acc + item.price, 0)

     
    
//     list.innerHTML = `<li><p>A Soma De Todos Os Itens Do Menu é: ${valorTotal.toFixed(2)}</p></li>`

//     console.log(valorTotal)
//    }

//    function functionFilter(){

//         const filtrarVeganos = menuOptions.filter(item=> item.vegan)


//         functionForEach(filtrarVeganos)


//         console.log(filtrarVeganos)


//    }
 
// buttonFilter.addEventListener("click", functionFilter)
// buttonsomarTudo.addEventListener("click", functionSomarTudo)
// buttonForEach.addEventListener("click", () => functionForEach(menuOptions))
// buttonMap.addEventListener("click", functionMap)




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //VERSÃO DAVID LIMA

//     // Seleciona os botões e elementos HTML
// const buttonForEach = document.querySelector(".mostrar-tudo");
// const buttonMap = document.querySelector(".mapear");
// const buttonFilter = document.querySelector(".filtrar");
// const buttonReduce = document.querySelector(".somar-tudo");
// const resultadoDiv = document.createElement("div");
// resultadoDiv.classList.add("resultado-div");
// const ul = document.querySelector(".ul");

// // Função para exibir todos os itens
// function mostrarTudo() {
//     ul.innerHTML = ''; // Limpa a lista de itens anteriores
//     resultadoDiv.innerHTML = ''; // Limpar o resultado anterior

//     // Itera por todos os elementos em menuOptions
//     menuOptions.forEach(element => {
//         const li = document.createElement("li");

//         const img = document.createElement("img");
//         img.src = element.src;
//         li.appendChild(img);

//         const texto = document.createElement("h1");
//         texto.textContent = element.name;
//         li.appendChild(texto);

//         const p = document.createElement("p");
//         p.textContent = `R$ ${element.price.toFixed(2)}`;
//         li.appendChild(p);

//         ul.appendChild(li); // Adiciona o item à lista
//     });
// }

// // Função para aplicar um desconto a todos os itens e exibi-los
// function mapearDesconto() {
//     ul.innerHTML = ''; // Limpa a lista de itens anteriores
//     resultadoDiv.innerHTML = ''; // Limpar o resultado anterior

//     // Usando map para criar um novo array com desconto de 10%
//     const newArrayDescont = menuOptions.map(item => {
//         const desconto = item.price * 0.9;
//         return {
//             name: item.name,
//             price: desconto,
//             src: item.src
//         };
//     });

//     // Itera por todos os elementos no novo array
//     newArrayDescont.forEach(element => {
//         const li = document.createElement("li");

//         const img = document.createElement("img");
//         img.src = element.src;
//         li.appendChild(img);

//         const texto = document.createElement("h1");
//         texto.textContent = element.name;
//         li.appendChild(texto);

//         const p = document.createElement("p");
//         p.textContent = `R$ ${element.price.toFixed(2)}`;
//         li.appendChild(p);

//         ul.appendChild(li); // Adiciona o item à lista
//     });
// }

// // Função para filtrar e exibir itens veganos
// function filtrarVeganos() {
//     ul.innerHTML = ''; // Limpa a lista de itens anteriores
//     resultadoDiv.innerHTML = ''; // Limpar o resultado anterior

//     // Filtra os itens veganos de menuOptions
//     const veganos = menuOptions.filter(item => item.vegan);

//     // Itera por todos os elementos no array filtrado
//     veganos.forEach(item => {
//         const li = document.createElement("li");

//         const img = document.createElement("img");
//         img.src = item.src;
//         li.appendChild(img);

//         const texto = document.createElement("h1");
//         texto.textContent = item.name;
//         li.appendChild(texto);

//         const p = document.createElement("p");
//         p.textContent = `R$ ${item.price.toFixed(2)}`;
//         li.appendChild(p);

//         ul.appendChild(li); // Adiciona o item à lista
//     });
// }

// // Anexa o elemento resultadoDiv ao corpo do documento
// document.body.appendChild(resultadoDiv);

// // Função para calcular o total de preços e exibi-lo
// function somarTudo() {
//     // Calcula o total dos preços usando reduce
//     const total = menuOptions.reduce((acumulador, item) => acumulador + item.price, 0);

//     ul.innerHTML = ''; // Limpa a lista de itens anteriores
//     resultadoDiv.innerHTML = total > 0 ? `Total: R$ ${total.toFixed(2)}` : ""; // Exibe o total, se maior que zero
// }
