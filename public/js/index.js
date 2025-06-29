
fetch('/api/v1/getRandomImage')
  .then(res => res.json())
  .then(data => {
    document.querySelector('.background-img').style.backgroundImage = `url('${data.data}')`;
  });

