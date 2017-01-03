$(function(){
  $('.project').click(function(){
    inputProjectInfo(this);
    showProject();
  })

  $('#project-view').click(function(){
    hideProject();
  })

  $(window).on('orientationchange resize', function(){
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

function inputProjectInfo(project){
  $('#screenshot').html($(project).children().clone())
  project = projects[project.id];
  $('#project-title').html(project.title);
  $('#project-description').html(project.description);
}



var projects = {
  weather: { 
    title: 'Local Weather',
    description: 'A fucking weather app duDOI'
  },
  walkthisway: { 
    title: 'Walk This Way',
    description: 'A fucken blurb eh?'
  }, 
  ohsnap: { 
    title: 'Oh Snap!',
    description: 'A fucken blurb eh?' 
  }, 
  wikipedia: { 
    title: 'wikipedia Viewer',
    description: 'A fucken blurb eh?'
  }, 
  quotes: { 
    title: 'Random Quote Machine',
    description: 'A fucken blurb eh?'
  }, 
  todo: { 
    title: 'Chrome Todo Extension',
    description: 'A fucken blurb eh?'
  }
}










