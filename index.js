
function calcX(){
            var a = parseInt(document.myform.A.value);
            var b = parseInt(document.myform.B.value);
            var p = parseInt(document.myform.P.value);
            
                const x = [];
                var ans=" " ;
                for (var i = 0; i < p; i++)
                {
                	x[i]=i;
                	ans+="x= "+x[i]+"  mod value =" + ((i*i*i+a*i+b)%p)+"<br>"
                	 
                }
                document.getElementById("answer").innerHTML=ans;
            }

           function calcY()
            {
            	 var p = parseInt(document.myform2.P.value);
            	const y = [];
                var ans=" " ;
                for (var i = 0; i < p; i++)
                {
                	y[i]=i;
                	ans+="y= "+y[i]+"  mod value =" + ((i*i)%p)+"<br>"
                	//ans+="y="+y[i]+((i*i)%p)+"<br>"
                	 
                }
                document.getElementById("y_values").innerHTML=ans;
               }
