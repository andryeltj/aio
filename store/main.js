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
  //if(BOOK == null) // Caso não haja conteúdo, iniciamos um vetor vazio
//    {BOOK = [];CriaBOOK();}
  //var MENU = localStorage.getItem("MENU");// Recupera os dados armazenados
  //MENU = JSON.parse(MENU); // Converte string para objeto
  //if(MENU == null) // Caso não haja conteúdo, iniciamos um vetor vazio
  //  {MENU = [];CriaMENU();}
//  CriaBOOK();CriaMENU();
  var appname="", idrecipe="",category="",appicon="",recipejar="",appbg="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="",recipenm="",appnm="";
  function CriaBOOK() {
	var board = JSON.stringify({
	nameapp:appname,namerecipe:idrecipe,category:category,jar:recipejar,icon:appicon,background:appbg,img1:appimg1,img2:appimg2,img3:appimg3,img4:appimg4,desc:appdesc});
	BOOK.push(board);
	localStorage.setItem("BOOK", JSON.stringify(BOOK));
  	}
  function CriaMENU() {
	var board = JSON.stringify({
	recipe:recipenm,app:appnm});
	MENU.push(board);
	localStorage.setItem("MENU", JSON.stringify(MENU));
	}
//Indentificando os items em Book.
  function(){
	$('div.book li a:nth-child(1)').addClass('appname');
	$('div.book li a:nth-child(2)').addClass('idrecipe');
	$('div.book li a:nth-child(3)').addClass('category');
	$('div.book li a:nth-child(4)').addClass('recipejar');
	$('div.book li a:nth-child(5)').addClass('appicon');
	$('div.book li a:nth-child(6)').addClass('appbg');
	$('div.book li a:nth-child(7)').addClass('appimg1');
	$('div.book li a:nth-child(8)').addClass('appimg2');
	$('div.book li a:nth-child(9)').addClass('appimg3');
	$('div.book li a:nth-child(10)').addClass('appimg4');
	$('div.book li a:nth-child(11)').addClass('appdesc');
  }
//Pega na lista de instalados checa com a quantidade disponivel no book e verifica se existe no CRUD, e adiciona ao mesmo. 
  function StoreBook(){
	  var item = JSON.stringify({
	    'nameapp':appname,'namerecipe':idrecipe,'category':category,'jar':recipejar,
	    'icon':appicon,'background':appbg,'img1':appimg1,'img2':appimg2,'img3':appimg3,'img4':appimg4,'desc':appdesc  
	  });
	  var appname="", idrecipe="",category="",appicon="",recipejar="",appbg="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="",recipenm="",appnm="";
	  BOOK.push(item);
	  localStorage.setItem("BOOK", JSON.stringify(BOOK));
  }
  function LerBook(){
	  BOOK = [];
    $("div.book li").each(function(){
	  appname=$(this).children("a:nth-child(1)").text();
	  idrecipe=$(this).children("a:nth-child(2)").text();
	  category=$(this).children("a:nth-child(3)").text();
	  recipejar=$(this).children("a:nth-child(4)").text();
	  appicon=$(this).children("a:nth-child(5)").text();
	  appbg=$(this).children("a:nth-child(6)").text();
	  appimg1=$(this).children("a:nth-child(7)").text();
	  appimg2=$(this).children("a:nth-child(8)").text();
	  appimg3=$(this).children("a:nth-child(9)").text();
	  appimg4=$(this).children("a:nth-child(10)").text();
	  appdesc=$(this).children("a:nth-child(11)").text();
	  StoreBook;
    });
	  $(".book").hide();
  }
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
  function LerLIST(){
    $("div.list li").each(function(){
	  recipenm=$(this).children("a:nth-child(1)").text();
	  appnm=$(this).children("a:nth-child(2)").text();
	  console.log(recipenm+", "+appnm);
//	  countDisp();
    });
  }
  console.log('Loja Carregada');
});
