$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
     setTimeout(function(){
      location.reload();
     },5000)
  });
//  $($("textarea.list").html).sort(asc_sort).appendTo('textarea.list');
  var indice_selecionado = -1; //Índice do item selecionado na lista
  var BOOK = localStorage.getItem("BOOK");// Recupera os dados armazenados
  BOOK = JSON.parse(BOOK); // Converte string para objeto
  if(BOOK == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    {BOOK = [];CriaBOOK();}
  var MENU = localStorage.getItem("MENU");// Recupera os dados armazenados
  MENU = JSON.parse(MENU); // Converte string para objeto
  if(MENU == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    {MENU = [];CriaMENU();}
  CriaBOOK();CriaMENU();
  var appname="", idrecipe="",category="",appicon="",appbackground="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="",recipenm="",appnm="";
  function CriaBOOK() {
	var board = JSON.stringify({
	nameapp:appname,namerecipe:idrecipe,category:category,icon:appicon,background:appbackground,img1:appimg1,img2:appimg2,img3:appimg3,img4:appimg4,desc:appdesc});
	BOOK.push(board);
	localStorage.setItem("BOOK", JSON.stringify(BOOK));
  	}
  function CriaMENU() {
	var board = JSON.stringify({
	recipe:recipenm,app:appnm});
	MENU.push(board);
	localStorage.setItem("MENU", JSON.stringify(MENU));
	}
//Pega na lista de instalados checa com a quantidade disponivel no book e verifica se existe no CRUD, e adiciona ao mesmo. 
  var qtdDisp=parseInt("0");
  function checkInDB(){
	  var indice=qtdDisp;
	  var ind = JSON.parse(MENU[indice]);
	  if(ind.recipe==recipenm){console.log("Instalado: "+recipenm);}
	    else{console.log("Adicionando: "+recipenm+", "+appnm);};
  }
  function countDisp(){
    $("div.book li").each(function(){
	  qtdDisp=qtdDisp+("1");
	  checkInDB();
    });
  }
  $("div.list li").each(function(){
	  recipenm=$(this).children("a:nth-child(1)").text();
	  appnm=$(this).children("a:nth-child(2)").text();
	  console.log(recipenm+", "+appnm);
	  countDisp();
    });
  console.log('Loja Carregada');
});
