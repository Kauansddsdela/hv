const assert = require("assert")
const Calculadora = require("../calculadora")

describe("Calculadora", function(){
    let calc

    beforeEach (function(){
        calc = new Calculadora()
    })
     it("Deve somar dois numeros corretamente", function(){
        const resultado = cal.somar(5,3)
        assert.strictEqual(resultado, 8)
     })
     it("Deve subtrair dois numeros corretamente", function(){
        const resultado = cal.subtrair(10,4)
        assert.strictEqual(resultado, 6)
     })
     it("Deve multiplicar dois numeros corretamente", function(){
        const resultado = cal.multiplicar (3, 7 )
        assert.strictEqual(resultado, 21)
     })
     it("Deve dividir dois numeros corretamente", function(){
        const resultado = cal.dividir(5,3)
        assert.strictEqual(resultado, 8)
     })
     it("Deve somar dois numeros corretamente", function(){
        const resultado = cal.s(5,3)
        assert.strictEqual(resultado, 8)
     })

     
})