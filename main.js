$(function(){

  $('.project').click(function(){
    $('#project-view').scrollTop(0)
    $('body').css('overflow','hidden');
    $('body').css('height',window.innerHeight * 10);
    $('#overlay').fadeIn('slow');
    $('#project-view').css('margin-top', window.scrollY);
    $('#project-view').css({left:'0%', top: '0px', width: window.innerWidth, height: window.innerHeight});
  })

  $('#project-view').click(function(){
    $('#project-view').css('left','100%');
    $('#overlay').fadeOut('slow');

    window.setTimeout(function(){
      $('#project-view').css('width','0px');
      $('body').css('height',window.innerHeight);
      $('body').css('overflow','visible');
    },300);

    
  })
});