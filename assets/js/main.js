function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const position = document.getElementById("profile.position");
  position.innerText = profileData.position;

  const local = document.getElementById("profile.local");
  local.innerText = profileData.local;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const mail = document.getElementById("profile.mail");
  mail.innerText = profileData.mail;
  mail.href = `mailto:${profileData.mail}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills');
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
})();
