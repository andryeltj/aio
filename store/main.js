$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
     setTimeout(function(){
      location.reload();
     },3000)
  });
console.log('Loja Carregada');
});
