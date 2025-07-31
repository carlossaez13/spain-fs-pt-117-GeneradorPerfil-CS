import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  let cover = "";
  if (variables.includeCover === false) {
    cover = '<div class="cover"></div>';
  } else {
    let backgroundURL = variables.background;
    if (!backgroundURL) {
      backgroundURL = "./assets/img/default-cover.jpg";
    }
    cover = `<div class="cover"><img src="${backgroundURL}" /></div>`;
  }

  let avatar = variables.avatarURL;
  if (!avatar) {
    avatar = "./assets/img/default-avatar.png";
  }

  let name = variables.name;
  let lastname = variables.lastname;

  if (!name && !lastname) {
    name = "Name";
    lastname = "Lastname";
  } else {
    if (!name) name = "";
    if (!lastname) lastname = "";
  }

  let fullName = name + " " + lastname;

  let role = variables.role;
  if (!role) {
    role = "Professional Role";
  }

  let city = variables.city;
  let country = variables.country;

  let location = "";
  if (!city && !country) {
    location = "City, Country";
  } else {
    if (!city) city = "";
    if (!country) country = "";
    location = city + ", " + country;
  }

  let socialMediaPosition = "position-left";
  if (variables.socialMediaPosition === "right") {
    socialMediaPosition = "position-right";
  }

  let twitter = "";
  if (variables.twitter) {
    twitter = `<li><a href="https://twitter.com/${variables.twitter}" target="_blank"><i class="fa fa-twitter"></i></a></li>`;
  } else {
    twitter = `<li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>`;
  }

  let github = "";
  if (variables.github) {
    github = `<li><a href="https://github.com/${variables.github}" target="_blank"><i class="fa fa-github"></i></a></li>`;
  } else {
    github = `<li><a href="#" target="_blank"><i class="fa fa-github"></i></a></li>`;
  }

  let linkedin = "";
  if (variables.linkedin) {
    linkedin = `<li><a href="https://linkedin.com/in/${variables.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a></li>`;
  } else {
    linkedin = `<li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>`;
  }

  let instagram = "";
  if (variables.instagram) {
    instagram = `<li><a href="https://instagram.com/${variables.instagram}" target="_blank"><i class="fa fa-instagram"></i></a></li>`;
  } else {
    instagram = `<li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>`;
  }

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatar}" class="photo" />
      <h1>${fullName}</h1>
      <h2>${role}</h2>
      <h3>${location}</h3>
      <ul class="${socialMediaPosition}">
        ${twitter}
        ${github}
        ${linkedin}
        ${instagram}
      </ul>
    </div>
  `;
}
/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
