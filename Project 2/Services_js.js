window.addEventListener('load', function() {
    var img = document.getElementById('my-image');
    img.addEventListener('load', function() {
      img.style.filter = 'none'; 
      img.style.opacity = '1'; 
    });
  });