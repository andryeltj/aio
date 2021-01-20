$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
     setTimeout(function(){
      location.reload();
     },3000)
  });
  var indice_selecionado = -1; //Índice do item selecionado na lista
  var BOOK = localStorage.getItem("BOOK");// Recupera os dados armazenados
  BOOK = JSON.parse(BOOK); // Converte string para objeto
  if(BOOK == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    {BOOK = [];CriaTB();}
  var MENU = localStorage.getItem("MENU");// Recupera os dados armazenados
  MENU = JSON.parse(MENU); // Converte string para objeto
  if(MENU == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    {MENU = [];CriaTB();}
  var appname="", idrecipe="",category="",appicon="",appbackground="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="";
  function CriaTB() {
	var board = JSON.stringify({
	nameapp:appname,namerecipe:idrecipe,category:category,icon:appicon,background:appbackground,img1:appimg1,img2:appimg2,img3:appimg3,img4:appimg4,desc:appdesc});
	BOOK.push(board);
	localStorage.setItem("BOOK", JSON.stringify(BOOK));
	}
  CriaTB();
  console.log('Loja Carregada');
});
