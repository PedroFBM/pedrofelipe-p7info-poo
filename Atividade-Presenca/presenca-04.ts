class Queue{
    stack: number[] = []
    nItens = 0
    nFirst = 0
    maxStack = 4
    end = 0

    isEmpty(): number{
        if(this.nItens == 0){
            return 1
        }else{
            return 0
        }
    }

    isFull(): number{
        if(this.end == this.maxStack){
            return 1
        }else{
            return 0
        }
    }

    push(num: number): void{
        if(this.isFull() == 1){
            console.log('Fila cheia')
        }else{
            this.stack[this.end] = num
            console.log('Elemento '+num+' Adicionado!')
            this.end++
            this.nItens++
        }
    }

    pop(): number | void{
        if(this.isEmpty() == 1){
            console.log('Fila vazia')
        }else{
            let aux = this.stack[this.nFirst]
            console.log(this.stack[this.nFirst]+' saiu da fila')
            this.nFirst++
            this.nItens--
            return aux
        }
    }

    view(): void{
        if(this.isEmpty() == 1){
            console.log('Fila Vazia')
         }else{
            let p = this.nFirst
            for(let i = 0; i < this.nItens; i++){
                console.log('Pilha contem elemento '+this.stack[p])
                p++    
            }
        }
    }
}

let queue: Queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)
queue.view()
queue.pop()
queue.view()
queue.pop()
queue.view()
