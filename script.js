$(document).ready(function(){

  $('#telefone').mask("(00) 00000-0000");
  $('#cpf').mask("000.000.000.00");
  $('#cep').mask("00000-000");

  $('form').validate({

    rules: {
      telefone: {required: true},
      cpf: {required: true},
      cep: {required: true},
    },

    messages: {
      telefone: "o campo Telefone é obrigatório",
      cpf: "o campo CPF é obrigatório",
      cep: "o campo CEP é obrigatório",
    },

    submitHandler: (function(form){
        
      if(form){
        form.submit()
        alert("Informações cadastradas com sucesso! ✅")
      }
    }),

    invalidHandler: (function(evento, validator){

      if(validator){
        alert("Reveja o formulário, pode haver campos obrigátorios vazios!")
      }
    })

  });

  $('#carrossel').slick({
    autoplay: true,
    fade:true,
    speed: 4000,
  })

})