/*==================================================
                    Toggle-Password
==================================================*/

//For Login and Old password field in Change password page

$("#toggle-password").click(function() {
  var x = document.getElementById("exampleInputPassword1");
  //    var x = $($(this).attr("toggle"));
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});

//For New password field in Change password page

$("#toggle-password2").click(function() {
  var x = document.getElementById("exampleInputPassword2");
  //    var x = $($(this).attr("toggle"));
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});

//For Confirm password field in Change password page

$("#toggle-password3").click(function() {
  var x = document.getElementById("exampleInputPassword3");
  //    var x = $($(this).attr("toggle"));
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});
