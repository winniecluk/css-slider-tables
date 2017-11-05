window.onload = function(){
  const offsetVal = 100;
  var currentIdx = 0;
  const maxIdx = 3;
  var mainSlide = document.querySelector('div.slides');
  function getPos(idx){
     return '-' + (offsetVal * idx).toString() + 'vw';
  }

  document.querySelector('.arrow-right').addEventListener('click', function(e){
    if (currentIdx < maxIdx){
      console.log(currentIdx);
      currentIdx++;
      console.log(currentIdx);
      mainSlide.style.left = getPos(currentIdx);
    }
  });

  document.querySelector('.arrow-left').addEventListener('click', function(e){
    if (currentIdx > 0){
      console.log(currentIdx);
      currentIdx--;
      console.log(currentIdx);
      mainSlide.style.left = getPos(currentIdx);
    }
  });
};
