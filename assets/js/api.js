async function fetchProfileData() {
    const url = 'https://github.com/EduMartim/proj-frontend-portfolio/blob/main/data/profile.json';
    const fechting = await fetch(url);
    return await fechting.json();
}