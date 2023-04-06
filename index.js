(async () => {
  await tsParticles.load("tsparticles", {
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
