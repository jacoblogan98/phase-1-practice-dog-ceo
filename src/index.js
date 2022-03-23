console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    //Challenge 1
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        const array = data.message
        const imageDiv = document.querySelector("#dog-image-container")

        array.forEach(img => {
            const image = document.createElement("img")
            image.src = `${img}`
            imageDiv.append(image)
        })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then (data => {
        const breedList = document.querySelector("#dog-breeds")
        const dropdown = document.querySelector("#breed-dropdown")
        const breedArray = Object.keys(data.message)

        //Challenge 2 
        breedArray.forEach(breed => {
            const dog = document.createElement("li")
            dog.textContent = `${breed}`
            breedList.append(dog)
            
            //Challenge 3
            dog.addEventListener("click", dog => dog.target.style.color = "red")
        })
        
        //Challenge 4:
        dropdown.addEventListener('change', (e) => {
            let selection = e.target.value;
            
            breedList.textContent = ""

            let filteredBreeds = breedArray.filter(breed => breed.charAt(0) === selection)
            filteredBreeds.forEach(breed =>{
                const dog = document.createElement("li")
    
                dog.addEventListener("click", dog => dog.target.style.color = "red")
                dog.textContent = `${breed}`
                breedList.append(dog)
            })
        })
    })
})
