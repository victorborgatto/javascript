function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO]Verifique os dados e tente novamente!')
} else{
    var fsex = document.getElementsByClassName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = ` Idade calculada: ${idade}`
}

}