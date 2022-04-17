function fetchItems() {
    fetch('/items').then(response=>response.json())
    .then(data=> { 
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            console.log(item.name);
            const node = document.createElement("li");

            var itemsListParent = document.querySelector("#items_list");
            node.setAttribute("id", item.id);
            let imageAhNode = document.createElement("a");
            imageAhNode.setAttribute("data-lightbox", "mygallery");
            imageAhNode.setAttribute("href", item.image);

            let imageNode = document.createElement("img");
            imageNode.className = "thumbnail_image";
            imageNode.src = item.image;

            imageNode.setAttribute("width", "100"); 
            imageNode.setAttribute("height", "100");

            imageAhNode.appendChild(imageNode);
            node.appendChild(imageAhNode);

            let dummyPara = document.createElement("br");
            node.appendChild(dummyPara);

            const textnode = document.createTextNode(item.name);
            node.appendChild(textnode);  
            node.className = "items_li";

            let deleteButton = document.createElement("input");
            deleteButton.className = "delete_button";
            deleteButton.textContent= "Delete";
            deleteButton.setAttribute("type", "button");
            deleteButton.setAttribute("value", "Delete");
            deleteButton.setAttribute("onClick", "deleteItem("+item.id+ ")");
            node.appendChild(deleteButton);

            let editButton = document.createElement("input");
            editButton.className = "edit_button";
            editButton.setAttribute("value", "Edit");
            editButton.setAttribute("type", "button");
            editButton.setAttribute("onClick", "editItem("+item.id+ ")");
            node.appendChild(editButton);

            itemsListParent.appendChild(node);
        }
    })
}

fetchItems();

async function deleteItem(id){
    await fetch('/items/'+id,  {method: 'DELETE'}).then(response=>response.json())
    .then(data=> { 
       document.querySelector("[id='"+ id + "']").remove();
       alert("Deleted Successfully!!");
    });
}


async function editItem(id){
    window.location.href = "/edit/"+id;
}