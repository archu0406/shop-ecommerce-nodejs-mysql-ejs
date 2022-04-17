function saveProduct(){
    var name = document.querySelector("#name").value;
    var amount = document.querySelector("#amount").value;
    var sku = document.querySelector("#sku").value;
    var description = document.querySelector("#description").value;
    alert('idlvaue:'+ urlString.split('/')[1]);
    fetch('/items/'+urlString.split('/')[1],  {method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"name": name , "sku": sku ,"description": description,"amount":amount })
    }).then(response=>response.json())
    .then(data=> { 
       alert("Product Created Successfully!!");
       document.querySelector("#id").value = "";
       document.querySelector("#name").value = "";
       document.querySelector("#amount").value = "";
       document.querySelector("#sku").value = "";
       document.querySelector("#description").value = "";
    });
}

function setValues(){
    fetch('/items/'+window.location.href.split('/')[4]).then(response=>response.json())
    .then(data=> { 
       alert("details are:"+ data);
       document.querySelector("#id").value = data.id;
       document.querySelector("#name").value = data.name;
       document.querySelector("#amount").value = data.amount;
       document.querySelector("#sku").value = data.sku;
       document.querySelector("#description").value = data.description;
    });
}

setValues();