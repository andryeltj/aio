$('document').ready(function(){
  $('textarea').hide();
  $('.updatestore').click(function(){
     setTimeout(function(){
      location.reload();
     },3000)
  });
  function CriaTB() {
	var board = JSON.stringify({
		nameapp:appname,namerecipe:idrecipe,category:category,icon:icon,background:background,img1:img1,img2:img2,img3:img3,img4:img4,desc:desc});
	TPL.push(board);
	localStorage.setItem("BOOK", JSON.stringify(BOOK));
	}
  console.log('Loja Carregada');
});
