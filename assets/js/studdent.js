function getPromoId() {
    let url = window.location.href //recupere l'url en chaine de caractere
    let objUrl = new URL(url) // converti l'url en objet
    const id = objUrl.searchParams.get("id") // recupere le parametre de requete "id"
    return id
}

async function getStudentByPromo() {
    const response = await fetch("http://146.59.242.125:3004/promos/" + getPromoId(),{
        headers: {
            "Authorization": "Bearer 53f869ca-2cd2-491b-96ac-1b7f59b4d18e"
        }
    })
    const data = await response.json()
    const students = data.students
    console.log(students);
    
}

getStudentByPromo()