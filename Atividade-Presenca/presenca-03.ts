class Pilha{
    stack: number[] = []
    top: number = -1
    maxStack = 4

    isEmpty(): number{
        if(this.top == -1){
            return 1
        }else{
            return 0
        }
    }

    isFull(): number{
        if(this.top == this.maxStack){
            return 1
        }else{
            return 0
        }
    }

    push(num: number): void{
        if(this.isFull() == 1){
            console.log('Pilha cheia')
        }else{
            this.top++
            this.stack[this.top] = num
            console.log('Elemento '+num+' Adicionado!')
        }
    }

    pop(): number | void{
        if(this.isEmpty() == 1){
            console.log('Pilha vazia')
        }else{
            let aux = this.stack[this.top]
            console.log('Elemento '+aux+' Retirado')
            this.top--
            return aux
        }
    }

    view(): void{
        if(this.isEmpty() == 1){
            console.log('Pilha Vazia')
         }else{
            for(let i = 0; i <= this.top; i++){
                console.log('Pilha contem elemento '+this.stack[i])    
            }
        }
    }
}

let pilha: Pilha = new Pilha()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.push(5)
pilha.view()
pilha.pop()
pilha.view()
pilha.pop()
pilha.view()
