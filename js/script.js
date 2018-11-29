// JavaScript Document
$(document).ready(function() {

$(function() {
    
    var curPage="page0";
    
    $("#menu li").click(function() {
        if(curPage == $(this).data("page")) { /** do nothing! **/
        }
        else{
        if (curPage.length) { 
            $("#"+curPage).hide("slow");
            $('#menu li').removeClass('active');
        }
        var $this = $(this);
        if (!$this.hasClass('active')) {
        $this.addClass('active');}
            
        curPage=$(this).data("page");
        $("#"+curPage).show("fast");
        }
    });
    
    $("#page0 div a").click(function() {
        if(curPage == $(this).data("page")) { 
        }
        else{
        if (curPage.length) { 
            $("#"+curPage).hide("slow");
        }
        curPage=$(this).data("page");
        $("#"+curPage).show("fast");
    }});
});

    /**
    Contact Me Submission JS
    **/
    $("form").submit(function (e) {
                                e.preventDefault();
                                
                                var error = "";
                                if($("#inputEmail").val() == ""){
                                    
                                error += "An email address is required.<br>";
                                    
                                } 
                                if ($("#inputSubject").val() == ""){
                                    
                                    error += "The subject field is required.<br>";
                                    
                                } if ($("#inputMSG").val() == ""){
                                    
                                    error += "Message field cannot be blank.";
                                }
                                
        if(error != ""){
        $("#formErrors").html('<div class="alert alert-danger" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><p><strong>There were error(s) in your submission.</strong></p>' + error + '</div>');
        }
        else
            {
                $("form").unbind("submit").submit();
            }
        
    
    
    });                 
    
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    })

    });