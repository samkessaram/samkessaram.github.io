$(function(){
  $('.project').click(function(){
    $('#project-view').css('top',window.scrollY);
    $('body').css('overflow-y','hidden');
    $('#overlay').fadeIn('slow');
    $('#project-view').css('left','0%');
    $('#project-view .row').fadeIn('slow');
  })

  $('#project-view').click(function(){
    $('#project-view .row').fadeOut('fast');
    $(this).css('left','100%');
    $('#overlay').fadeOut('slow');
    $('body').css('overflow-y','visible');
  })
});