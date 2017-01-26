$(function(){
  $('body').show();
  setElementDimensions();

  $('.project').click(function(){
    inputProjectInfo(this);
    showProject();
  })

  $('#name').click(function(){
    $('html, body').animate({
        scrollTop: 0
      },500);
  })

  $('.project').mouseenter(function(){
    if ( document.documentElement.clientWidth > 720 ){
      $('.project').not(this).addClass('filter')
    }
  })

  $('.project').mouseleave(function(){
    $('.project').removeClass('filter')
  })

  $('#nav li').click(function(){
    var id = "#" + $(this).html().toLowerCase();
    var offset = $(id).offset().top;
    if ( document.documentElement.clientWidth <= 720 ){
      $('html, body').animate({
        scrollTop: offset - 50
      },500);
    } else {
      $('html, body').animate({
        scrollTop: offset - 10
      },500);
    }
  })

  $(window).on('scroll', function(){
    setElementDimensions();
    if ( document.documentElement.clientWidth <= 720 ){
      hideJobTitle();
      $('#job-title').css({opacity: 1 - window.scrollY / 10, height: 22 - window.scrollY, top: Math.max(-22,0 - window.scrollY), marginBottom: Math.max(0, 8  - window.scrollY) });
    } else {
      $('#job-title').css('opacity', 1);
    }
  })

  $('#project-view').click(function(){
    hideProject();
  })

  $(window).on('orientationchange resize', function(){
    if ($('#project-view').css('width') !== '0px'){
      $('#project-view').css({top: window.scrollY, height: '100%', width: document.documentElement.clientWidth}); 
    }
    $('header').css('max-width',document.documentElement.clientWidth);
    hideJobTitle();
    setElementDimensions();
  })
});

function hideJobTitle(){
  if ( window.scrollY > 25 ){
    $('#job-title').addClass('hide');
  } else {
    $('#job-title').removeClass('hide');
  }
}

function setElementDimensions() {
  $('header, h1, #nav').css('max-width',document.documentElement.clientWidth);
  if ( document.documentElement.clientWidth <= 720 ){
    hideJobTitle();
    $('#nav').appendTo('footer');
  } else {
    $('header .row').before($('#nav'));
    $('#job-title').css('padding-top', '0px')
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
    $('#project-view').css('display','none');
  },300); 
}

function inputProjectInfo(target){
  $('#project-view').css('display','block');
  project = projects[target.id];
  $('#screenshot').html($(target).html())
  $('#project-title').html(project.title);
  $('#project-description').html(project.description);
  $('#project-link').attr('href',project.link);
  $('#project-source').attr('href',project.source);
}



var projects = {
  weather: { 
    title: 'Local Weather',
    description: "This is an app I developed while working through the freeCodeCamp curriculum. It simply determines your location and dynamically changes the information, background, and icon according to the conditions fetched from Weather Underground.",
    link: 'https://samkessaram.github.io/local_weather',
    source:'link'
  },
  routefinder: { 
    title: 'Route Finder',
    description: "I developed this with some classmates at Lighthouse Labs in Toronto in the fall of 2015. Given the user's location and destination, we would use the Google Maps API and NextBus to determine the most efficient method of transportation. I built the routing algorithm with Ruby on the backend, and helped to style and refine the UI of the app.",
    link: 'https://blooming-castle-2022.herokuapp.com',
    source: 'link'
  }, 
  wikipedia: { 
    title: 'Wikipedia Viewer',
    description: "This was an assignment from freeCodeCamp. A user enters a search term, and using the MediaWiki API the app fetches 10 relevant articles. It's a lot prettier than Wikipedia, but I wanted to keep a minimalist aesthetic to keep with the brand.",
    link: 'https://samkessaram.github.io/wikipedia_viewer',
    source: 'link'
  }, 
  quotes: { 
    title: 'Random Quote Machine',
    description: "Another freeCodeCamp project, this fetches quotes from an API, displays them, and allowing the user to tweet them from their account.",
    link: 'https://samkessaram.github.io/random_quote_machine',
    source: 'link'
  }, 
  todo: { 
    title: 'Chrome Todo Extension',
    description: "I built this simple&mdash;but useful&mdash;app to learn about Chrome Apps, and ended up learning a lot about Vue and IndexedDB as well. Google is actually phasing out support for Chrome Apps, but this works nicely as a regular web app.",
    link: 'https://samkessaram.github.io/chrome-to-do',
    source: 'link'
  },
  fiduciary: { 
    title: 'Fiduciary Realty',
    description: "I was tasked with revamping this real estate agency's website and bringing it up to modern standards. What was once a series of pages full of jargon, with a presentation dating it firmly in the early 1990s, I condensed into a single polished and informative page.",
    link: 'http://fiduciaryrealty.com',
    source: 'link'
  }
}










