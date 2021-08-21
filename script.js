let generateButton = document.getElementById("btnSubmit");
    generateButton.addEventListener("click", function(){
            // console.log("Hey");
            let inputValue = document.getElementById("inputNumber");
            // inputValue.addEventListener("change", function (){
                
                console.log(inputNumber.value);
                document.getElementById("result").innerHTML="<br>";
                function multiplicationTable(number){
                    for(let i=1; i<=10; i++){
                        document.getElementById("result").innerText+=`${number} x ${i} = ${number*i} `;
                        document.getElementById("result").innerHTML+="<br>";
                    
                
                    }
                }

                multiplicationTable(inputNumber.value);

            // })

})



