const buttons = document.querySelectorAll('.ripple button');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const circle = document.createElement('span');
    circle.classList.add('ripple-circle');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});