window.addEventListener('load', function() {
  var modal = document.createElement('div');
  modal.className = 'modal';

  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = '<p>Wheatley: Скажи "Пук"</p><button id="jumpButton">пук</button>';
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  var jumpButton = document.getElementById('jumpButton');
  jumpButton.addEventListener('click', function() {
    modal.style.display = 'none';
    alert('Wheatley: ну и чего мы пукаем в общественном месте?Вот ванючка');
  });
  modal.style.display = 'block';
});
