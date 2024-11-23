class Calculadora{
    somar(a,b){
        return a+b
    }
    subtrair(a,b){
        return a-b
    }
    multiplicar(a,b){
        return a*b
    }
    dividir(a,b){
        if (b===0) throw new Error("Divisao por zero nao é permitida")
        return a/b
    }

   
} 
module.export = Calculadora
    