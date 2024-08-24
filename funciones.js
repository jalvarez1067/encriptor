function encriptar() {
    // Obtener el texto del textarea con la clase 'contenido-text-input'
    let texto = document.querySelector('.contenido-text-input').value;

    // Reemplazar las vocales según las reglas especificadas
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado en el div con la clase 'contenido-encriptado-texto'
    let divTexto = document.querySelector('.resultado');
    divTexto.innerText = textoEncriptado;

    // Crear y agregar el botón de copiar
    agregarBotonCopiar();
}

function desencriptar() {
    // Obtener el texto del textarea con la clase 'contenido-text-input'
    let texto = document.querySelector('.contenido-text-input').value;

    // Reemplazar las cadenas encriptadas por las vocales originales
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el div con la clase 'contenido-encriptado'
    document.querySelector('.resultado').innerText = textoDesencriptado;
    
    // Crear y agregar el botón de copiar
    agregarBotonCopiar();
}

function agregarBotonCopiar() {
    let divboton = document.querySelector('#boton');
    // Verificar si el botón ya existe
    let botonExistente = divboton.querySelector('.boton-copiar');
    if (botonExistente) {
        return; // Si el botón ya existe, no hacer nada
    }

    // Crear el botón de copiar
    let botonCopiar = document.createElement('button');
    botonCopiar.innerText = 'Copiar';
    botonCopiar.className = 'boton-copiar';
    botonCopiar.onclick = copiarTextoDiv;

    // Agregar el botón al div
    divboton.appendChild(botonCopiar);
}

function copiarTextoDiv() {
    let div = document.querySelector('.resultado');
    // Verificar si el navegador soporta la API de Portapapeles
    if (navigator.clipboard) {
        // Usar la API de Portapapeles para copiar el texto
        navigator.clipboard.writeText(div.innerText).then(function() {
            alert("Texto copiado al portapapeles");
        }).catch(function(err) {
            console.error("Error al copiar el texto: ", err);
        });
    }
}












