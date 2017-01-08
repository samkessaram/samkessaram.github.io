$(function(){

  fixHeader();
  setElementDimensions();
  $('body').show();

  $('.project').click(function(){
    inputProjectInfo(this);
    showProject();
  })

  $('li').click(function(){
    var id = "#" + $(this).html();
    var offset = $(id).offset().top;
    console.log(offset);
    if ( document.documentElement.clientWidth <= 720 ){
      $('html, body').animate({
        scrollTop: offset - 60
      },500);
    } else {
      $('html, body').animate({
        scrollTop: offset - 10
      },500);
    }
  })

  $(window).on('scroll', function(){
    fixHeader();
    $('#name').html($('html').height())
  })

  function fixHeader(){
    if ( document.documentElement.clientWidth <= 720 ){
      if ( window.scrollY > 31 ){
        $('header').addClass('fix');
        $('#home').addClass('pad');
      } else {
        $('header').removeClass('fix');
        $('#home').removeClass('pad');
      }
      
      // if ( window.scrollY >= 40 ){
      //   $('#home').css('padding-top','110px');
      //   $('header, #job-title').addClass('collapse');
      // } else {
      //   $('#home').css('padding-top','45px');
      //   $('header, #job-title').removeClass('collapse');
      // }
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

    setElementDimensions();
  })
});

function setElementDimensions() {
  $('header, h1, #nav').css('max-width',document.documentElement.clientWidth);
  if ( document.documentElement.clientWidth <= 720 ){
    $('#nav').css({ top: document.documentElement.clientHeight, "margin-top":"-50px"})
  } else {
    $('#nav').css({ top: '-30px', "margin-top":"0px"})
  }
}

var initialScrollY;

function showProject(){
  $('body').css('overflow','hidden');
  initialScrollY = window.scrollY;
  $('#project-view').scrollTop(0)
  $('#home').css('height',document.documentElement.clientHeight * 100);
  $('#overlay').fadeIn();
  $('#project-view').css({left:'0%', top: window.scrollY, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight});
}

function hideProject(){
  $('#project-view').css('left','100%');
  $('#overlay').fadeOut();
  window.setTimeout(function(){
    $('#project-view').css('width','0px');
    $('#home').css('height', 'auto');
    window.scrollTo(0, initialScrollY);
    $('body').css('overflow','auto');
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
    title: 'Wikipedia Viewer',
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










