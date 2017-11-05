window.onload = function(){
  // if you don't want to read the code, line 3 is the only variable you should have to change
  var numberOfTables = 4;
  const offsetVal = 100;
  var currentIdx = 0;
  const maxIdx = numberOfTables - 1;
  var mainSlide = document.querySelector('div.slides');
  function getPos(idx){
     return '-' + (offsetVal * idx).toString() + 'vw';
  }

  document.querySelector('.arrow-right').addEventListener('click', function(e){
    if (currentIdx < maxIdx){
      currentIdx++;
      mainSlide.style.left = getPos(currentIdx);
    }
  });

  document.querySelector('.arrow-left').addEventListener('click', function(e){
    if (currentIdx > 0){
      currentIdx--;
      mainSlide.style.left = getPos(currentIdx);
    }
  });
};
