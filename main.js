$(function(){
  $('.project').click(function(){
    inputProjectInfo(this);
    showProject();
  })

  // $('header').css('height', document.documentElement.clientHeight);

  $('#project-view').click(function(){
    hideProject();
  })

  $(window).on('orientationchange resize', function(){
    // $('header').css('height', document.documentElement.clientHeight);
    if ($('#project-view').css('width') !== '0px'){
      $('#project-view').css({top: window.scrollY, height: document.documentElement.clientHeight, width: document.documentElement.clientWidth}); 
    }
  })
});

var initialScrollY;

function showProject(){
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
    window.scrollTo(0, initialScrollY)
    $('body').css('overflow','visible');
  },300); 
}

function inputProjectInfo(target){
  project = projects[target.id];
  $('#screenshot').html('<a target="_blank" href="' + project.link + '">' + $(target).html() + '</a>')
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










