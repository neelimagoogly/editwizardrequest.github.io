
function validate() {
  var textarea = $("#exampleFormControlTextarea1");
  var letters = /^[0-9a-zA-Z .!]+$/;
  if (textarea.val() == "") {
    textarea.addClass("is-invalid");
    $("#alert").html("Source cannot be empty string");
  } else if (!letters.test(textarea.val())) {
    textarea.addClass("is-invalid");
    $("#alert").html("Use only alphanumeric characters");
  } else {
    textarea.removeClass("is-invalid");
    textarea.addClass("is-valid");
    $("#alert").html("");
  }
}
function isbncheck(inputtxt)
{
  var isbn = /^\d{13}$/;
  if(inputtxt.value.match(isbn))
        {
      alert("Yes,this is a valid ISBN")    
      return true;
        }
      else
        {
        alert("Please enter a valid ISBN");
        return false;
        }
}
function required()
{
var empt = document.forms["form1"]["text1"].value;
var letterNumber = /^[0-9a-zA-Z]+$/;
if (empt == "")
{
alert("This is an obviously invalid quote");
return true;
}
else if((inputtxt.value.match(letterNumber)))
{
alert("This is an obviously invalid quote");

return true;
}
else 
{
alert("This is valid quote");
return false; 
}
}
function urlcheck(inputtxt)
{
  var url = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if(inputtxt.value.match(url))
        {
      alert("Yes,this is a valid URL")    
      return true;
        }
      else
        {
        alert("Please enter a valid URL");
        return false;
        }
}