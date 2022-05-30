$('document').ready(function(){
  $('textarea').hide();
//  var indice_selecionado = -1; //Índice do item selecionado na lista
//  var BOOK = localStorage.getItem("BOOK");// Recupera os dados armazenados
//  BOOK = JSON.parse(BOOK); // Converte string para objeto

  var appname="", idrecipe="",category="",recipejar="",friendnm="",appicon="",appbg="",appimg1="",appimg2="",appimg3="",appimg4="",appdesc="",recipenm="",appnm="";
  var stdBK="https://images.all-free-download.com/images/graphiclarge/abstract_green_blue_low_poly_background_vector_illustration_570260.jpg";
  var stdIC=""
  var iteml, ctItems="0",ItmClss="",appcat="0",fcat="",troca="",knife=0,itemw="",CallPage="",Working="0";
  var ckrecipe="",itmBT="",acorpo="",secapp,ctstp="0",dblista="",dblocal="",catpress="0";
  var funcao="0",animated="0", devmod='';
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
//  includeHTML();
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
//	  fcat=""; 
		fcat=category[index++];
		var appcatnm="";
//	  console.log(appname+","+fcat);
	  if (fcat=="E"){appcatnm="$IdE";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="I"){appcatnm="$IdI";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="T"){appcatnm="$IdT";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="A"){appcatnm="$IdA";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="M"){appcatnm="$IdM";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="W"){appcatnm="$IdW";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="C"){appcatnm="$IdC";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="S"){appcatnm="$IdS";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="U"){appcatnm="$IdU";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="Z"){appcatnm="$IdZ";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="D"){appcatnm="$IdD";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="G"){appcatnm="$IdG";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="F️"){appcatnm="$IdF";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="V"){appcatnm="$IdV";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="B"){appcatnm="$IdB";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="P"){appcatnm="$IdP";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  if (fcat=="K"){appcatnm="$IdK";$("div.pkg_disp."+appname).addClass(appcatnm);};
	  
	  if (index < category.length){AvalCat();}else{index="0"};

}
  var appcatnm="",ctkk=0,histo=0,index=0;fcatx='';

  function GeraItMenu(){
	var mainthmbk;
	ctItems=parseInt(ctItems)+1;
        mainthmbk='mainthmbk' //if (appbg == "."){mainthmbk='mainthmbk'};//else{mainthmbk=' ';appbg='style="background:url(\''+appbg+'\');background-repeat:no-repeat;background-position:center;background-size:auto 100%"'};
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
        var ElHead1='<div class="pkg_disp anitheme '+ItmClss+' '+mainthmbk+' " alt="'+appnamex+'" ';
		var ElHead2='>';
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
  function MenuCatIT(){
	 var appic1='background:url(\'';
	  var appic2='\') no-repeat center 2em;background-size:50% auto';
	  $("div.pkg_disp").each(function(){
		  ctItems=parseInt(ctItems)+1;
		  appicon=$(this).children('button').attr('icon');
		  if(appicon == "."){
			  $(this).children('button').addClass('stdIcon');
//			  $(this).css({'background-image':"url('"+stdBK+"')","background-size":"100% auto","background-repeat":"norepeat",});
			  } else {
		  var appic=appic1+appicon+appic2;
		  $(this).children("button").attr({"style" : appic});
		  
	  };
	      appname=$(this).attr('alt');
	      category=$(this).attr('categories');//chama=1;index=0;Categories(); 
	      AvalCat();
	  });
  }
  function countslice(){
//	var nslice=$("span.searchbar").html();
	if (nslice >= knife) {
//		$('div.piebase').html("");
        if (appname="aiostore"){$('div.lbarspace').append('<span alt='+knife+'></span>');}
        else {$('div.piebase.'+appname).append('<span class="circle p'+knife+'" style="-webkit-transform:rotate('+knife+'deg)"></span>');};
//		console.log(knife);
		knife=knife+1;
		countslice();
	}else{knife=0};
  };
  function GetTItem(){
	   console.log(appname);
	  friendnm=$('div.pkg_disp.'+appname+' a').html();
	  $("div.appname").html(friendnm);
	  if(appicon == "."){appicon=stdIC};
	  $("a.applogo").css({'background-image':"url('"+appicon+"')"});
	  $("div.pdthumbs a:nth-child(2),div.rule a:nth-child(1),div.exhib").css({'background-image':"url('"+appimg1+"')"});
	  $("div.pdthumbs a:nth-child(3),div.rule a:nth-child(2)").css({'background-image':"url('"+appimg2+"')"});
	  $("div.pdthumbs a:nth-child(4),div.rule a:nth-child(3)").css({'background-image':"url('"+appimg3+"')"});
	  $("div.pdthumbs a:nth-child(5),div.rule a:nth-child(4)").css({'background-image':"url('"+appimg4+"')"});
	  $("div.fullbg").css({'background-image':"url('"+appbg+"')","background-size":"100% auto","background-repeat":"norepeat","filter":"blur(6px)",
"-webkit-filter":"blur(6px)"});
	  $("div.mural").css({'display':"flex"});
	  $("div.menu,div.news").css({'filter':"blur(8px)"})
	  $("div.outer,i.infoqtd").hide();
	  $('div.iteminfo').show();
	  var oper='',nmbtins='';hvcontent=$('div.pkg_disp.'+appname+' span').html();console.log(hvcontent);
	  if(hvcontent == "")
	  {oper="add";nmbtins='Instalar';$('div.iteminfo a.seta').removeClass("del");$('div.iteminfo a.seta').addClass("add");$('a.openapp,a.updtapp').addClass('hide');}
	  else
	  {oper="del";nmbtins='Remover';$('div.iteminfo a.seta').removeClass("add");$('div.iteminfo a.seta').addClass("del");$('a.openapp,a.updtapp').removeClass('hide');};
	  $('div.iteminfo a.seta').attr({'href':"aio:"+oper+" "+appname});$('div.iteminfo a.seta').html(nmbtins);
	  $('div.iteminfo a.seta').attr({'alt': appname});
	  $('div.iteminfo a.openapp').attr({'href':'aio:run '+appname});$('div.iteminfo a.openapp').attr({'alt': appname});
	  $('div.iteminfo a.updtapp').attr({'href':'aio:upd '+appname});$('div.iteminfo a.updtapp').attr({'alt': appname});
	  $("i.appdesc").html(appdesc);
//	  console.log(appdesc); var appdesco='';
//	  if(appdesc == "" || appdesc == "."){appdesco=appname}else {appdesco=atob(appdesc)};// {appdesco=$.base64.decode(appdesc);};
      var appdesco=$.base64.decode($("i.appdesc").html());
	  $("i.appdesc").html(appdesco);
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
  var countcall="0";
  function GetProgress(){
	  console.log(CallPage);
	  if(CallPage == "" ){console.log('none');GetPage()}else{
		  if(CallPage == "NO" ){console.log('404');
			  if(Working=="1"){console.log('try');GetPage()}else{
//			  $(".list").attr({'w3-include-html':'installed.html'});
			  $('.applogo, div.pkg_disp.'+appname+' div.extr').html("");
			  $('div.pkg_disp.'+appname).removeClass('installing');
			  $('div.pkg_disp.'+appname+' span').html("<div class='onsys'></div>");
			  if(appname="aiostore"){setTimeout("location.reload();",3000);};
//			  includeHTML();
//			  ClassyBook();
//			  LerBOOK();
			  setTimeout(function(){GetTItem()}, 500);
			  ctstp="0"}
			  }
		  else{
			  console.log('find');
			  Working="0";
			  CallPage=( CallPage.match(/\*/g) || [] ).length;
//			  if(CallPage > ctstp){ctstp=CallPage;
			   console.log("Callpage: "+CallPage);
			   nslice=CallPage*30;console.log("nslice: "+nslice);
//			  };
//			  countcall=countcall+"1";
//			  console.log(countcall);
			  $('div.piebase, div.lbarspace,div.pkg_disp.'+appname+' div.extr').html("").css("display","flex");
			  countslice();
			  setTimeout(GetPage(),500);
			  };
	  };
  }
  var SCont="";
  function Search(){
	  SCont=SCont.toLowerCase();
	  console.log(SCont);
	  if (SCont == "" ){$('div.pkg_disp').show();}else
	  {$('div.pkg_disp').hide();
		  $('div.menu div.pkg_disp').each(function(){
			var identfy=$(this).attr('class');
			console.log(identfy);
			if(identfy.indexOf(SCont) != -1){
			  identfy=identfy.replace(/ /g,'.');
			  $("."+identfy).show();
			}
		  });
		};
	  if(SCont.includes('progressbar:')){$('div.pkg_disp').show();$('.applogo').html("");$('.applogo').html('<div class="piebase"></div>');nslice=SCont.replace("progressbar:","");countslice();}else{$('.applogo').html("");}
  }
//  if(BOOK == null){ BOOK = [] };

//Launchers
//  $(".book").html(dblista);
///  $(".lista").html(dblocal);
  MenuCatIT();
//	ClassyBook();
//	LerBOOK();
  
//Prateleira(MENU)
  //$("article").html("<div style='width:84%;position:relative'><div class='amostra'><div class='pdthumbs'><div><i class='appdesc'></i></div><div><a></a><a></a><a></a><a></a></div></div></div><div class='menu'>"+acorpo+"</div></div><div class='news'></div>");acorpo="";
//  CkInstall();
//  MenuCatIT();
  console.log('Loja Carregada');
  var versionr=$("i.infoqtd").text();
  $("i.infoqtd").html(versionr+" | "+ctItems+" apps disponíveis.");
  //$("div.news").html($("div.newspaper").html());$('div.newspaper').remove();
//  $("div.poster").html($("div.newsapps").html());$('div.newsapps').remove();
//Pesquisa
  $('span.searchbar').focus();
  $('span.searchbar').keyup(function(){SCont=$(this).html();Search()});
  $('.x').click(function(){$("span.searchbar,.applogo").html("");$('div.pkg_disp').show();});
//Seleção de Item
  $("button.app, div.poster div").click(function(){
	  appname=$(this).attr('alt'); 
	  appicon=$('div.pkg_disp.'+appname+' button').attr('icon');
	  appbg=$('div.pkg_disp.'+appname+' button').attr('background');
	  appimg1=$('div.pkg_disp.'+appname+' button').attr('img1');
	  appimg2=$('div.pkg_disp.'+appname+' button').attr('img2');
	  appimg3=$('div.pkg_disp.'+appname+' button').attr('img3');
	  appimg4=$('div.pkg_disp.'+appname+' button').attr('img4');
	  appdesc=$('div.pkg_disp.'+appname+' button').attr('comment');
	  $('i.infoqtd').hide();GetTItem();});
  $("div.mbk").click(function(){
	  $('i.infoqtd').show();
	  $('.iteminfo').hide();
  });
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
	  $("div.fullbg").css({'background':'transparent'});
	  $('div.menu,div.news').css({'filter':"blur(0)"});
	  $('div.outer').show();
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
  $('a.advstore').click(function(){
    if($('div.extrwind').attr('data-click-state') == 1) { $('div.extrwind').attr('data-click-state', 1);$('div.extrwind,.wind').hide() }
    else { $('div.extrwind').attr('data-click-state', 0);$('.wind').hide();$('div.extrwind').slideToggle('400').css('display','flex');$('div.advcdscreen').show();}
  });
  $('a.mkrecipe').click(function(){
    if($('div.extrwind').attr('data-click-state') == 1) { $('div.extrwind').attr('data-click-state', 1);$('div.extrwind,.wind').hide() }
    else { $('div.extrwind').attr('data-click-state', 0);$('.wind').hide();$('div.extrwind').slideToggle('400').css('display','flex');$('div.mkrcpscreen').show();}
  });
//  $('div.backy').click(function(){alert("clicou")})
//Stylers
  $('.std').click(function(){$('div.pkg_disp, article, div.appinfo').removeClass('cl1, qd1, listv')});
  $('.cl1').click(function(){$('div.pkg_disp').removeClass('qd1, listv').addClass('cl1')});
  $('.qd1').click(function(){$('div.pkg_disp').removeClass('cl1, listv').addClass('qd1')});
  $('.list').click(function(){$('div.pkg_disp, article, div.appinfo').removeClass('cl1, qd1').addClass('listv')});
  $('div.appinfo a.seta').click(function(){
	  pagename=$(this).attr('alt');
	  appname=pagename;	secapp=pagename;
	  pagename=pagename+".html";
	  $('div.pkg_disp.'+appname).addClass('installing');
	  $('.applogo, div.pkg_disp.'+appname+' div.extr').html('<div class="piebase '+appname+'"></div>').css('display','flex');
	  console.log("Work with: "+pagename);
	  CallPage="";Working="1";setTimeout(GetProgress(),1000);
  });
//  $('div.pkg_disp').hover(function(){
//	  $('this').children('div.extr').show();
//  });
  $('div.categories a').click(function(){var mcatname=$(this).attr('alt');$('span.searchbar').html(mcatname);$('div.pkg_disp').hide();
//		  $('div.menu div').each(function(){
//			  var identfy=$(this).attr('class');
//			  if(identfy.indexOf(mcatname) != -1){
//				  identfy=identfy.replace(/ /g,'.');
//				  console.log(identfy);
				  $('article').scrollTop(0);
				  SCont=$(this).attr('alt');
				  Search();
//			  $("."+identfy).show();
//			}
//		  });
	  });
  $('div.extrwind .clickout').click(function(){$('div.extrwind, .wind, .aiomenu').hide()});
  var stthmnm='$themename',ANIVIDEO="<video loop='true' autoplay='true' muted src='"+stthmnm+".mp4'></video>", kk="0";
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
  function setaniInfo(){
	  var anistore="anistore='"+kk+"'"
//	  alert(anistore);
	  anistore=btoa(anistore);
	  $('h3#effect a').attr('href','aio:control '+anistore);
  }
  function swiftb(){
	  if(swiftbar == "effect"){animated=kk;
	   if(kk == "1"){$('video').remove();$('div').removeClass('anitheme');kk='0';}else{PutVideo();kk='1';};setaniInfo();
	  }
	  if(swiftbar == "devmode"){
	   if(kk == "1"){devmod="off";kk="0"}else{devmod="on";kk="1"};
	   $('h3#devmode').attr('estado', kk);
	   $('h3#devmode a').attr('href','aio:dev '+devmod);
	  }
  }
  $('h3.contkey').click(function(){
	  swiftbar=$(this).attr('id');
	  kk=$(this).find('span').attr('estado');
	  if(kk == "1"){$(this).find('span').css("float","left");$(this).find('span').attr("estado","0");$(this).find('a.bkey').removeClass("on");}
	  else {$(this).find('span').css("float","right");$(this).find('span').attr("estado","1");$(this).find('a.bkey').addClass("on");}
	  swiftb();
  });
 
  if (animated=="1"){kk=animated;setaniInfo();PutVideo();} else {kk=animated;setaniInfo();}
  $('div.thmenu a').click(function(){
	  var pthmnm=stthmnm;
	  stthmnm=$(this).text();stthmnm=stthmnm.toLowerCase();
	  ANIVIDEO="<video loop='true' autoplay='true' muted src='"+stthmnm+".mp4'></video>"
	  $('video').remove();
	  if ($('h3.contkey a span').attr('estado') == "1" ){PutVideo();}
	  pagename=stthmnm+".css";Working="1";setTimeout(function(){GetProgress();
		$("link[href*='"+pthmnm+".css']").remove();
		var head = document.getElementsByTagName('HEAD')[0];
        	var link = document.createElement('link');
	        link.rel = 'stylesheet';link.type = 'text/css';link.href = stthmnm+'.css'; 
  	        head.appendChild(link)
	  },1000);
  });
  $('h3.menucreatethm').click(function(){
	  if ($(this).attr('estado') == '0' ) {$('.themearea, a.svthm').show();$(this).attr('estado','1')} else{$('.themearea, a.svthm').hide();$(this).attr('estado','0')}
  });
  $('.themearea').keyup(function(){
	  var getText=$('textarea.themearea').val();var themecnt=btoa(getText);$('a.svthm').attr('href','aio:mktheme '+themecnt);
  });
  $('#posterleft').click(function () {
    var leftPos = $('div.poster').scrollLeft();
    console.log(leftPos);
    $("div.poster").animate({scrollLeft: leftPos - 500}, 800);
	});

  $('#posterright').click(function () {
		var leftPos = $('div.poster').scrollLeft();
		console.log(leftPos);
		$("div.poster").animate({
			scrollLeft: leftPos + 500
		}, 800);
  });
  $('div.categories a').hover(function(){
	  $('div.categories a span').css('left','-12em');
	  $(this).children('span').css('left','5em');
  });
  $('div.categories').mouseout(function(){
	  $('div.categories a span').css('left','-12em');
  });
  $('.updatestore').click(function(){
	  $('div.aiomenu').hide();
	  var imgloadstore="data:image/webp;base64,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"
	  $("div.mbk").append("<center><img style=\"margin-top:20%\" src='"+imgloadstore+"'></center>");
	  $(".infoqtd").html("Atualizando informações, aguarde...");
	  pagename="aiostore.html";
	  appname="aiostore";
	  secapp=appname; console.log("Work with: "+pagename);
	  CallPage="";Working="1";setTimeout(GetProgress(),1000);
//	   setTimeout("location.reload();",3000);
  });
  $("div.newsapps").mouseover(function(){$('span#posterleft, span#posterright').show()});
  $("div.newsapps").mouseout(function(){$('span#posterleft, span#posterright').hide()});
},500);
  
$('video').attr("autoplay","true");
document.exitPictureInPicture();
//function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: '$LINGU', autoDisplay: false,layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');}
//googleTranslateElementInit();
//fim
});
