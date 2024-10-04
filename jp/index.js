(async () => {
  await tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    particles: {
      color: {
        value: "#c188cf",
      }
    },
    background: {
      color: {
        value: "#191919",
      }
    },
    preset: "firefly",
  });
})();


const seeProjects = () => {
  const projects = document.getElementById("projects");
  return projects.scrollIntoView();
};

const viewProj = document.getElementById("view-proj");
viewProj.addEventListener("click", seeProjects);



let mybutton = document.getElementById("myBtn");

let topnav = document.getElementById("topnav");

window.onscroll = function() {scrollFunction()};

const isActive = () => mybutton.classList.contains("active");

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight - 80) || document.documentElement.scrollTop > (window.innerHeight - 80)) {
    mybutton.classList.add("active");
    topnav.classList.add("active");
  } else {
    if (isActive()) {
      mybutton.classList.remove("active");
      topnav.classList.remove("active");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", topFunction);

function showMore(event) {
  const toggle = document.getElementById("more-skills");
  const btn = document.getElementById("show-btn")
  if (toggle.style.display === "none" || toggle.style.display === "") {
    toggle.style.display = "block";
    btn.innerText = "隠す"
  } else {
    toggle.style.display = "none";
    btn.innerText = "もっと見る";
  }
  event.preventDefault();
}

document.getElementById("show-btn").addEventListener("click", showMore);
