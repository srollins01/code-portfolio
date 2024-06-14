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

window.onscroll = function() {scrollFunction()};

const isActive = () => mybutton.classList.contains("active");

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight - 80) || document.documentElement.scrollTop > (window.innerHeight - 80)) {
    mybutton.classList.add("active");
  } else {
    if (isActive()) {
      mybutton.classList.remove("active");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
