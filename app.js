const weekIndicator = document.getElementById('weekIndicator');
const todayDate = document.getElementById('todayDate');
const scheduleBody = document.getElementById('scheduleBody');
const prevWeekButton = document.getElementById('prevWeek');
const nextWeekButton = document.getElementById('nextWeek');
const themeToggle = document.getElementById('themeToggle');

let currentWeekIndex = 0;

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
  if (todayDate) todayDate.textContent = now.toLocaleDateString('ru-RU', options);
};

const parseDate = (ddmm) => {
  const [d, m] = ddmm.split('.').map(Number);
  const year = new Date().getFullYear();
  return new Date(year, m - 1, d);
};

const weeksRanges = [
  { label: '1 неделя', start: '03.06', end: '06.06' },
  { label: '2 неделя', start: '08.06', end: '13.06' },
  { label: '3 неделя', start: '15.06', end: '20.06' },
  { label: '4 неделя', start: '22.06', end: '27.06' },
];

const weeks = weeksRanges.map((r) => {
  const start = parseDate(r.start);
  const end = parseDate(r.end);
  const items = scheduleData
    .map((it) => ({ ...it, _dateObj: parseDate(it.date) }))
    .filter((it) => it._dateObj >= start && it._dateObj <= end);
  return { key: r.label, items, range: { min: start, max: end } };
});

const formatShort = (d) => {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}.${mm}`;
};

const updateWeekIndicator = () => {
  if (!weekIndicator) return;
  if (weeks.length === 0) {
    weekIndicator.textContent = 'Нет недель';
    if (prevWeekButton) prevWeekButton.disabled = true;
    if (nextWeekButton) nextWeekButton.disabled = true;
    return;
  }
  const wk = weeks[currentWeekIndex] || weeks[0];
  // show only the week label (e.g. "1 неделя")
  weekIndicator.textContent = wk.key;
  if (prevWeekButton) prevWeekButton.disabled = currentWeekIndex <= 0;
  if (nextWeekButton) nextWeekButton.disabled = currentWeekIndex >= weeks.length - 1;
};

const renderSchedule = () => {
  if (!scheduleBody) return;
  if (!weeks || weeks.length === 0 || currentWeekIndex < 0) {
    scheduleBody.innerHTML = `\n      <tr class="empty-row">\n        <td colspan="6">Расписание пустое.</td>\n      </tr>\n    `;
    updateWeekIndicator();
    return;
  }

  const entries = weeks[currentWeekIndex].items.slice().sort((a, b) => a._dateObj - b._dateObj || (a.aud - b.aud));

  const groups = entries.reduce((acc, item) => {
    const key = `${item.date}__${item.day}`;
    if (!acc[key]) acc[key] = { header: { date: item.date, day: item.day }, items: [] };
    acc[key].items.push(item);
    return acc;
  }, {});

  const timeColumn = `
      <td class="time-column" rowspan="${entries.length}">
        <div class="time-column-inner">
          <strong>1-я пара</strong><br />08:30–09:15 / 09:20–10:05<br />
          <strong>Перерыв</strong> 15 мин<br /><br />
          <strong>2-я пара</strong><br />10:20–11:05 / 11:10–11:55<br />
          <strong>Перерыв</strong> 15 мин<br /><br />
          <strong>3-я пара</strong><br />12:10–12:55 / 13:00–13:45<br />
          <strong>Перерыв</strong> 45 мин<br /><br />
          <strong>4-я пара</strong><br />14:30–15:15 / 15:20–16:05<br />
          <strong>Перерыв</strong> 15 мин<br /><br />
          <strong>5-я пара</strong><br />16:20–17:05 / 17:10–17:55<br />
          <strong>Перерыв</strong> 15 мин<br /><br />
          <strong>6-я пара</strong><br />18:10–18:55 / 19:00–19:45
        </div>
      </td>`;

  let firstRow = true;

  const scheduleRows = Object.values(groups)
    .map((group) => {
      return group.items
        .map((it, idx) => {
          let timeCell = '';
          if (idx === 0) {
            timeCell = firstRow ? timeColumn : '';
            firstRow = false;
            return `\n      <tr>\n        <td>${group.header.date}</td>\n        <td>${group.header.day}</td>\n        <td>${it.aud}</td>\n        <td>${it.name}</td>\n        ${timeCell}\n        <td>${it.fio}</td>\n      </tr}`;
          }
          return `\n      <tr>\n        <td></td>\n        <td></td>\n        <td>${it.aud}</td>\n        <td>${it.name}</td>\n        ${timeCell}\n        <td>${it.fio}</td>\n      </tr>`;
        })
        .join('');
    })
    .join('');

  scheduleBody.innerHTML = scheduleRows || `\n    <tr class="empty-row">\n      <td colspan="6">Расписание пустое.</td>\n    </tr>`;
  updateWeekIndicator();
};

const gotoWeek = (delta) => {
  if (!weeks || weeks.length === 0) return;
  currentWeekIndex = Math.max(0, Math.min(weeks.length - 1, currentWeekIndex + delta));
  renderSchedule();
};

if (prevWeekButton) prevWeekButton.addEventListener('click', () => gotoWeek(-1));
if (nextWeekButton) nextWeekButton.addEventListener('click', () => gotoWeek(1));

// Theme toggle logic
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

renderToday();
// default to week containing today's date (if any), otherwise first week
const today = new Date();
let foundIndex = weeks.findIndex((w) => today >= w.range.min && today <= w.range.max);
if (foundIndex === -1) foundIndex = 0;
currentWeekIndex = foundIndex;
renderSchedule();
