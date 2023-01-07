function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href= 'https://wa.me/5511978029006'

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

   softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

   hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')

   languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateEducation(profileData){
    const education = document.getElementById('profile.education')

   education.innerHTML = profileData.education.map(curse => {
    return `
    <li class"education">
        <h3>${curse.name}</h3><br>
        <p>${curse.description}</p><br>
    </li>
    `
   }).join('')

} 
    

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project =>{
        return `
        <li>
            <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
    `
    }).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(professional => {
        return `
        <li>
            <h2 class="">${professional.name}</h2>
            <h3 class="period">${professional.period}</h3>
            <p>${professional.description}</p>
        </li>
        `
    }).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateEducation(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()