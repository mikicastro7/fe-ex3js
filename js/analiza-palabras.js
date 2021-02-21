let analizaPalabras = (palabras) => {
    console.log("#######")
    palabras.forEach((palabra, i) => {
        console.log(`Palabra ${i + 1}: ${palabra}`)
        console.log(`N de caracteres: ${palabra.length}`)
        console.log(`Deletreo ${palabra.toLowerCase().split("").join("-")}`)
        console.log(`La palabra ${(/ble/ig).test(palabra) ? "si" : "no"} contiene "ble"`)
        console.log(`La palabra es ${palabra.length % 2 === 0 ? "par" : "impar"} y ${(/[A-Z]/).test(palabra[0]) ? "" : "no "}empieza por mayúscula`)
        console.log("#######")
    });
}