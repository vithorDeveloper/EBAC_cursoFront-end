$(document).ready(function(){

  $('#telefone').mask("(00) 00000-0000");

  $('form').validate({

    rules: {
      telefone: {required: true},
    },

    messages: {
      telefone: "o campo Telefone é obrigatório",
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

})