const weekIndicator = document.getElementById('weekIndicator');
const todayDate = document.getElementById('todayDate');
const scheduleBody = document.getElementById('scheduleBody');
const prevWeekButton = document.getElementById('prevWeek');
const nextWeekButton = document.getElementById('nextWeek');
const groupSelect = document.getElementById('groupSelect');

let currentWeek = 1;

const scheduleData = [
  { date: '03.06', day: 'Ср', aud: '32', name: 'Основы российской государственности и права человека', fio: 'Вязьмитинова И.П.' },
  { date: '03.06', day: 'Ср', aud: '60', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '04.06', day: 'Чт', aud: '111', name: 'Электротехника и электроника', fio: 'Милашкина О.В.' },
  { date: '04.06', day: 'Чт', aud: '32', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '05.06', day: 'Пт', aud: '22', name: 'Стратегические бизнес-процессы на воздушном транспорте', fio: 'Муравьева Е.В.' },
  { date: '05.06', day: 'Пт', aud: '60', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '06.06', day: 'Сб', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '08.06', day: 'Пн', aud: '32', name: 'Внутренний и внешний аудит на воздушном транспорте', fio: 'Терехина С.Э.' },
  { date: '08.06', day: 'Пн', aud: '62', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '09.06', day: 'Вт', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '09.06', day: 'Вт', aud: '111', name: 'Электротехника и электроника', fio: 'Милашкина О.В.' },
  { date: '10.06', day: 'Ср', aud: '32', name: 'Основы российской государственности и права человека', fio: 'Вязьмитинова И.П.' },
  { date: '10.06', day: 'Ср', aud: '30', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '11.06', day: 'Чт', aud: '59', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '11.06', day: 'Чт', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '13.06', day: 'Сб', aud: '12', name: 'Стратегические бизнес-процессы на воздушном транспорте', fio: 'Муравьева Е.В.' },
  { date: '13.06', day: 'Сб', aud: '12', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '15.06', day: 'Пн', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '15.06', day: 'Пн', aud: '62', name: 'Метрология, стандартизация и сертификация', fio: 'Тихонов В.О.' },
  { date: '16.06', day: 'Вт', aud: '32', name: 'Внутренний и внешний аудит на воздушном транспорте', fio: 'Терехина С.Э.' },
  { date: '16.06', day: 'Вт', aud: '32', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '17.06', day: 'Ср', aud: '111', name: 'Электротехника и электроника', fio: 'Милашкина О.В.' },
  { date: '17.06', day: 'Ср', aud: '63', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '18.06', day: 'Чт', aud: '22', name: 'Основы российской государственности и права человека (зачёт)', fio: 'Вязьмитинова И.П.' },
  { date: '18.06', day: 'Чт', aud: '22', name: 'Внутренний и внешний аудит на ВТ (консультация)', fio: 'Терехина С.Э.' },
  { date: '19.06', day: 'Пт', aud: '64', name: 'Патентоведение и ЗИС (консультация)', fio: 'Козак Н.П.' },
  { date: '19.06', day: 'Пт', aud: '22', name: 'Внутренний и внешний аудит на ВТ (экзамен)', fio: 'Терехина С.Э.' },
  { date: '20.06', day: 'Сб', aud: '64', name: 'Патентоведение и ЗИС (экзамен)', fio: 'Козак Н.П.' },
  { date: '20.06', day: 'Сб', aud: '32', name: 'История транспорта России (зачёт)', fio: 'Вязьмитинова И.П.' },
  { date: '22.06', day: 'Пн', aud: '32', name: 'Стратегические бизнес-процессы на воздушном транспорте (консультация)', fio: 'Муравьева Е.В.' },
  { date: '23.06', day: 'Вт', aud: '32', name: 'Стратегические бизнес-процессы на воздушном транспорте (экзамен)', fio: 'Муравьева Е.В.' },
  { date: '23.06', day: 'Вт', aud: '32', name: 'Управление производством и проектный консалтинг на ВТ (консультация)', fio: 'Муравьева Е.В.' },
  { date: '24.06', day: 'Ср', aud: '32', name: 'УП и ПК на ВТ (экзамен)', fio: 'Муравьева Е.В.' },
  { date: '24.06', day: 'Ср', aud: '111', name: 'Электротехника и электроника (консультация)', fio: 'Милашкина О.В.' },
  { date: '25.06', day: 'Чт', aud: '111', name: 'Электротехника и электроника (экзамен)', fio: 'Милашкина О.В.' },
  { date: '25.06', day: 'Чт', aud: '27', name: 'Аэропорты и аэродромная деятельность (консультация)', fio: 'Фролов В.А.' },
  { date: '26.06', day: 'Пт', aud: '27', name: 'Аэропорты и аэродромная деятельность (экзамен)', fio: 'Фролов В.А.' },
];

const renderToday = () => {
  const now = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  todayDate.textContent = now.toLocaleDateString('ru-RU', options);
};

const renderSchedule = () => {
  const scheduleRows = scheduleData
    .map((item) => `
      <tr>
        <td>${item.date}</td>
        <td>${item.day}</td>
        <td>${item.aud}</td>
        <td>${item.name}</td>
        <td>${item.fio}</td>
      </tr>
    `)
    .join('');

  scheduleBody.innerHTML = scheduleRows || `
    <tr class="empty-row">
      <td colspan="5">Расписание пустое.</td>
    </tr>
  `;
};

// Theme toggle logic
const themeToggle = document.getElementById('themeToggle');
const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  const isDark = theme === 'dark';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = isDark ? 'Тёмная' : 'Светлая';
  }
};

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = (localStorage.getItem('theme') || 'light') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}

const updateWeek = (delta) => {
  currentWeek = Math.max(1, currentWeek + delta);
  weekIndicator.textContent = `${currentWeek}-я неделя`;
  renderSchedule();
};

prevWeekButton.addEventListener('click', () => updateWeek(-1));
nextWeekButton.addEventListener('click', () => updateWeek(1));
groupSelect.addEventListener('change', renderSchedule);

renderToday();
renderSchedule();
