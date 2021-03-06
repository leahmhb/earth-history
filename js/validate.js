$(document).ready(function() {
  var correctCount = 0;

  $(".archean-eras").hide();
  $(".proterozoic-eras").hide();

  $("#showBlanks").click(function() {
    $(".input-group").show();
  });

  $("#hideBlanks").click(function() {
    $(".input-group").hide();
  });

  $("#showAll").click(function() {
   $(".eon").show();
   $(".era").show();
   $(".period").show();
   $(".epoch").show(); 
   $(".archean-eras").show();
   $(".proterozoic-eras").show();
 });

  $("#showEons").click(function() {
   $(".eon").show(); 
 });

  $("#showEras").click(function() {
   $(".era").show();
   $(".archean-eras").show();
   $(".proterozoic-eras").show();
 });

  $("#showPeriods").click(function() {
   $(".period").show();
 });

  $("#showEpochs").click(function() {
   $(".epoch").show();
 });

  $("#hideAll").click(function() {
   $(".eon").hide();
   $(".era").hide();
   $(".period").hide();
   $(".epoch").hide();
   $(".archean-eras").hide();
 });

  $("#hideEons").click(function() {
   $(".eon").hide();
 });

  $("#hideEras").click(function() {
   $(".era").hide();
   $(".archean-eras").hide();
 });

  $("#hidePeriods").click(function() {
   $(".period").hide();
 });

  $("#hideEpochs").click(function() {
   $(".epoch").hide();   
 });

  //scroll to top
  $("#top").click(function() {
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });

    //scroll to bottom
    $("#bottom").click(function() {
      $("html, body").animate({ scrollTop : $(document).height()-$(window).height()}, 800);
      return false;
    });


    $('#geologic-time-period input[type=text]').blur(function(e) {
      if((this.name) != (this.value)) {          
        $('#' + this.name).removeClass('has-success').addClass('has-error');  
        if(this.name == "Archean"){
         $(".archean-eras").hide();
       }

       if(this.name == "Proterozoic"){
         $(".proterozoic-eras").hide();
       }

     } else {
      $('#' + this.name).removeClass('has-error').addClass('has-success');
      correctCount++;
      if(this.name == "Archean"){
       $(".archean-eras").show();
     }

     if(this.name == "Proterozoic"){
       $(".proterozoic-eras").show();
     }

     console.log(correctCount);
   }    
  });//end instant validate


    if(correctCount == 43){
      $('#success').show();
      $('html, body').animate({scrollTop : 0},800);
    }//end if


    $('#reset').click(function(){ 
      correctCount = 0;
      $('#success').hide();
     //restore default
     $("input[type=text]").each(function() {  
      $('#' + this.name).removeClass('has-error').removeClass('has-success'); 
    });
     $('input[type=text]').val('');//reset all input
   });//end reset


  });


