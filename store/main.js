$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
//     setTimeout(function(){
 //     location.reload();
//     },5000)
//		setInterval(page_refresh, 3000);
	   setTimeout("location.reload();",3000);
  });
  var indice_selecionado = -1; //Índice do item selecionado na lista
  var BOOK = localStorage.getItem("BOOK");// Recupera os dados armazenados
  BOOK = JSON.parse(BOOK); // Converte string para objeto

  var appname="", idrecipe="",category="",recipejar="",friendnm="",appicon="",appbg="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="",recipenm="",appnm="";
  var stdBK="https://images.all-free-download.com/images/graphiclarge/abstract_green_blue_low_poly_background_vector_illustration_570260.jpg";
  var stdIC="https://raw.githubusercontent.com/PapirusDevelopmentTeam/papirus-icon-theme/master/Papirus/64x64/mimetypes/application-x-iso9660-appimage.svg"
  var iteml, ctItems="0",ItmClss="",appcat="0",fcat="",troca="",knife=0,itemw="",CallPage="",Working="0";
  var ckrecipe="",itmBT="",acorpo="",secapp,ctstp="0",dblista="",dblocal="",catpress="0";
  var funcao="0",animated="1";
  function includeHTML() {
	  var z, i, elmnt, file, xhttp;
	  /*loop through a collection of all HTML elements:*/
	  z = document.getElementsByTagName("*");
	  for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
		  /*make an HTTP request using the attribute value as the file name:*/
		  xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
			  if (this.status == 200) {elmnt.innerHTML = this.responseText;if(file == "lista.html"){dblista=this.responseText};if(file == "installed.html"){dblocal=this.responseText};}
			  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			  /*remove the attribute, and call this function once more:*/
			  elmnt.removeAttribute("w3-include-html");
			  includeHTML();
			}
		  }      
		  xhttp.open("GET", file, true);
		  xhttp.send();
		  /*exit the function:*/
		  console.log('reCall');
		  return;
		}
	  }
  };
  includeHTML();
  setTimeout(function(){
  $(".book").html(dblista);
  $(".lista").html(dblocal);
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
	  console.log('LerBook');
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
//	  console.log(category);
//      console.log(ctkk+","+category+","+fcat+","+appcat+".");
      GeraItMenu();
//      if(funcao == "0"){GeraItMenu();};
//      if(funcao == "1"){Identifica();};
    });
  }
  var qtdDisp=parseInt("0");
  //Categories
  function AvalCat(){
	  fcat="";fcat=category[index++];
//	  console.log("index"+index+","+fcat);
	  if (fcat=="E"){appcatnm="editores edictores";if($('.IdE').length == 0){$('.categories').append('<a class="IdE" alt="edit">Editores</a>');}};
	  if (fcat=="I"){appcatnm="imagem imagens images";if($('.IdI').length == 0){$('.categories').append('<a class="IdI" alt="image">Imagens</a>');}};
	  if (fcat=="T"){appcatnm="textos texts offices suites suítes";if($('.IdT').length == 0){$('.categories').append('<a class="IdT" alt="office">Office</a>');}};
	  if (fcat=="A"){appcatnm="audios spectros spectrums";if($('.IdA').length == 0){$('.categories').append('<a class="IdA" alt="audio">Audio</a>');}};
	  if (fcat=="M"){appcatnm="midias mídias medias players";if($('.IdM').length == 0){$('.categories').append('<a class="IdM" alt="player">Players</a>');}};
	  if (fcat=="W"){appcatnm="web internet redes networks browsers navegadores";if($('.IdW').length == 0){$('.categories').append('<a class="IdW" alt="web">Navegadores</a>');}};
	  if (fcat=="C"){appcatnm="webcams cameras câmeras";if($('.IdC').length == 0){$('.categories').append('<a class="IdC" alt="camera">Câmera</a>');}};
	  if (fcat=="S"){appcatnm="systems sistemas";if($('.IdS').length == 0){$('.categories').append('<a class="IdS" alt="system">Sistema</a>');}};
	  if (fcat=="U"){appcatnm="ferramentas utility utilities";if($('.IdU').length == 0){$('.categories').append('<a class="IdU" alt="util">Acessórios</a>');}};
	  if (fcat=="Z"){appcatnm="zip rar 7z packages compress comprimir comprime";if($('.IdZ').length == 0){$('.categories').append('<a class="IdZ" alt="zip">Pacotes</a>');}};
	  if (fcat=="D"){appcatnm="informations informacoes informações";if($('.IdD').length == 0){$('.categories').append('<a class="IdD" alt="info">Info</a>');}};
	  if (fcat=="G"){appcatnm="games jogos controls controles controlar";if($('.IdG').length == 0){$('.categories').append('<a class="IdG" alt="game">Games</a>');}};
	  if (fcat=="F️"){appcatnm="folders pastas files managers arquivos gerenciadores";if($('.IdF').length == 0){$('.categories').append('<a class="IdF" alt="manager">Arquivos</a>');}};
	  if (fcat=="V"){appcatnm="videos vídeos";if($('.IdV').length == 0){$('.categories').append('<a class="IdV" alt="video">Video</a>');}};
	  if (fcat=="B"){appcatnm="messengers mensageiros send sender enviar chat";if($('.IdB').length == 0){$('.categories').append('<a class="IdB" alt="chat">Chat</a>');}};
	  if (fcat=="P"){appcatnm="temas themes personalizar transformation icones icons";if($('.IdP').length == 0){$('.categories').append('<a class="IdP" alt="tema">Temas</a>');}};
	  if (fcat=="K"){appcatnm="kits meta package";if($('.IdK').length == 0){$('.categories').append('<a class="IdK" alt="kit">Kits</a>')}};
	  if(appcat==""){appcat=appcatnm}else{
	  if(appcat==appcatnm){troca=troca}else{appcat=appcat+" "+appcatnm;}}
	  if (index < category.length) {Categories();}
}
  var appcatnm="",ctkk=0,histo=0,index=0;
  function Categories(){
	if(chama==1){histo=histo+1;appcat="";chama=0};
//	console.log("Categories()");
    if (index < category.length) {
	  AvalCat();
//	  console.log(histo+" "+ctkk+","+category+","+fcat+","+appcat+".");
    }else{fcat="";appcat="";index=0};
  }
  function CkInstall(){
//    $("div.list li").each(function(){
//	  recipenm=$(this).children("a:nth-child(1)").text();
//	  if (ckrecipe == recipenm){itmBT="<div class='onsys'></div>"};
//    });
    
    $('div.menu div').each(function(){
	  ckrecipe=$(this).attr('alt');
	  if($("div.list li.I"+ckrecipe+" a:nth-child(1)").text() > ""){itmBT="<div class='onsys'></div>";		}
//		  console.log(ckrecipe+" true")}else{console.log(ckrecipe+" false")};
	  $(this).children('span').html(itmBT);
	  ckrecipe="",itmBT="";
	  });
  }
  function GeraItMenu(){
	    ctItems=parseInt(ctItems)+1;
        if (appbg == "."){appbg=stdBK};
        if (appicon == "."){appicon=stdIC};
        var friendnmf=friendnm.toLowerCase();
        idrecipe=idrecipe.toLowerCase();
        chama=1;index=0;Categories();var appnamex=appname;
//        console.log(appcat+appname+idrecipe+" "+friendnmf);
        if(friendnmf==appname){appname=""}else{appname=" "+appname}
		if(appnamex==idrecipe){idrecipe=""}else{idrecipe=" "+idrecipe};
		if(friendnmf.match(appnamex)){appname=""};
        ItmClss=appcat+appname+idrecipe+" "+friendnmf;appcat="";
//        console.log(ItmClss);
        var ElHead1='<div class="pkg_disp anitheme '+ItmClss+'" alt="'+appnamex+'" style="background:url(\'';
		var ElHead2='\') no-repeat center;background-size:auto 100%">';
        var ElHead=ElHead1+appbg+ElHead2;
		var itName="<a class='nameapp'>"+friendnm+"</a>"
		var appic1='<button class="app" alt="'+appnamex+'"style="background:url(\'';
		var appic2='\') no-repeat center 2em;background-size:50% auto"></button>';
        var appic=appic1+appicon+appic2;
        var itBotton="<span>"+itmBT+"</span>"; itmBT="";
        iteml=ElHead+appic+itName+itBotton+"<div class='extr'><div class='minidesc'></div></div></div>";
        acorpo=acorpo+iteml;ItmClss="";
//        console.log(" ");
  };
  function countslice(){
//	var nslice=$("span.searchbar").html();
	if (nslice >= knife) {
		$('.piebase').append('<span class="circle p'+knife+'" style="-webkit-transform:rotate('+knife+'deg)"></span>');
//		console.log(knife);
		knife=knife+1;
		countslice();
	}else{knife=0};
  };
  function Identifica(){
	  console.log('Identifica');
	  appname=$('div.book li.L'+secapp).html();
	  appname=$("div.book li.L"+secapp+" a:nth-child(1)").text();
	  idrecipe=$("div.book li.L"+secapp+" a:nth-child(2)").text();
	  category=$("div.book li.L"+secapp+" a:nth-child(3)").text();
	  recipejar=$("div.book li.L"+secapp+" a:nth-child(4)").text();
	  friendnm=$("div.book li.L"+secapp+" a:nth-child(5)").text();
	  appicon=$("div.book li.L"+secapp+" a:nth-child(6)").text();
	  appbg=$("div.book li.L"+secapp+" a:nth-child(7)").text();
	  appimg1=$("div.book li.L"+secapp+" a:nth-child(8)").text();
	  appimg2=$("div.book li.L"+secapp+" a:nth-child(9)").text();
	  appimg3=$("div.book li.L"+secapp+" a:nth-child(10)").text();
	  appimg4=$("div.book li.L"+secapp+" a:nth-child(11)").text();
	  appdesc=$("div.book li.L"+secapp+" a:nth-child(12)").text();
	  console.log(appname);

	  $("div.appname").html(friendnm);
	  if(appicon == "."){appicon=stdIC};
	  $("a.applogo").css({'background-image':"url('"+appicon+"')"});
	  if(appbg == "."){appbg=stdBK};
	  $("div.appinfo").css({'background-image':"url('"+appbg+"')"});
	  if(appdesc == "" || appdesc == ".")
	    {appdesc=appname}
	    else {appdesc=$.base64.decode(appdesc);};
	  $("div.appinfo i").html(appdesc);
	  $("div.passing").html(category);
	  $("div.pdthumbs a:nth-child(2),div.rule a:nth-child(1)").css({'background-image':"url('"+appimg1+"')"});
	  $("div.pdthumbs a:nth-child(3),div.rule a:nth-child(2)").css({'background-image':"url('"+appimg2+"')"});
	  $("div.pdthumbs a:nth-child(4),div.rule a:nth-child(3)").css({'background-image':"url('"+appimg3+"')"});
	  $("div.pdthumbs a:nth-child(5),div.rule a:nth-child(4)").css({'background-image':"url('"+appimg4+"')"});
  }
  function GetTItem(){
	  console.log("F 1");
	  $('div.iteminfo').show();
	  leaf1=$('div.book li.L'+secapp+' a:nth-child(1)').html();
	  leaf2=$('div.list li.I'+secapp+' a:nth-child(1)').html();
	  console.log(leaf1+' | '+leaf2);
	  if(leaf1 == leaf2){
		  $('div.iteminfo a.seta').removeAttr('href');
		  $('div.iteminfo a.seta').removeClass("add");
		  $('div.iteminfo a.seta').addClass("del");
		  $('div.iteminfo a.seta').attr({'href':"aio:del "+secapp});
		  $('div.iteminfo a.seta').attr({'alt':secapp});
		  $('div.iteminfo a.seta').html("$delsys");console.log(leaf2+" Está instalado");
		  $('div.iteminfo a.openapp,div.iteminfo a.updtapp').show();
	  }else{
		  $('div.iteminfo a.seta').removeAttr('href');
		  $('div.iteminfo a.seta').removeClass("del");
		  $('div.iteminfo a.seta').addClass("add");
		  $('div.iteminfo a.seta').attr({'href':"aio:add "+secapp});
		  $('div.iteminfo a.seta').attr({'alt':secapp});
		  $('div.iteminfo a.seta').html("$inssys");console.log(leaf2+" Não instalado");
		  $('div.iteminfo a.openapp,div.iteminfo a.updtapp').hide();
	  }
	  $('div.iteminfo a.openapp').attr({'href':"aio:run "+secapp});
	  $('div.iteminfo a.updtapp').attr({'href':"aio:upd "+secapp});
	 Identifica();
	 $('div.iteminfo').show();
  }
  function GetPage(){
		if (pagename) {
		  /*make an HTTP request using the attribute value as the file name:*/
		  xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
			  if (this.status == 200) {CallPage = this.responseText;}
			  if (this.status == 404) {CallPage = "NO";}
			  GetProgress();
			}
		  }      
		  xhttp.open("GET", pagename, true);
		  xhttp.send();
		  /*exit the function:*/
		  return;
		}
  };
  function GetProgress(){
	  if(CallPage == "" ){GetPage()}else{
		  if(CallPage == "NO" ){
			  if(Working=="1"){GetPage()}else{
			  $(".list").attr({'w3-include-html':'installed.html'});
			  $('.applogo').html("");
			  includeHTML();
			  ClassyBook();
			  LerBOOK();
			  setTimeout(function(){CkInstall(),GetTItem()}, 500);
			  ctstp="0"}
			  }
		  else{
			  Working="0";
			  CallPage=(CallPage.match(/\*/g) || []).length;
			  if(CallPage > ctstp){ctstp=CallPage;
			   console.log("Callpage: "+CallPage);
			   nslice=CallPage*30;console.log("nslice: "+nslice);
			  };
			  $('div.piebase').html("");countslice();setTimeout(GetPage(),500);}
	  };
  }
  if(BOOK == null){ BOOK = [] };

//Launchers
  $(".book").html(dblista);
  $(".lista").html(dblocal);
	ClassyBook();
	LerBOOK();
  
//Prateleira(MENU)
  $("article").html("<div class='menu'>"+acorpo+"</div><div class='news'></div>");acorpo="";
  CkInstall();
  console.log('Loja Carregada');
  var versionr=$("i.infoqtd").text();
  $("i.infoqtd").html(versionr+" | "+ctItems+" apps disponíveis.");
  $("div.news").html($("div.newspaper").html());$('div.newspaper').remove();
//Pesquisa
  $('span.searchbar').focus();
  $('span.searchbar').keyup(function(){
	  var SCont=$(this).html().toLowerCase();
	  console.log(SCont);
	  if (SCont == "" ){$('div.pkg_disp').show();}else
	  {$('div.pkg_disp').hide();
		  $('div.menu div').each(function(){
			var identfy=$(this).attr('class');
			if(identfy.indexOf(SCont) != -1){
			  identfy=identfy.replace(/ /g,'.');
			  $("."+identfy).show();
			}
		  });
		};
	  if(SCont.includes('progressbar:')){$('.applogo').html("");$('.applogo').html('<div class="piebase"></div>');nslice=SCont.replace("progressbar:","");countslice();}else{$('.applogo').html("");}
  });
  $('.x').click(function(){$("span.searchbar,.applogo").html("");$('div.pkg_disp').show();});
//Seleção de Item
  $("button.app").click(function(){secapp=$(this).attr('alt');GetTItem()});
//Exibir Imagens
  $(".pdthumbs").click(function(){
	  $('div.mural').show();
  });
  $('div.rule a').hover(function(){
	  var bgexhib=$(this).css('background-image');
	  $("div.exhib").css({"background-image":bgexhib});
  });
  $('a.xview').click(function(){
	  $('div.mural').hide();
  });
  $('a.aiologo').click(function(){
	  $('div.aiomenu').toggle();
  });
  $('a.styaio').click(function(){
//	  $('div.aiostyle')
	  $('div.themescreen').toggle();
	if($('div.extrwind').attr('data-click-state') == 1) { $('div.extrwind').attr('data-click-state', 1);$('div.extrwind,.wind').hide() }
    else { $('div.extrwind').attr('data-click-state', 0);$('.wind').hide();$('div.extrwind').slideToggle('400').css('display','flex');$('div.themescreen').show();}
  });
  $('a.aboutaio').click(function(){
    if($('div.extrwind').attr('data-click-state') == 1) { $('div.extrwind').attr('data-click-state', 1);$('div.extrwind,.wind').hide() }
    else { $('div.extrwind').attr('data-click-state', 0);$('.wind').hide();$('div.extrwind').slideToggle('400').css('display','flex');$('div.aboutscreen').show();}
  });
  $('div.backy').click(function(){alert("clicou")})
//Stylers
  $('.std').click(function(){$('div.pkg_disp, article, div.appinfo').removeClass('cl1, qd1, listv')});
  $('.cl1').click(function(){$('div.pkg_disp').removeClass('qd1, listv').addClass('cl1')});
  $('.qd1').click(function(){$('div.pkg_disp').removeClass('cl1, listv').addClass('qd1')});
  $('.list').click(function(){$('div.pkg_disp, article, div.appinfo').removeClass('cl1, qd1').addClass('listv')});
  $('div.appinfo a.seta').click(function(){
	  $('.applogo').html('<div class="piebase"></div>');
	  pagename=$(this).attr('alt');secapp=pagename;pagename=pagename+".html";console.log("Work with: "+pagename);
	  CallPage="";Working="1";setTimeout(GetProgress(),1000);
  });
  $('div.pkg_disp').hover(function(){
	  $('this').children('div.extr').show();
  });
  $('div.categories a').click(function(){var mcatname=$(this).attr('alt');$('span.searchbar').html(mcatname);$('div.pkg_disp').hide();
		  $('div.menu div').each(function(){
			  var identfy=$(this).attr('class');
			  if(identfy.indexOf(mcatname) != -1){
				  identfy=identfy.replace(/ /g,'.');
				  console.log(identfy);
			  $("."+identfy).show();
			}
		  });
	  });
  $('div.extrwind .clickout').click(function(){$('div.extrwind, .wind, .aiomenu').hide()});
  var ANIVIDEO="<video loop='true' autoplay='true' muted src='background.mp4'></video>", kk="0";
  function PutVideo(){
	  $('div.vth').html(ANIVIDEO);
	  $('div.appinfo,div.pkg_disp').addClass('anitheme');
  }
  $('body').find('span').attr('estado',function(){
	  kk=$(this).attr('estado');
	  if(kk == "0"){
	  $(this).css("float","left");
	} else {$(this).css("float","right");}
  });
  $('h3.contkey').click(function(){
	  kk=$(this).find('span').attr('estado');
	  if(kk == "1"){
	  $(this).find('span').css("float","left");
	  $(this).find('span').attr("estado","0");
	  $('video').remove();$('div').removeClass('anitheme');
  } else {$(this).find('span').css("float","right");$(this).find('span').attr("estado","1");PutVideo();}
  });
  if (animated=="1"){PutVideo();}
  $('.themearea').keyup(function(){var getText=$('.themearea').text();var themecnt=btoa(getText);$('a.svthm').attr('href','aio:mktheme '+themecnt)});
},500);
$('video').attr("autoplay","true");
//fim
});
