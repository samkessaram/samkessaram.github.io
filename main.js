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
      var text = projects[this.id]['title']
      var height = $(this).css('height').split('px')[0]
      $(this).children().after('<p class="hover-text" style="cursor:pointer;position:relative;top:-' + height/1.66 + 'px;margin-bottom:-' + $('p').css('line-height') + ';background-color: rgba(0, 0, 0, 0.58);color: white;">' + text + '</p>')
    }
  })

  $('.project').mouseleave(function(){
    $('.project').removeClass('filter')
    $('.project p').remove()
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
      $('#job-title').css({opacity: 1 - window.scrollY / 10, height: 22 - window.scrollY, top: Math.max(-22, Math.min(0,0 - window.scrollY)), marginBottom: Math.max(0, 8  - window.scrollY) });
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
    setElementDimensions();
    hideJobTitle();
  })
});

function hideJobTitle(){
  if ( window.scrollY > 25 && document.documentElement.clientWidth <= 720){
    $('#job-title').addClass('hide');
  } else {
    $('#job-title').removeClass('hide');
  }
}

function setElementDimensions() {
  $('html').css('max-height', document.body.clientHeight)
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
  var project = projects[target.id];
  $('#screenshot').html($(target).html().split('<p')[0])
  $('#project-title').html(project.title);
  $('#project-description').html(project.description);
  $('.project-link').attr('href',project.link);
  $('#project-source').attr('href',project.source);
}



var projects = {
  weather: { 
    title: 'Local Weather',
    description: "This is an app I developed while working through the freeCodeCamp curriculum. It simply determines your location and dynamically changes the information, background, and icon according to the conditions fetched from Weather Underground.",
    link: 'https://samkessaram.github.io/local_weather',
    source:'https://github.com/samkessaram/local_weather'
  },
  routefinder: { 
    title: 'Route Finder',
    description: "I developed this with some classmates at Lighthouse Labs in Toronto in the fall of 2015. Given the user's location and destination, we would use the Google Maps API and NextBus to determine the most efficient method of transportation. I built the routing algorithm with Ruby on the backend, and helped to style and refine the UI of the app.",
    link: 'http://ttcroutefinder.herokuapp.com/#/',
    source: 'https://github.com/macu123/WalkThisWay'
  }, 
  wikipedia: { 
    title: 'Wikipedia Viewer',
    description: "This was an assignment from freeCodeCamp. A user enters a search term, and using the MediaWiki API the app fetches 10 relevant articles. It's a lot prettier than Wikipedia, but I wanted to keep a minimalist aesthetic to keep with the brand.",
    link: 'https://samkessaram.github.io/wikipedia_viewer',
    source: 'https://github.com/samkessaram/wikipedia_viewer'
  }, 
  quotes: { 
    title: 'Random Quote Machine',
    description: "Another freeCodeCamp project, this fetches quotes from an API, displays them, and allowing the user to tweet them from their account.",
    link: 'https://samkessaram.github.io/random_quote_machine',
    source: 'https://github.com/samkessaram/random_quote_machine'
  }, 
  todo: { 
    title: 'To-Do Chrome App',
    description: "I built this simple&mdash;but useful&mdash;app to learn about Chrome Apps, and ended up learning a lot about Vue and IndexedDB as well. Google is actually phasing out support for Chrome Apps, but this works nicely as a regular web app.",
    link: 'https://samkessaram.github.io/chrome-to-do',
    source: 'https://github.com/samkessaram/chrome-to-do'
  },
  fiduciary: { 
    title: 'Fiduciary Realty',
    description: "I was tasked with revamping this real estate agency's website and bringing it up to modern standards. What was once a series of pages full of jargon, with a presentation dating it firmly in the early 1990s, I condensed into a single polished and informative page.",
    link: 'http://fiduciaryrealty.com/',
    source: 'https://github.com/samkessaram/fiduciaryrealty'
  },
  ohsnap: { 
    title: 'Review Aggregator',
    description: "I created this Rails app to aggregate reviews for restaurants in Toronto, allowing users to easily view reviews from multiple reviewing sites at once.",
    link: 'http://oh-snap.herokuapp.com/',
    source: 'https://github.com/samkessaram/review_aggregator'
  },
  css: { 
    title: 'CSS Cleaner',
    description: "I made this simple page for quickly and easily formatting and sorting CSS rules. This was half an exploration of JavaScript, half a passion project for having clean CSS for my projects. Written in vanilla JS, this project also got me intimately familiar with regular expressions while I was creating the parsing algorithm.",
    link: 'https://samkessaram.github.io/css_cleaner',
    source: 'https://github.com/samkessaram/css_cleaner'
  }
}










