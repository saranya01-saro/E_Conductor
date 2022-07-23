window.onload=function(){



document.getElementById(final).addEventListener("click",function(){
  var fname=document.getElementByClassName("fname").value;
  		var lname=document.getElementByClassName("lname").value;
  		var age=document.getElementByClassName("quantity").value;
  		var no=document.getElementByClassName("count1").value +document.getElementByClassName("count2").value;
  		var from=document.getElementByClassName("cityfrom").value;
  		var to=document.getElementByClassName("cityto").value;
      var date=document.getElementByClassName("date").value;
  		localStorage.setItem("firstname",fname);
  		localStorage.setItem("lastname",lname);
  		localStorage.setItem("age",age);
  		localStorage.setItem("no_passengers",no);
  		localStorage.setItem("fromcity",from);
  		localStorage.setItem("tocity",to);
      localStorage.setItem("date_1",date);
});

}
