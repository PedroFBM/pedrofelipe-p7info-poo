function printDec(value: number): string{
    let dec = (value).toString(10)
    return dec
}

function printHex(value: number): string{
    let hex = (value).toString(16)
    return hex
}

function printOct(value: number): string{
    let oct = (value).toString(8)
    return oct
}

function printBin(value: number): string{
    let bin = (value).toString(2)
    return bin
}

function imprimirTabela(): void{
    console.log('Decimal Octal Hexadecimal  Binario')
    console.log('--------- ------ ----------- -------')
    for( let i = 0; i <=225; i++){
        console.log(`${printDec(i)}         ${printOct(i)}      ${printHex(i)}           ${printBin(i)}`)
    }
}

imprimirTabela()
