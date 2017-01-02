$(function(){

  $('.project').click(function(){
    $('body').css('overflow','hidden');
    $('body').css('height',window.innerHeight * 3.6);
    $('#overlay').fadeIn('slow');
    $('#project-view').css('top', window.scrollY);
    $('#project-view').css({left:'0%', width: window.innerWidth, 'overflow-y': 'auto'});
  })

  $('#project-view').click(function(){
    $('#project-view').css('left','100%');
    $('#overlay').fadeOut('slow');

    window.setTimeout(function(){
      $('#project-view').css('width','0px');
      $('body').css('height',window.innerHeight);
      $('body').css('overflow','visible');
    },200);

    
  })
});