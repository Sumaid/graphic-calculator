                var num;
                var finalr;
                var finals;
                var flag=0;
                var opt;
                function numscreen(num)
                {
                        if (flag==0)
                        {       finalr=num;
                                document.getElementById("scr1").innerHTML=num;
                        }
                        else
                        {
                                finals=num;
                                document.getElementById("scr3").innerHTML=num;
                        }

                }
		function remove()
		{
			        document.getElementById("scr1").innerHTML="";
				       document.getElementById("scr2").innerHTML="";
                        document.getElementById("scr3").innerHTML="";
                        document.getElementById("scr4").innerHTML="";
                        document.getElementById("scr5").innerHTML="";
                        document.getElementById("scr6").innerHTML="";
                        document.getElementById("scr7").innerHTML="";
                        document.getElementById("scr8").innerHTML="";
                        document.getElementById("scr9").innerHTML="";
                        document.getElementById("scr10").innerHTML="";
			flag=0;

		}
                function opscreen(opt)
                {
                        document.getElementById("scr2").innerHTML=opt;
		                }
                function addition()
                {
                        flag = 1;
                }
                function subtract()
                {
                        flag = 2;
                }
                function multiply()
                {
                        flag = 3;
                }
                function divide()
                {
                        flag = 4;
                }

                function result()
                {
                        if (flag==1)    
                                newk = finalr + finals;
                        if (flag==2)
                               newk = finalr - finals;
                        if (flag==3)    
                                newk = finalr * finals;
                        if (flag==4)
                               newk = finalr / finals;
                        
                        document.getElementById("scr2").innerHTML="";
                        document.getElementById("scr3").innerHTML="";
                        document.getElementById("scr4").innerHTML="";
                        document.getElementById("scr5").innerHTML="";
                        document.getElementById("scr6").innerHTML="";
                        document.getElementById("scr7").innerHTML="";
                        document.getElementById("scr8").innerHTML="";
                        document.getElementById("scr9").innerHTML="";
                        document.getElementById("scr10").innerHTML="";
                        document.getElementById("scr1").innerHTML=newk;
                        finalr = newk;
                }
        
	
