// your code here!
console.log("🥧")

function renderAllBakes() {



    fetch("http://localhost:3000/bakes")
        .then(response => response.json())
        .then(bakes => {
            bakes.forEach(function (bake) {
                renderOneBake(bake)
            })
        })
}

const ul = document.querySelector("ul#bakes-container")
function renderOneBake(bake) {
    let li = document.createElement("li")
    ul.append(li)
    li.innerHTML = `<li class="item" data-id="${bake.id}"> ${bake.name}</li>`
}

const detailDiv = document.querySelector("div#detail")


ul.addEventListener("click", function (event){
    if(event.target.className === "item"){
        const liId = event.target.dataset.id
    fetch(`http://localhost:3000/bakes/${liId}`)
    .then(response => response.json())
    .then(bake => {
        detailDiv.innerHTML = `<img src="${bake.image_url}" alt="${bake.name}">
        <h1>${bake.name}</h1>
        <p class="description">
            ${bake.description}
</p>
        <form id="score-form" data-id="${bake.id}">
            <input value="${bake.score}" type="number" name="score" min="0" max="10" step="1">
                <input type="submit" value="Rate">
</form>`
    })
    }
    })

    const form = document.querySelector("form#new-bake-form")

    form.addEventListener("submit", function (event){
        const name = event.target[0].value
        const image_url = event.target[1].value
        const description = event.target[2].value

        const bakeObj = {name, image_url, description, score: 0}

        renderOneBake(bakeObj)

        fetch("http://localhost:3000/bakes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(bakeObj)
        })
       .then(response => response.json())
       .then(newBakeObj => {})
       event.target.reset
       })

    




// initialize//
renderAllBakes()