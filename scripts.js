<script type="text/javascript">
        $(function() {
    		   $("#contributor-collection1").hide();
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 210) {
                $("#car").addClass("caractive");
                $(".goonj-office").addClass("padding-top-100");
	            $(".goonj-office").removeClass("padding-top-10");
	            $("#contributor-collection1").show();
	      		$("#contributor-collection").hide();
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $("#car").removeClass("caractive");
               $(".goonj-office").addClass("padding-top-10");
               $(".goonj-office").removeClass("padding-top-100");
    		   $("#contributor-collection1").hide();
	      	   $("#contributor-collection").show();
            }
            if($(window).scrollTop() > $("#car-remove").height() - 750) {
                 $("#car").removeClass("caractive");
             }
          });      
      	});
	</script>





  <script type="text/javascript">
        $(function() {
           $("#contributor-collection1").hide();
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 210) {
                $("#car").addClass("caractive");
                $(".goonj-office").addClass("padding-top-100");
              $(".goonj-office").removeClass("padding-top-10");
              $("#contributor-collection1").slideDown(2000);
            $("#contributor-collection").slideUp(2000);
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $("#car").removeClass("caractive");
               $(".goonj-office").addClass("padding-top-10");
               $(".goonj-office").removeClass("padding-top-100");
           $("#contributor-collection1").slideUp(2000);
             $("#contributor-collection").slideDown(2000);
            }
            if($(window).scrollTop() > $("#car-remove").height() - 750) {
                 $("#car").removeClass("caractive");
             }
          });      
        });
  </script>