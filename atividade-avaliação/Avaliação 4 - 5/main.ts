//
//

import {Cliente} from "./cliente"
import {TipoCliente} from "./tipo_cliente"
import {Produto} from "./produto"
import {NotaFiscal} from "./nota_fiscal"
import {ItemNotaFiscal} from "./item_nota_fiscal"

//Criar um Cliente 

let cliente = new Cliente(1, "Pedro Felipe Borges Moura", 100, "200.345.987-11",TipoCliente.PESSOA_FISICA);
console.log("=========================");
console.log(cliente);
console.log("=========================");
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Código=" + cliente.getcodigo());
console.log("Cnpj/Cpf=" + cliente.getcnpjcpf());
console.log("TipoCliente=" + cliente.gettipo());

let p1 = new Produto(1, 150, "Arroz ", 8.00);
let p2 = new Produto(2, 200,"Suco de goiaba", 7.00);
let p3 = new Produto(3, 300, "Farofa Yoki", 5.50);
let p4 = new Produto(4, 350, "Agua benta", 8.50);
let p5 = new Produto(5, 400, "Tapete mágico", 1.70);

let nf = new NotaFiscal(1, 201, cliente);

let itnf1 = new ItemNotaFiscal(1, 1, 10, p1);
let itnf2 = new ItemNotaFiscal(2, 2, 10, p2);
let itnf3 = new ItemNotaFiscal(3, 3, 10, p3);
let itnf4 = new ItemNotaFiscal(4, 4, 10, p4);
let itnf5 = new ItemNotaFiscal(5, 5, 10, p4);

itnf1.valorItemNotaFiscal();
itnf2.valorItemNotaFiscal();
itnf3.valorItemNotaFiscal();
itnf4.valorItemNotaFiscal();
itnf5.valorItemNotaFiscal();

nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);
nf.adicionarItem(itnf3);
nf.adicionarItem(itnf4);
nf.adicionarItem(itnf5);

console.log("=========================");
console.log(nf);
console.log("=========================");

nf.imprimirNotaFiscal();
