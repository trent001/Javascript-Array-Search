    jQuery(document).ready(function() {


      // Build Your Array to search here
      var jsarray = [   '2000', '2007', '2008', '2009', '2010', '2011', '2015', '2016' ];



       jQuery( "#post-code-button" ).click(function(event) {
        //Search Button has been clicked.
  
        var current_value = jQuery('#postcode-input-field').val();

         /* If we are searching for integers uncomment the below line
          and use the current_value_int variable as the first parameter
          in the inArray function below.*/

        //var current_value_int = +jQuery('#postcode-input-field').val();

        if( current_value != '' ){

          if(jQuery.inArray(current_value, jsarray) > -1 ){

            

            jQuery('#default').fadeOut('fast', function() {

              jQuery('#fail').fadeOut('fast', function() {

                jQuery('#post-code-container').css('background-color', '#26CC14');
                
                jQuery('#success').css('display', 'table-cell');
                
              });

            });
              

          }else{


            jQuery('#default').fadeOut('fast', function() {
                
              jQuery('#success').fadeOut('fast', function() {

                jQuery('#post-code-container').css('background-color', '#FF0000');
              
                jQuery('#fail').css('display', 'table-cell');

              });

            });
              

          }

        }//End if value not blank
      });//End Search Button has been clicked.


      jQuery( "#postcode-input-field" ).focusout(function(event) {

        /*If input looses focus and all input value has been deleted
        Reset input to starting state */
      
        var current_value = jQuery('#postcode-input-field').val();

        if( current_value === '' ){


            jQuery('#fail').fadeOut('fast', function() {
                
              jQuery('#success').fadeOut('fast', function() {

                jQuery('#post-code-container').css('background-color', '#000');
              
                jQuery('#default').css('display', 'table-cell');

              });

            });

        }



      });

        
    });