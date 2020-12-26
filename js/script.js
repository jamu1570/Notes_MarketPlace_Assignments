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

/*==================================================
                    FAQ
==================================================*/

//faq toggle stuff
$(".togglefaq").click(function(e) {
  e.preventDefault();
  var notthis = $(".active").not(this);
  notthis
    .find(".fa-minus")
    .addClass("fa fa-plus")
    .removeClass("fa fa-minus");
  notthis
    .toggleClass("active")
    .next(".faqanswer")
    .slideToggle(300);
  $(this)
    .toggleClass("active")
    .next()
    .slideToggle("fast");
  // $(this)
  //   .children("i")
  //   .toggleClass("fa-plus fa-minus");
  $(this)
    .find("i")
    .toggleClass("fa-plus fa-minus");
});
