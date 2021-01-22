$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
     setTimeout(function(){
      location.reload();
     },5000)
  });
  var indice_selecionado = -1; //Índice do item selecionado na lista
  var BOOK = localStorage.getItem("BOOK");// Recupera os dados armazenados
  BOOK = JSON.parse(BOOK); // Converte string para objeto

  var appname="", idrecipe="",category="",recipejar="",friendnm="",appicon="",appbg="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="",recipenm="",appnm="";
  var stdBK="https://images.all-free-download.com/images/graphiclarge/abstract_green_blue_low_poly_background_vector_illustration_570260.jpg";
  var stdIC="https://raw.githubusercontent.com/PapirusDevelopmentTeam/papirus-icon-theme/master/Papirus/64x64/mimetypes/application-x-iso9660-appimage.svg"
  var iteml, ctItems="0",ItmClss="";
  var ElHead1='<div class="pkg_disp '+ItmClss+'" alt="'+ctItems+'" style="background:url(\'';
  var ElHead2='\') no-repeat center;background-size:auto 100%">';
  var appic1='<button class="app" style="background:url(\'';
  var appic2='\') no-repeat center 1.3em;background-size:50% auto"></button>';
  var ckrecipe="",itmBT="",acorpo;
  
  function ClassyBook(){
	$('div.book li a:nth-child(1)').addClass('appname');
	$('div.book li a:nth-child(2)').addClass('idrecipe');
	$('div.book li a:nth-child(3)').addClass('category');
	$('div.book li a:nth-child(4)').addClass('recipejar');
	$('div.book li a:nth-child(5)').addClass('friendnm');
	$('div.book li a:nth-child(6)').addClass('appicon');
	$('div.book li a:nth-child(7)').addClass('appbg');
	$('div.book li a:nth-child(8)').addClass('appimg1');
	$('div.book li a:nth-child(9)').addClass('appimg2');
	$('div.book li a:nth-child(10)').addClass('appimg3');
	$('div.book li a:nth-child(11)').addClass('appimg4');
	$('div.book li a:nth-child(12)').addClass('appdesc');
  }
//Pega na lista de instalados checa com a quantidade disponivel no book e verifica se existe no CRUD, e adiciona ao mesmo. 
  function LerBOOK(){
    $("div.book li").each(function(){
	  appname=$(this).children("a:nth-child(1)").text();
	  idrecipe=$(this).children("a:nth-child(2)").text();
	  category=$(this).children("a:nth-child(3)").text();
	  recipejar=$(this).children("a:nth-child(4)").text();
	  friendnm=$(this).children("a:nth-child(5)").text();
	  appicon=$(this).children("a:nth-child(6)").text();
	  appbg=$(this).children("a:nth-child(7)").text();
	  appimg1=$(this).children("a:nth-child(8)").text();
	  appimg2=$(this).children("a:nth-child(9)").text();
	  appimg3=$(this).children("a:nth-child(10)").text();
	  appimg4=$(this).children("a:nth-child(11)").text();
	  appdesc=$(this).children("a:nth-child(12)").text();
      GeraItMenu();
    });
  }
  var qtdDisp=parseInt("0");

  function CkInstall(){
    $("div.list li").each(function(){
	  recipenm=$(this).children("a:nth-child(1)").text();
	  appnm=$(this).children("a:nth-child(2)").text();
      if (ckrecipe == recipenm){itmBT="<button class='del'>Remover</button>"};
      if(itmBT == "" || itmBT == "<button class='add'>Instalar</button>")
		    {itmBT="<button class='add'>Instalar</button>"};
    });
  }
  if(BOOK == null){ BOOK = [] };

//Launchers
	ClassyBook();
	LerBOOK();
  console.log('Loja Carregada');
//Prateleira(MENU)
  
  function GeraItMenu(){
	    ctItems=parseInt(ctItems)+1;
        if (appbg == "."){appbg=stdBK}
        if (appicon == "."){appicon=stdIC}
        ItmClss=appname+" "+idrecipe+" "+friendnm;
        var ElHead=ElHead1+appbg+ElHead2;
		var itName="<a class='nameapp'>"+friendnm+"</a>"
        var appic=appic1+appicon+appic2;
        ckrecipe=idrecipe;	CkInstall();
        var itBotton="<span>"+itmBT+"</span>"; itmBT="";
        iteml=ElHead+appic+itName+itBotton+"</div>";
        acorpo=acorpo+iteml;ItmClss="";
	};
  $("article").html("<div class='menu'>"+acorpo+"</div><div class='news'></div>");acorpo="";
  $("div.news").html($("div.newspaper").html());$('div.newspaper').remove();
//Pesquisa
  $('.searchbar').keyup(function(){
	  var $(this).class();
	  $('.pkg_disp').addClass("hide");
	  $(this).html();
	  });
});
