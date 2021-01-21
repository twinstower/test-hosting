//movement animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Moving Animation Event
container.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) /10;
  let yAxis = (window.innerHeight / 2 - e.pageY) /10;
  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

// container.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });