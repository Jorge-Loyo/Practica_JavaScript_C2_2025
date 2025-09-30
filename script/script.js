//eventos

function cambiarDemo() {
    const original = document.getElementById
    (`Demo`).innerText
    setTimeout(function() {
        document.getElementById(`Demo`).innerText
         = `texto cambiado`;
    }, 2000);
    document.getElementById(`Demo`).innerText =
    original;
}

    setTimeout(function() {
        document.getElementById(`Demo`).innerText = original;
        document.getElementById(`Demo`).style.color = `black`;
    }, 2000);

function cambiarColor() {
    let label = document.getElementById
    (`label`);

    switch (document.getElementById
        (`select`).value) {
        case `rojo`:
            label.style.color = `red`;
            break;
        case `verde`:
            label.style.color = `green`;
            break;
        case `azul`:
            label.style.color = `blue`;
            break;
        default:
            label.style.color = `black`;
            break;
    }
}

function mostrarLista() {
    const arrayLista = [
        `Carne`,
        `Pescado`,
        `Verduras`,
        `Frutas`,
        `Cereales`
    ]

    let items = ``;

    for (let index = 0; index < arrayLista.length; 
        index++) {
        setTimeout(() => {
            items += `<li>` +
            arrayLista[index] +
            `</li>`;
            document.
            getElementById(`lista`).innerHTML = items;
        }, 500 * index);
    }
    
}