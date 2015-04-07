$(function(){

	$.get( $(".menu a").eq(0).attr("href") , function(data){ 
	//aqui carregamos o href do primeiro link do menu, no caso o inicio.html
		$(".content").html( data ); // carrega o conteúdo na div
	});

	$(".menu a").click(function(event){
		event.preventDefault(); // previne o carregamento costumeiro do link

		var href = $(this).attr("href"); // pega a url do link em questão

		$.get( href, function(data){ // $.get funciona parecido a $.post e $.ajax
			$(".content").html( data ); // carrega o conteúdo na div
		});
	});
	// para evitar que a index.html carregue sem conteúdo, iremos carregar a página inicial ao abrir o "site"

});