function show()
{
  var hid = document.getElementById('sho');
  if (hid.style.display === 'block') 
  {
    hid.style.display = 'none';
  } 

  else 
  {
    hid.style.display = 'block';
  }
}



function sho()
  {
    var hide = document.getElementById('invis');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  }

  function level()
  {
    var hide = document.getElementById('lvl');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  }

   function bayad()
  {
    var hide = document.getElementById('pay');
    var cheme = clck();
    if(cheme == 1)
    {
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  } 
  else
  {
    alert("Please select a sugar level first!");
  }
}

function rtrn()
  {
    var hide = document.getElementById('last');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  }


function rvq(){
  var flv1 = document.getElementById("flv1");
  var flv2 = document.getElementById("flv2");
  var flv3 = document.getElementById("flv3");
  var flv4 = document.getElementById("flv4");

  if (flv1.checked == true)
  {  
    document.getElementById('f1').style.display = 'block';
    var a = document.getElementById('flv1');
    if (a.checked == true)
    {
    document.getElementById("flv2").disabled = true;
    document.getElementById("flv3").disabled = true;
    document.getElementById("flv4").disabled = true;
    }
    else 
    {
      document.getElementById("flv2").disabled = false;
    document.getElementById("flv3").disabled = false;
    document.getElementById("flv4").disabled = false;
    }
  }
  else if (flv2.checked == true)
  {
    document.getElementById('f2').style.display = 'block';
    var a = document.getElementById('flv2');
    if (a.checked == true)
    {
    document.getElementById("flv1").disabled = true;
    document.getElementById("flv3").disabled = true;
    document.getElementById("flv4").disabled = true;
    }
    else 
    {
      document.getElementById("flv1").disabled = false;
    document.getElementById("flv3").disabled = false;
    document.getElementById("flv4").disabled = false;
    }

  } 
  else if (flv3.checked == true)
  {
    document.getElementById('f3').style.display = 'block';
    var a = document.getElementById('flv3');
    if (a.checked == true)
    {
    document.getElementById("flv2").disabled = true;
    document.getElementById("flv1").disabled = true;
    document.getElementById("flv4").disabled = true;
    }
    else 
    {
      document.getElementById("flv2").disabled = false;
    document.getElementById("flv1").disabled = false;
    document.getElementById("flv4").disabled = false;
    }

  } 
  else if (flv4.checked == true)
  {
    document.getElementById('f4').style.display = 'block';
    var a = document.getElementById('flv4');
    if (a.checked == true)
    {
    document.getElementById("flv2").disabled = true;
    document.getElementById("flv3").disabled = true;
    document.getElementById("flv1").disabled = true;
    }
    else 
    {
      document.getElementById("flv2").disabled = false;
    document.getElementById("flv3").disabled = false;
    document.getElementById("flv1").disabled = false;
    }

  }
  else
  {
    alert("Please choose a flavor");
    document.getElementById().style.display = 'none';
  }
  return;
}

  function clck()
    {
      try
      {
        var x = 0; 
        var m = document.getElementById("money").value;
        if (isNaN(m)) throw "not a number";
        if (m == "") throw "empty";
        if (m <= 100 && !(m < 0))
        {
          document.getElementById("prt").innerHTML = "You choose "+ m +"% sugar level";
          return x = x + 1;
        }
        else
        {
          alert("Please type the correct input");
          var x = 0;
          return x = 0;
        }

      }
      catch(er)
      {
        alert("Your input is " + er);
        var x = 0;
        return x = 0;
      }
    } 
  function ipatong() 
  {
    var a = document.getElementById('sz1');
    var b = document.getElementById('sz2');


    if (a.checked == true)
    {
      document.getElementById('demos').innerHTML = "Your size is 22oz = 69 php"; 
      if (a.checked == true)
    {
    document.getElementById("sz2").disabled = true;
    }
    else 
    {
      document.getElementById("sz2").disabled = false;;
    }    
      var price = 69;
      return price;
    }
    else if (b.checked == true)
    {
      document.getElementById('demos').innerHTML = " Your size is 16oz = 49 php";  
      if (b.checked == true)
    {
    document.getElementById("sz1").disabled = true;
    }
    else 
    {
      document.getElementById("sz1").disabled = false;
    }  
      var price = 49;
      return price;
    }
    else
    {
      msg();
    }
  }

  function dagdag() 
  {
    var a = document.getElementById('1');
    var b = document.getElementById('2');
    var c = document.getElementById('3');
    var d = document.getElementById('4');

    if (a.checked == true)
    {
      document.getElementById('demo').innerHTML = "Your Add-Ons is Nata De Coco = 15 php";
      if (a.checked == true)
    {
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    }
    else 
    {
      document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    }
      var price = 15;
      return price;
    }
    else if (b.checked == true)
    {
      document.getElementById('demo').innerHTML = " Your Add-Ons is Jelly = 10 php";
      if (b.checked == true)
    {
    document.getElementById("1").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    }
    else 
    {
      document.getElementById("1").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    }
      var price = 10;
      return price;
    }
    else if (c.checked == true)
    {
      document.getElementById('demo').innerHTML = " Your Add-Ons is Pearl = 10 php";
      if (c.checked == true)
    {
    document.getElementById("2").disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("4").disabled = true;
    }
    else 
    {
      document.getElementById("2").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("4").disabled = false;
    }     
      var price = 10;
      return price;
    }
    else if (d.checked == true)
    {
      document.getElementById('demo').innerHTML = "Your Add-Ons is None = 0 php";  
      if (d.checked == true)
    {
    document.getElementById("2").disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("3").disabled = true;
    }
    else 
    {
      document.getElementById("2").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("3").disabled = false;
    }         
      var price = 0;
      return price;
    }
    else
    {
      msg();
    }

  }

  function msg()
  {
    alert("Please choose the Add-Ons and Size");
    document.getElementById('lvl').style.display = 'none';
  }
function add()
{
  var t = dagdag();
  var d = ipatong();

  var final = t + d;

  document.getElementById('fs').innerHTML = "Your total is = " + final;
  return final;
}


function clcks()
    {
      try
      {
        var m = document.getElementById("moneys").value;
        var x = add();
        var change = m - x;
        if (m >= x)
        {
          document.getElementById("py").innerHTML = "Your total is " + x;
          document.getElementById("pyss").innerHTML = "Your money is " + m;
          document.getElementById("pys").innerHTML = " Your change is " + change;
        }
        else if (m =="")
        {
          alert("Empty");
          document.getElementById().style.display = 'none';
        }
        else
        {
          alert("Insuffiscient Money/ Wrong input");
          document.getElementById().style.display = 'none';
        }
      }
      catch(er)
      {
        document.getElementById().style.display = 'none';
      }
      return;
    }

    //cheesecake 
   function invisible()
{
  var hide = document.getElementById('invi');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'none';
  } 

  else 
  {
    hide.style.display = 'block';
  }
} 

  function shw()
  {
    var hide = document.getElementById('invisi');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  }

function rvq2(){
  var flv1 = document.getElementById("sp1");
  var flv2 = document.getElementById("sp2");
  var flv3 = document.getElementById("sp3");

  if (flv1.checked == true)
  {  
    document.getElementById('spl1').style.display = 'block';
    var a = document.getElementById('sp1');
    if (a.checked == true)
    {
    document.getElementById("sp2").disabled = true;
    document.getElementById("sp3").disabled = true;
    }
    else 
    {
      document.getElementById("sp2").disabled = false;
    document.getElementById("sp3").disabled = false;
    }
  }
  else if (flv2.checked == true)
  {
    document.getElementById('spl2').style.display = 'block';
    var a = document.getElementById('sp2');
    if (a.checked == true)
    {
    document.getElementById("sp1").disabled = true;
    document.getElementById("sp3").disabled = true;
    }
    else 
    {
      document.getElementById("sp1").disabled = false;
    document.getElementById("sp3").disabled = false;
    }

  } 
  else if (flv3.checked == true)
  {
    document.getElementById('spl3').style.display = 'block';
    var a = document.getElementById('sp3');
    if (a.checked == true)
    {
    document.getElementById("sp2").disabled = true;
    document.getElementById("sp1").disabled = true;
    }
    else 
    {
      document.getElementById("sp2").disabled = false;
    document.getElementById("sp1").disabled = false;
    }

  } 
  else
  {
    alert("Please choose a flavor");
    document.getElementById().style.display = 'none';
  }
  return;
}

function dagdag2() 
  {
    var a = document.getElementById('a1');
    var b = document.getElementById('a2');
    var c = document.getElementById('a3');
    var d = document.getElementById('a4');

    if (a.checked == true)
    {
      document.getElementById('ds2').innerHTML = "Your Add-Ons is Nata De Coco = 15 php";
      if (a.checked == true)
    {
    document.getElementById("a2").disabled = true;
    document.getElementById("a3").disabled = true;
    document.getElementById("a4").disabled = true;
    }
    else 
    {
      document.getElementById("a2").disabled = false;
    document.getElementById("a3").disabled = false;
    document.getElementById("a4").disabled = false;
    }
      var price = 15;
      return price;
    }
    else if (b.checked == true)
    {
      document.getElementById('ds2').innerHTML = " Your Add-Ons is Jelly = 10 php";
      if (b.checked == true)
    {
    document.getElementById("a1").disabled = true;
    document.getElementById("a3").disabled = true;
    document.getElementById("a4").disabled = true;
    }
    else 
    {
      document.getElementById("a1").disabled = false;
    document.getElementById("a3").disabled = false;
    document.getElementById("a4").disabled = false;
    }
      var price = 10;
      return price;
    }
    else if (c.checked == true)
    {
      document.getElementById('ds2').innerHTML = " Your Add-Ons is Pearl = 10 php";
      if (c.checked == true)
    {
    document.getElementById("a2").disabled = true;
    document.getElementById("a1").disabled = true;
    document.getElementById("a4").disabled = true;
    }
    else 
    {
      document.getElementById("a2").disabled = false;
    document.getElementById("a1").disabled = false;
    document.getElementById("a4").disabled = false;
    }     
      var price = 10;
      return price;
    }
    else if (d.checked == true)
    {
      document.getElementById('ds2').innerHTML = "Your Add-Ons is None = 0 php";  
      if (d.checked == true)
    {
    document.getElementById("a2").disabled = true;
    document.getElementById("a1").disabled = true;
    document.getElementById("a3").disabled = true;
    }
    else 
    {
      document.getElementById("a2").disabled = false;
    document.getElementById("a1").disabled = false;
    document.getElementById("a3").disabled = false;
    }         
      var price = 0;
      return price;
    }
    else
    {
      msg2();
    }
  }

function ipatong2() 
  {
    var a = document.getElementById('szs1');
    var b = document.getElementById('szs2');


    if (a.checked == true)
    {
      document.getElementById('ds1').innerHTML = "Your size is 22oz = 79 php"; 
      if (a.checked == true)
    {
    document.getElementById("szs2").disabled = true;
    }
    else 
    {
      document.getElementById("szs2").disabled = false;;
    }    
      var price = 79;
      return price;
    }
    else if (b.checked == true)
    {
      document.getElementById('ds1').innerHTML = " Your size is 16oz = 59 php";  
      if (b.checked == true)
    {
    document.getElementById("szs1").disabled = true;
    }
    else 
    {
      document.getElementById("szs1").disabled = false;
    }  
      var price = 59;
      return price;
    }
    else
    {
     msg2();
    }

  }
function msg2()
{
    alert("Please choose the Add-Ons and Size");
    document.getElementById('').style.display = 'none';
}

  function add2()
{
  var t = dagdag2();
  var d = ipatong2();

  var final = t + d;

  document.getElementById('ds3').innerHTML = "Your total is = " + final;
  return final;
}

function asukal()
  {
    var hide = document.getElementById('sgr');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  }

   function clck2()
    {
      try
      {
        var x = 0; 
        var m = document.getElementById("pera").value;
        if (isNaN(m)) throw "not a number";
        if (m == "") throw "empty";
        if (m <= 100 && !(m < 0))
        {
          document.getElementById("sgrlvl").innerHTML = "You choose "+ m +"% sugar level";
          return x = x + 1;
        }
        else
        {
          alert("Please type the correct input");
          var x = 0;
          return x = 0;
        }

      }
      catch(er)
      {
        alert("Your input is " + er);
        var x = 0;
        return x = 0;
      }
    } 
function bayad2()
  {
    var hide = document.getElementById('pay2');
    var cheme = clck2();
    if(cheme == 1)
    {
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  } 
  else
  {
    alert("Please select a sugar level first!");
  }
}

function clcks2()
    {

        var m = document.getElementById("inpt").value;
        var x = add2();
        var change = m - x;
        if (m >= x)
        {
          document.getElementById("lst1").innerHTML = "Your total is " + x;
          document.getElementById("lst2").innerHTML = "Your money is " + m;
          document.getElementById("lst3").innerHTML = " Your change is " + change;
        }
        else if (m =="")
        {
          alert("Empty");
          document.getElementById().style.display = 'none';
        }
        else
        {
          alert("Insuffiscient money/Wrong input");
          document.getElementById().style.display = 'none';
        }
      }
    

function rtrns()
  {
    var hide = document.getElementById('lastly');
  if (hide.style.display === 'block') 
  {
    hide.style.display = 'block';
  } 

  else 
  {
    hide.style.display = 'block';
  }
  }
