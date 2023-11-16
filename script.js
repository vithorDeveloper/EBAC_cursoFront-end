const form = document.querySelector('form')

const compararNumeros = (num1, num2) => {

  if (num1 === null && num2 === null || num1 === num2) {
    return "error";
  } 
  else if (num1 > num2) {
    return "primeiro maior";
  } 
  else if (num2 > num1) {
    return "segundo maior";
  } 
}


form.addEventListener( 'submit', (e) => {

  e.preventDefault();

  const primeiroNumero = document.querySelector('#num1')
  const segundoNumero = document.querySelector('#num2')
  const msgSucesso = document.querySelector('#msgTrue')
  const msgError = document.querySelector('#msgFalse')
  const semValor = document.querySelector('#semValores')

  const resultado = compararNumeros(primeiroNumero.value, segundoNumero.value)

  switch (resultado) {
    case "segundo maior":
        msgSucesso.classList.remove('hidden')
        msgError.classList.add('hidden')
        semValor.classList.add('hidden')
    break;
    case "primeiro maior":
        msgError.classList.remove('hidden')
        msgSucesso.classList.add('hidden')
        semValor.classList.add('hidden')
    break;
    case "error":
        semValor.classList.remove('hidden')
        msgError.classList.add('hidden')
        msgSucesso.classList.add('hidden')
    break;
    default:
      break;
  }

  primeiroNumero.value = ''
  segundoNumero.value = ''
})