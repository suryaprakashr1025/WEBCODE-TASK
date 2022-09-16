
//USING ASYNC FUNCTION
async function pookie(){

  //USING TRY METHOD
    try{

        //pokimon header
        var h=document.createElement("h1");
        h.innerHTML="Pokemon"
        document.body.append(h)

        //create div tag
        var div=document.createElement("div");
        div.setAttribute("class","pookimon");

        //create input tag
        var input=document.createElement("input");
        input.setAttribute("type","number")
        input.setAttribute("id","number");
        input.setAttribute("placeholder","ID 1 to 905")

        //create button tag
        var button1=document.createElement("button")
        button1.setAttribute("id","search");
        button1.innerHTML="Search";
        div.append(input,button1);
        document.body.append(div)

  
        //create table tag function
         function table(tagname3,attribute,value){
         var table1=document.createElement(tagname3);
         table1.setAttribute(attribute,value)
         return table1;
         }     

         //create tr tag function
         function trow(tagname4,attribute1,value1){
         var tr=document.createElement(tagname4);
         tr.setAttribute(attribute1,value1);
         return tr;
         }

          //create th tag function
          function theader(tagname,content){
          var th=document.createElement(tagname);
          th.innerHTML=content;
          return th;
          }

          //create td tag function
          function tdata(tagname1,content1){
          var td=document.createElement(tagname1);
          td.innerHTML=content1;
          return td;
          }

          //ID,NAME,WEIGHT TABLE
          var table2= table("table","id","pData");
          var tr1=trow("tr","class","pd");
          var th1=theader("th","ID");
          var th2=theader("th","NAME");
          var th3=theader("th","WEIGHT");
          tr1.append(th1,th2,th3);
          table2.append(tr1);
          document.body.append(table2);


          //ABILITY TABLE 
          var table3=table("table","id","ab")
          var tr2=trow("tr","class","ab");
          var head=document.createElement("h5");
          head.setAttribute("class","abHead")
          head.innerHTML="ABILITY"
          var th4=theader("th","NAME");
          var th5=theader("th","URL")
          tr2.append(th4,th5)
          table3.append(head,tr2);
          document.body.append(table3);

          //MOVES TABLE 
          var table4=table("table","id","mv")
          var tr3=trow("tr","class","mv");
          var head1=document.createElement("h5");
          head1.setAttribute("class","abHead")
          head1.innerHTML="MOVES"
          var th6=theader("th","NAME");
          var th7=theader("th","URL")            
          tr3.append(th6,th7)
          table4.append(head1,tr3)
          document.body.append(table4)
          


    //nested async function
    async function pookimonGo(){
          var val=document.getElementById("number").value;
          var pooki=await fetch(`https://pokeapi.co/api/v2/pokemon/${val}/`)
          var pooki1=await pooki.json();  

          //THIS IS ID, NAME, WEIGHT
          var tr4=trow("tr","id","tableRow");
          var td1=tdata("td",`${pooki1.id}`)
          var td2=tdata("td",`${pooki1.name}`)
          var td3=tdata("td",`${pooki1.weight}`)
          tr4.append(td1,td2,td3);
          table2.append(tr4)
          document.body.append(table2)
      
         
          

          //THIS IS ABILITY FOR LOOP
          var a=pooki1.abilities;
          for(let j=0; j<a.length;j++){            
          var  tr5=trow("tr","class","tableRow")
          var  td4=tdata("td",`${a[j].ability.name}`)
          var  td5=tdata("td",`${a[j].ability.url}`)
          tr5.append(td4,td5)
          table3.append(tr5);
          document.body.append(table3)       
          }
           
          //THIS IS MOVES FOR LOOP
          var m=pooki1.moves;
          for(let k=0; k<m.length;k++){
          var tr6=trow("tr","class","tableRow")
          var td6=tdata("td",`${m[k].move.name}`)
          var td7=tdata("td",`${m[k].move.url}`)
          tr6.append(td6,td7)
          table4.append(tr6);
          document.body.append(table4)
          }
        
          }
           //CLICK addeventlistener
          button1.addEventListener("click",pookimonGo);    
    }
//catch method
catch(error){
    alert("error occured")
}
}
pookie()

