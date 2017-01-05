$(function(){

  fixHeader();
  setElementWidths();
  $('body').show();


  $('.project').click(function(){
    inputProjectInfo(this);
    showProject();
  })

  $('#menu').click(function(){
    $('#nav').toggle();
  })

  $('li').click(function(){
    var id = "#" + $(this).html();
    var offset = $(id).offset().top;
    if ( document.documentElement.clientWidth <= 400 ){
      $('#nav').hide();
      $('html, body').animate({
        scrollTop: offset - 80
      },500);
    } else {
      $('html, body').animate({
        scrollTop: offset
      },500);
    }
  })

  $(window).on('scroll', function(){
    fixHeader();
  })

  function fixHeader(){
    if ( document.documentElement.clientWidth <= 400 ){
      if ( window.scrollY > 0 ){
        $('#name, header').addClass('fix');
      } else {
        $('#name, header').removeClass('fix');
      }
      
      if ( window.scrollY >= 45 ){
        $('#home').css('padding-top','157px');
        $('header, #job-title').addClass('collapse');
      } else {
        $('#home').css('padding-top','45px');
        $('header, #job-title').removeClass('collapse');
      }
    }
  }

  $('#project-view').click(function(){
    hideProject();
  })

  $(window).on('orientationchange resize', function(){
    if ($('#project-view').css('width') !== '0px'){
      $('#project-view').css({top: window.scrollY, height: document.documentElement.clientHeight, width: document.documentElement.clientWidth}); 
    }

    $('header').css('max-width',document.documentElement.clientWidth);

    if ( document.documentElement.clientWidth > 720 ){
      $('#nav').show();
    } else {
      $('#nav').hide();
    }

    setElementWidths();

  })
});

function setElementWidths() {
  $('header, h1').css('max-width',document.documentElement.clientWidth);
  $('#menu').css('left', 0.85 * document.documentElement.clientWidth);
}

var initialScrollY;

function showProject(){
  if ( document.documentElement.clientWidth <= 400 ){
    $('#nav').hide();
  }
  $('body').css('overflow','hidden');
  initialScrollY = window.scrollY;
  $('#project-view').scrollTop(0)
  $('body').css('overflow','hidden');
  $('#home').css('height',document.documentElement.clientHeight * 100);
  $('#overlay').fadeIn('slow');
  $('#project-view').css({left:'0%', top: window.scrollY, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight});
}

function hideProject(){
  $('#project-view').css('left','100%');
  $('#overlay').fadeOut('slow');
  window.setTimeout(function(){
    $('#project-view').css('width','0px');
    $('#home').css('height', 'auto');
    window.scrollTo(0, initialScrollY);
    $('body').css('overflow','visible');
  },300); 
}

function inputProjectInfo(target){
  project = projects[target.id];
  $('#screenshot').html($(target).html())
  $('#project-title').html(project.title);
  $('#project-description').html(project.description);
}



var projects = {
  weather: { 
    title: 'Local Weather',
    description: 'A fucking weather app duDOI',
    link: 'https://samkessaram.github.io/local_weather'
  },
  walkthisway: { 
    title: 'Walk This Way',
    description: 'A fucken blurb eh?',
    link: 'https://blooming-castle-2022.herokuapp.com'
  }, 
  ohsnap: { 
    title: 'Oh Snap!',
    description: 'A fucken blurb eh?',
    link: 'https://oh-snap.herokuapp.com/'
  }, 
  wikipedia: { 
    title: 'wikipedia Viewer',
    description: 'A fucken blurb eh?',
    link: 'https://samkessaram.github.io/wikipedia_viewer'
  }, 
  quotes: { 
    title: 'Random Quote Machine',
    description: 'A fucken blurb eh?',
    link: 'https://samkessaram.github.io/random_quote_machine'
  }, 
  todo: { 
    title: 'Chrome Todo Extension',
    description: 'A fucken blurb eh?',
    link: 'https://samkessaram.github.io/chrome-todo'
  }
}










