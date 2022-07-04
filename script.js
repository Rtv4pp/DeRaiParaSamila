$('.linkvideo').click(function(){
   var link = $(this).attr('id');
   switch(link){ 
      case 'ep1':
	$('#myVid').attr('src', 'https://www.w3schools.com/tags/movie.mp4');
	$("#divVideo video")[0].load();
        break;
      case 'ep2':
         $('#myVid').attr('src', 'https://www.w3schools.com/html/mov_bbb.mp4');
	 $("#divVideo video")[0].load();
         break;
    }
					
});