$('.linkvideo').click(function(){
   var link = $(this).attr('id');
   switch(link){ 
      case 'ep1':
	$('#myVid').attr('src', 'https://videos.animesgratisbr.com/pubfolder/animes/Onepiece/1.mp4');
	$("#divVideo video")[0].load();
        break;
      case 'ep2':
         $('#myVid').attr('src', 'https://videos.animesgratisbr.com/pubfolder/animes/Onepiece/2.mp4');
	 $("#divVideo video")[0].load();
         break;
    }
					
});