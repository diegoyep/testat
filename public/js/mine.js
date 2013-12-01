$("#menu-close").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
      });
$("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
      });
// $('#share_button').click(function(e){

// e.preventDefault();
// FB.ui(
// {
// method: 'feed',
// name: 'Zefira Acceso Total',
// link: ' http://accesototal.zefira.pe',
// picture: 'http://accesototal.zefira.pe/images/main.png',
// caption: 'This is the content of the "caption" field.',
// description: 'This is the content of the "description" field, below the caption.',
// message: ''
// });
// });
$().ready(function(){
  $('#form-one').validate({
    rules: {
      email: {
        required: true,
        email : true
      }
    },
    messages : {
      email : {
        required: "Ingresa un correo electronico",
        email: "Ingresa un correo electronico valido"
      }
    }
  });


  $('#form-create').validate({
    rules: {
      username: {
        required: true,
        email : true
      },
      firstname: {
        required:true,
      },
      lastname: {
        required:true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required:true,
        minlength: 5,
        equalTo : "#password"
      }
    },

    messages : {
      username: {
        required: "Ingresa un correo electronico",
        email: "Ingresa un correo electronico valido"
      }, 
      firstname: "Ingresa un nombre",
      lastname: "Ingresa un apellido",
      password: {
        required: "Ingresa una contrasena",
        minlength: "La contrasena debe tener al menos 5 caracteres"
      },
      confirm_password : {
        required: "Ingresa de nuevo tu contrasena",
        minlength: "La contrasena debe tener al menos 5 caracteres",
        equalTo: "Ingresa la misma contrasena que arriba"
      }
    }
  });


  $('#form-create2').validate({
    rules: {
      username: {
        required: true,
        email : true
      },
      name: {
        required:true,
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required:true,
        minlength: 5,
        equalTo : "#password"
      }
    },

    messages : {
      username: {
        required: "Ingresa un correo electronico",
        email: "Ingresa un correo electronico valido"
      }, 
      name: "Ingresa un nombre",
      password: {
        required: "Ingresa una contrasena",
        minlength: "La contrasena debe tener al menos 5 caracteres"
      },
      confirm_password : {
        required: "Ingresa de nuevo tu contrasena",
        minlength: "La contrasena debe tener al menos 5 caracteres",
        equalTo: "Ingresa la misma contrasena que arriba"
      }
    }
  });
});


$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
              || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

