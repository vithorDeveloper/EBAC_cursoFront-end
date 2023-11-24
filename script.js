$(document).ready(() => {

    const mostrarMsg = () => {
      if($('ol').children().length === 0){
        $('p').removeClass('hidden')
      }
      else{
        $('p').addClass('hidden')
      }
    }

    mostrarMsg()
  
  $('form').submit((e) => {
      e.preventDefault()

      const tarefa = $('input').val()
      const lista = $('ol')

      if($('input').val() === ''){
        alert("Campo de tarefa não preenchido")
      }
      else{
        $(`<li>${tarefa}</li>`).appendTo(lista)
  
        $('input').val('')
      }

      mostrarMsg()
    })

    $('ol').on('click', 'li', (function() {
      $(this).addClass('feito')

      alert("Muito bom, voce concluiu uma tarefa 🥳🎉")
    }))
})