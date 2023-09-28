async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/EduMartim/proj-frontend-portfolio/main/data/profile.json';
    const fechting = await fetch(url);
    return await fechting.json();
}

/*
** para abrir o servidor local, digite no terminal:
** http-server ./
*/