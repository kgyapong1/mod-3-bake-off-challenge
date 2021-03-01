// your code here!
console.log("🥧")

fetch("http://localhost:3000/bakes")
.then(response => response.json())
.then(bakes => {
     bakes.forEach(function(bake){
         renderOneBake(bake)
     })
})
const ul = document.querySelector("ul#bakes-container")
function renderOneBake(bake) { 
    let li = document.createElement("li")
    ul.append(li)
    li.innerHTML = `<li class="item" data-id="${bake.id}"> ${bake.name}</li>`

}