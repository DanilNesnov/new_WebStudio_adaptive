document.getElementById('myInput').addEventListener('focus', function() {
  document.getElementById('cardInput').classList.add('card-input-focused');
});

document.getElementById('myInput').addEventListener('blur', function() {
  document.getElementById('cardInput').classList.remove('card-input-focused');
});
