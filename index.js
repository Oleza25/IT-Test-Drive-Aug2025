console.log("Привет, мир!")
const btn = document.getElementById('actionBtn');
const status = document.getElementById('status');

if (btn && status) {
  let toggled = false;

  btn.addEventListener('click', () => {
    toggled = !toggled;
    status.textContent = toggled
      ? 'Текст изменён! Кнопка работает ✅'
      : 'Стартовая версия страницы. Сейчас всё работает 🎉';
    btn.textContent = toggled ? 'Вернуть обратно' : 'Нажми меня';
  });
}

