async function fetchProfileData() {
    const url ='https://raw.githubusercontent.com/andressapateno/js-developer-portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}