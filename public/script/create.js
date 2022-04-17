function saveProduct(){
    var name = document.querySelector("#name").value;
    var amount = document.querySelector("#amount").value;
    var sku = document.querySelector("#sku").value;
    var description = document.querySelector("#description").value;
    fetch('/items',  {method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"name": name , "sku": sku ,"description": description,"amount":amount })
    }).then(response=>response.json())
    .then(data=> { 
       alert("Product Created Successfully!!");
       document.querySelector("#name").value = "";
       document.querySelector("#amount").value = "";
       document.querySelector("#sku").value = "";
       document.querySelector("#description").value = "";
    });
}