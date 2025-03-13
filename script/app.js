const loadCategory = async ()=> {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await response.json()
    console.log(data.categories) 
}
loadCategory()