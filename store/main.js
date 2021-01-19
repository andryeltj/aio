$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
     setTimeout(function(){
      location.reload();
     },3000)
  });
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
