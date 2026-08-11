const video = document.getElementById('birthdayVideo');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
  if(video) video.play();
});

prevBtn.addEventListener('click', () => {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
  if(video) video.pause();
});
