$(document).ready(function(){

  $('#telefone').mask("(00) 00000-0000");
  $('#cpf').mask("000.000.000.00");
  $('#cep').mask("00000-000");

  $('form').validate({

    rules: {
      nome: {required: true},
      email: {required: true, email: true},
      telefone: {required: true},
      cpf: {required: true},
      endereco: {required: true},
      cep: {required: true},
    },

    messages: {
      nome: "o campo Nome é obrigatório",
      email: "o campo Email é obrigatório",
      telefone: "o campo Telefone é obrigatório",
      cpf: "o campo CPF é obrigatório",
      endereco: "o campo Endereço é obrigatório",
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