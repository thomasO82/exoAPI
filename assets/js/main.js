const promosContainer = document.querySelector('#promoContainer')

async function getPromos() {
    const response = await fetch("http://146.59.242.125:3004/promos", {
        headers: {
            "Authorization": "Bearer 53f869ca-2cd2-491b-96ac-1b7f59b4d18e"
        }
    })
    const data = await response.json()
    return data
}


async function displayPromo() {
    const promos = await getPromos()
    promosContainer.innerHTML = ""
    promos.forEach(promo => {
        console.log(promo);
        const article = document.createElement('article')
        const title = document.createElement('h3')
        title.textContent = promo.name
        article.appendChild(title)
        const buttonContainer = document.createElement('div')
        article.appendChild(buttonContainer)
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Supprimer"
        const detailBtn = document.createElement('a')
        detailBtn.href = "./pages/studdent.html?id="+promo._id
        
        detailBtn.textContent = "Detail"
        buttonContainer.appendChild(deleteBtn)
        buttonContainer.appendChild(detailBtn)
        promosContainer.appendChild(article)
        deleteBtn.addEventListener('click', () => {
            deletePromo(promo._id)
        })
    });
}

async function deletePromo(promoId) {
    const response = await fetch("http://146.59.242.125:3004/promos/" + promoId, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer 53f869ca-2cd2-491b-96ac-1b7f59b4d18e",

        }
    })
    console.log(response);
    const data = await response.json()
    console.log(data);
    displayPromo()
}

async function addPromo() {
    const startDate = new Date(document.querySelector('#startDate').value).toISOString()
    const endDate = new Date(document.querySelector('#endDate').value).toISOString()
    const body = {
        "name": "squalala",
        "startDate": startDate,
        "endDate": endDate
    }
    console.log(JSON.stringify(body));
    const response = await fetch("http://146.59.242.125:3004/promos", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 53f869ca-2cd2-491b-96ac-1b7f59b4d18e",
            "Content-type" : "Application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    console.log(data);
    displayPromo()
}




displayPromo()