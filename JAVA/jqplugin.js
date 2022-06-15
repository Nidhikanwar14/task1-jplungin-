$(document).ready(function() {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
      }, "Letters only please");
      jQuery.validator.addMethod('zipcode', function(value, element) {
        return this.optional(element) || !!value.trim().match(/^\d{6}(?:[-\s]\d{4})?$/);
      }, 'Invalid zip code'); 
      
      jQuery.validator.addMethod('number', function(value, element) {
        return this.optional(element) || !!value.trim().match(/^\d{10}(?:[-\s]\d{4})?$/);
      }, 'Invalid phone number'); 
    $("#myform").validate({
      rules: {
        name : {
          required: true,
          lettersonly: true
        },
        name1 : {
          required: true,
          lettersonly: true
        },

        city : {
          required: true,
          lettersonly: true
        },

        address : {
          required: true,
          lettersonly: true
        },

        pincode : {
          required: true,
          lettersonly: true
        },
        
        postal : {
          required: true,
          zipcode : true
        },

        phone_num : {
          required: true,
          number : true
        },
        email: {
          required: true,
          email: true
        
        },
        
        subject : {
          required: true,
          lettersonly: true
        },
        subject1 : {
          required: true,
          lettersonly: true
        },

        Gender:{
          required:true
        }
      },
      messages : {
        name: {
            required:"Please enter first your name",
          lettersonly:"Name should contain only letters."
        },
        name1: {
          required:"Please enter last your name",
        lettersonly:"Name should contain only letters."
      },

      address: {
        required:"Please enter your address",
      lettersonly:"Address should contain only letters."
    },

    city: {
      required:"Please enter your city",
    lettersonly:"City should contain only letters."
  },
  pincode: {
    required:"Please enter your state",
  lettersonly:"State should contain only letters."
},
postal: {
  required:"Please enter postal code",
    zipcode:"Postal should contain only 6 number."
},

phone_num: {
  required:"Please enter phone number",
    number:"Phone number should contain only 10 number."
},
        email: {
          required:"Please enter your email",
          email: "The email should be in the format: abc@domain.tld"
        },
        subject: {
          required:"Please write something......",
        lettersonly:"Feedback should contain only letters."
      },

      subject1: {
        required:"Please suggest something....",
      lettersonly:"Suggestion should contain only letters."
    },

    Gender:{
      required:"Please choose any one of them...<br/>"
    }

        },
        errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('.container') );
            }
            else 
            { // This is the default behavior 
                error.insertAfter( element );
            }
         }
      });
    
  });
  