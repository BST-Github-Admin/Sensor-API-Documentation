$(document).ready(function () {
  
  if(window.location.href.indexOf("search") > -1) {
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("search");
    // console.log(c);
    sendInfo(c);
  }else{
    
  //dynamic page load using link
  
 if(window.location.href.indexOf("?=") > -1) {
  var url      = window.location.href;     
  var pieces = url.split("?=");
  pieces = pieces[1].split("#");
 // var pathname = window.location.pathname; 
  var url      = window.location.href;     
 // var origin   = window.location.origin;  
//  console.log(pieces);
//  console.log(pieces[0]);
//  console.log(document.querySelectorAll('[href*='+pieces[1]+']'));
//  console.log(document.querySelectorAll('[href*='+pieces[1]+']')[0].outerHTML);
//  console.log(url);
 
  var loadURL=pieces[0]+'.html';
  $("#content").load(loadURL);

  //start of Dynamic loading of pages using URL & highlighting corresponding menu
    if(pieces[0] == 'overview'){
      var myEle = document.querySelectorAll('#overview');
    }else{
      var myEle = document.getElementById(pieces[0]);
    }
    // console.log(myEle);
    if(myEle){
      if(pieces[0] == 'overview'){
        myEle = myEle[1];
      }else{
        $(myEle.parentNode.parentNode).addClass('menu-open');
        $(myEle.parentNode.parentNode.parentNode).addClass('active');
        $(myEle.parentNode.parentNode.previousElementSibling).addClass('activeNav');
        $(myEle.parentNode.parentNode.parentNode.parentNode).addClass('menu-open');
        $(myEle.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('active');
    
        // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (window.innerWidth > '1140') {
          // $(myEle).css('background-color', '#f8f8f8');
          // $('.sidebar-submenu .sidebar-submenu>li a').not(this).css('background-color','#ffffff');
          $(myEle).css('background-color', '#f8f8f8');
        }
        // $(myEle).css('background-color', '#f8f8f8');
        
        $(myEle.parentNode.parentNode.parentNode.parentNode.previousElementSibling).addClass('activeNav');
        $(myEle.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('menu-open');
        $(myEle.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('active');
        // $(myEle.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('activeNav');
        // $(myEle.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('active');
        // $(myEle.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('menu-open');
      }
      $(myEle.parentNode).addClass('active');
      $(myEle).addClass('activeNav');
    }
    
  // end of Dynamic loading of pages using URL & highlighting corresponding menu

}else{
  $("#content").load('overview.html');
  var myEle = document.querySelectorAll('#overview');
  myEle = myEle[1];
  $(myEle).addClass('activeNav');
  $(myEle.nextElementSibling).addClass('menu-open');
  $(myEle.parentNode).addClass('active');

}
  }

 
  //menu
  $('.sticky .sidebar-menu>li>a, .sticky .sidebar-submenu>li>a').click(function () {
    if ($(this).hasClass('subHeadAction')) {
      subUrl = $(this).attr('href');
      console.log(subUrl);
      if(subUrl == '#overview'){
        $("#content").load('overview.html');
        $(window).scrollTop(0);
      }
      history.pushState(null, null, subUrl);
    } else {
      var id = $(this).attr('id');
      var url = id + '.html';
      console.log(url);
      setURL = '?=' + id;
      $("#content").load(url);
      $(window).scrollTop(0);
      history.pushState(null, null, setURL);
    }
  });



  $('.closeIcon').click(function () {
    $('#sideNav').removeClass("respSidebar");
    $('#content').toggleClass("showHide");
    $('#sidebarCollapse').toggleClass("showHide");
  });

  $('#sidebarCollapse').click(function () {
    $('#sideNav').toggleClass("respSidebar");
    $('#content').addClass("showHide");
    $('#content').removeClass("hideShow");
    $('#sidebarCollapse').toggleClass("hideShow");

  });


  $('.sticky .sidebar-menu li a, .sticky .sidebar-submenu li a').on('click', function () {
    if ($(window).width() <= 1140) {
      $('.respSidebar').removeClass("respSidebar");
      $('#content').addClass("hideShow");
    }
  });


  $(".sidebar-menu>li>a").click(function () {
    $('.sidebar-menu>li>a').not(this).removeClass('activeNav');
    $(this).addClass('activeNav');
    $(window).scrollTop(0);
  })

  $(".sidebar-menu>li>.sidebar-submenu>li>a").click(function () {
    $('.sidebar-submenu>li>a').not(this).removeClass('activeNav');
    // $('.sidebar-submenu>li>a').not(this).css('background-color','#ffffff');
    
    // $(this).css('background-color', '#f8f8f8');
    $(this).addClass('activeNav');

    if (!$(this).hasClass('subHeadAction')) {
      $(window).scrollTop(0);
    }

    // if ($(this.parentNode).hasClass('active')) {
    //  console.log("ok logic");
    //  console.log($(this.nextElementSibling));
    // }


  })

  $("ul.sidebar-menu>li>a").click(function () {
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (window.innerWidth > '1140') {
      $('ul.sidebar-menu>li>a').not(this).css({'background-color':'#ffffff',"font-family": 'Bosch Sans LF light,boschsans, Helvetica Neue, Helvetica, Arial, sans-serif'});
      $(this).css({'background-color':'#f8f8f8',"font-family": 'bosch sans bold'});
    }
  })

  $("li ul.sidebar-submenu>li>a").click(function () {
    // var isMobile = window.innerWidth;
		if (window.innerWidth > '1140') {
      $('li ul.sidebar-submenu>li>a').not(this).css({'background-color':'#ffffff',"font-family": 'Bosch Sans LF light,boschsans, Helvetica Neue, Helvetica, Arial, sans-serif'});
      $(this).css({'background-color':'#f8f8f8',"font-family": 'bosch sans bold'});
      $(this.parentNode.parentNode.previousElementSibling).css({'background-color':'#ffffff',"font-family": 'bosch sans bold'});
      $(this.parentNode.parentNode.parentNode.parentNode.previousElementSibling).css({"font-family": 'bosch sans bold'});
      $(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling).css({"font-family": 'bosch sans bold'});
      
    }
  })

  $(".sidebar-submenu .sidebar-submenu>li a").click(function () {
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (window.innerWidth > '1140') {
      $('.sidebar-submenu .sidebar-submenu>li a').not(this).css('background-color','#ffffff');
      $(this).css('background-color', '#f8f8f8');
    }
    
    $('.sidebar-submenu .sidebar-submenu>li a').not(this).removeClass('activeNav');
    $(this.parentNode.parentNode).addClass('menu-open');
    $(this.parentNode.parentNode.previousElementSibling).addClass('activeNav');
    $(this).addClass('activeNav');

    if ($(this).hasClass('subHeadAction')) {
      $(this).removeClass('activeNav');
      history.pushState(null, null, null);
    }

  })

  //ie nav
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
  {

    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('.sticky').addClass('ieNav');
      } else {
        $('.sticky').removeClass('ieNav');
      }

    });

  }

  
  $(".searchIcon").click(function(){      
    var search = $('#search1').val();
    if(search != ""){
      $("#search").submit(); // Submit the form
    }else{
      $('#search1').css('border-color','red');
      return;
    }
  });
  $('#search1').keyup(function(){
    var search = $('#search1').val();
    if(search != ""){
      $('#search1').css('border-color','');
    }else{
      $('#search1').css('border-color','red');
      return;
    }
  });
 
	function sendInfo(c) {
    var pages = [{
      "pageName":"Index",
      "pageId":"index"
    },{
      "pageName":"Overview",
      "pageId":"overview"
    },{
      "pageName":"BMA400",
      "pageId":"group__bma400"
    },{
      "pageName":"INIT AND ACCESS DATA",
      "pageId":"group__bma400_api_init"
    },{
      "pageName":"CONFIGURATION",
      "pageId":"group__bma400_api_config"
    },{
      "pageName":"FIFO",
      "pageId":"group__bma400_api_fifo"
    },{
      "pageName":"INTERRUPT",
      "pageId":"group__bma400_api_interrupt"
    },{
      "pageName":"REGISTERS",
      "pageId":"group__bma400_api_register"
    },{
      "pageName":"SYSTEM",
      "pageId":"group__bma400_api_system"
    },{
      "pageName":"STEP COUNTER",
      "pageId":"group__bma400_api_sc"
    },{
      "pageName":"Examples ",
      "pageId":"group__bma400_examples"
    },{
      "pageName":"Examples | Accelerometer Read",
      "pageId":"group__bma400_examples_accelerometer"
    },{
      "pageName":"Examples | Basic Initialization",
      "pageId":"group__bma400_examples_basic"
    },{
      "pageName":"Examples | Fifo",
      "pageId":"group__bma400_examples_fifo"
    },{
      "pageName":"Examples | Self Test",
      "pageId":"group__bma400_examples_self_test"
    },{
      "pageName":"Examples | Step counter",
      "pageId":"group__bma400_examples_step_counter"
    },{
      "pageName":"Examples | Tap detection",
      "pageId":"group__bma400_examples_tap_detection"
    }];
    
    var div = document.createElement('div');
    div.setAttribute('id','result');

    var parResult = document.createElement('p');
    parResult.setAttribute('id','restCount');
    div.appendChild(parResult);
    
    var span = document.createElement('span');
    span.setAttribute('id','spanResCount');
    // parResult.appendChild(span);

    var span1 = document.createElement('span');
    span1.setAttribute('class','spanResCount');
    parResult.appendChild(span1);

    var count = 0 ;

    var ul = document.createElement('ul');
    ul.innerHTML = ""; 
    ul.setAttribute('id','letterHead');

    document.getElementById('content').appendChild(div);
    document.getElementById('content').appendChild(ul);

    // console.log("heelo" + count);
    span1.innerHTML = span1.innerHTML + count;
    parResult.innerHTML = parResult.innerHTML + " Results for ";
    parResult.appendChild(span);
    span.innerHTML = " " + c;

    pages.forEach(function(item){
      var pageName =item.pageId+".html";
      $.get(pageName, function(html_string)
      {
        var htmlString= html_string.toString();
        var stripedHtml = $("<div>").html(htmlString).text();
        
        if(stripedHtml.indexOf(c) > -1){
          count = count+1;
          var splitedString = stripedHtml.substring(stripedHtml.indexOf(c)-50, stripedHtml.indexOf(c)+50);
          
          var a = document.createElement('a');
          ul.appendChild(a);

          var li = document.createElement('li');
          li.setAttribute('class','letterss');
          a.appendChild(li);

          
          if(item.pageId == 'index'  ){
            a.setAttribute('href','index.html');
          }else{
            a.setAttribute('href','index.html?='+item.pageId);
          }
         

          var span = document.createElement('span');
          span.setAttribute('class','gpL');
          li.appendChild(span);

          var span12 = document.createElement('span');
          span12.setAttribute('class','gpL1');
          li.appendChild(span12);

          if(item.pageId == 'index' || item.pageId == 'overview'){
            span.innerHTML=  span.innerHTML + item.pageName ;
          }else{
            span.innerHTML= "API Reference | BMA400 | " + span.innerHTML + item.pageName ;
          }
          
          span12.innerHTML = " | Sensor API Reference";

          var p = document.createElement('p');
          p.setAttribute('class','paragraph');
          li.appendChild(p);
          p.innerHTML = p.innerHTML+ splitedString + "..." ;

          $('.spanResCount').text(count); 
          
          // $( ".letterss" ).find(c).css({"font-weight": "700",
          // "color": "#000",
          // "font-family": "boschsans,Helvetica Neue,Helvetica,Arial,sans-serif"} );

          

        }
        
      },'html'); 
    })
   
   
  }
});