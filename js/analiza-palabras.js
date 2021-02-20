let analizaPalabras = (palabras) => {
    console.log("#######")
    palabras.forEach((palabra, i) => {
        console.log(`Palabra ${i + 1}: ${palabra}`)
        console.log(`N de caracteres: ${palabra.length}`)
        console.log(`Deletreo ${palabra.toLowerCase().split("").join("-")}`)
        console.log(`La palabra ${(/ble/g).test(palabra) ? "si" : "no"} contiene "ble"`)
        console.log("#######")
    });
}