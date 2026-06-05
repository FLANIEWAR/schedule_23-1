const weekIndicator = document.getElementById('weekIndicator');
const todayDate = document.getElementById('todayDate');
const prevWeekButton = document.getElementById('prevWeek');
const nextWeekButton = document.getElementById('nextWeek');
const scheduleList = document.getElementById('scheduleList');
const themeToggle = document.getElementById('themeToggle');

let currentWeekIndex = 0;

const scheduleData = [
  { date: '03.06', pair: '5', day: 'Ср', aud: '32', name: 'Основы российской государственности и права человека', fio: 'Вязьмитинова И.П.' },
  { date: '03.06', pair: '6', day: 'Ср', aud: '60', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '04.06', pair: '5', day: 'Чт', aud: '111', name: 'Электротехника и электроника', fio: 'Милашкина О.В.' },
  { date: '04.06', pair: '6', day: 'Чт', aud: '32', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '05.06', pair: '5', day: 'Пт', aud: '22', name: 'Стратегические бизнес-процессы на воздушном транспорте', fio: 'Муравьева Е.В.' },
  { date: '05.06', pair: '6', day: 'Пт', aud: '60', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '06.06', pair: '5', day: 'Сб', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '08.06', pair: '5', day: 'Пн', aud: '32', name: 'Внутренний и внешний аудит на воздушном транспорте', fio: 'Терехина С.Э.' },
  { date: '08.06', pair: '6', day: 'Пн', aud: '62', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '09.06', pair: '5', day: 'Вт', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '09.06', pair: '6', day: 'Вт', aud: '111', name: 'Электротехника и электроника', fio: 'Милашкина О.В.' },
  { date: '10.06', pair: '5', day: 'Ср', aud: '32', name: 'Основы российской государственности и права человека', fio: 'Вязьмитинова И.П.' },
  { date: '10.06', pair: '6', day: 'Ср', aud: '30', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '11.06', pair: '5', day: 'Чт', aud: '59', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '11.06', pair: '6', day: 'Чт', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '13.06', pair: '4', day: 'Сб', aud: '12', name: 'Стратегические бизнес-процессы на воздушном транспорте', fio: 'Муравьева Е.В.' },
  { date: '13.06', pair: '5', day: 'Сб', aud: '12', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '15.06', pair: '5', day: 'Пн', aud: '27', name: 'Аэропорты и аэродромная деятельность', fio: 'Фролов В.А.' },
  { date: '15.06', pair: '6', day: 'Пн', aud: '62', name: 'Метрология, стандартизация и сертификация', fio: 'Тихонов В.О.' },
  { date: '16.06', pair: '4', day: 'Вт', aud: '32', name: 'Внутренний и внешний аудит на воздушном транспорте', fio: 'Терехина С.Э.' },
  { date: '16.06', pair: '5', day: 'Вт', aud: '32', name: 'Управление производством и проектный консалтинг на ВТ', fio: 'Муравьева Е.В.' },
  { date: '17.06', pair: '4', day: 'Ср', aud: '111', name: 'Электротехника и электроника', fio: 'Милашкина О.В.' },
  { date: '17.06', pair: '5', day: 'Ср', aud: '63', name: 'Патентоведение и защита интеллектуальной собственности', fio: 'Козак Н.П.' },
  { date: '18.06', pair: '5', day: 'Чт', aud: '22', name: 'Основы российской государственности и права человека (зачёт)', fio: 'Вязьмитинова И.П.' },
  { date: '18.06', pair: '6', day: 'Чт', aud: '22', name: 'Внутренний и внешний аудит на ВТ (консультация)', fio: 'Терехина С.Э.' },
  { date: '19.06', pair: '4', day: 'Пт', aud: '64', name: 'Патентоведение и ЗИС (консультация)', fio: 'Козак Н.П.' },
  { date: '19.06', pair: '5', day: 'Пт', aud: '22', name: 'Внутренний и внешний аудит на ВТ (экзамен)', fio: 'Терехина С.Э.' },
  { date: '20.06', pair: '4', day: 'Сб', aud: '64', name: 'Патентоведение и ЗИС (экзамен)', fio: 'Козак Н.П.' },
  { date: '22.06', pair: '5', day: 'Пн', aud: '32', name: 'Стратегические бизнес-процессы на воздушном транспорте (консультация)', fio: 'Муравьева Е.В.' },
  { date: '23.06', pair: '4', day: 'Вт', aud: '32', name: 'Стратегические бизнес-процессы на воздушном транспорте (экзамен)', fio: 'Муравьева Е.В.' },
  { date: '23.06', pair: '6', day: 'Вт', aud: '32', name: 'Управление производством и проектный консалтинг на ВТ (консультация)', fio: 'Муравьева Е.В.' },
  { date: '24.06', pair: '5', day: 'Ср', aud: '32', name: 'УП и ПК на ВТ (экзамен)', fio: 'Муравьева Е.В.' },
  { date: '24.06', pair: '6', day: 'Ср', aud: '111', name: 'Электротехника и электроника (консультация)', fio: 'Милашкина О.В.' },
  { date: '25.06', pair: '5', day: 'Чт', aud: '111', name: 'Электротехника и электроника (экзамен)', fio: 'Милашкина О.В.' },
  { date: '25.06', pair: '6', day: 'Чт', aud: '27', name: 'Аэропорты и аэродромная деятельность (консультация)', fio: 'Фролов В.А.' },
  { date: '26.06', pair: '5', day: 'Пт', aud: '27', name: 'Аэропорты и аэродромная деятельность (экзамен)', fio: 'Фролов В.А.' },
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
  if (!scheduleList) return;
  if (!weeks || weeks.length === 0 || currentWeekIndex < 0) {
    scheduleList.innerHTML = `<p class="empty-row">Расписание пустое.</p>`;
    updateWeekIndicator();
    return;
  }

  const entries = weeks[currentWeekIndex].items.slice().sort((a, b) => a._dateObj - b._dateObj || Number(a.pair) - Number(b.pair));

  const pairTimes = {
    '4': '14:30–15:15',
    '5': '16:20–17:05',
    '6': '17:10–17:55',
  };

  const groups = entries.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

    const scheduleHTML = Object.keys(groups)
      .map((date) => {
        const items = groups[date];
        const cards = items
          .map((it) => {
            const time = pairTimes[it.pair] || '';
            const audMatch = String(it.aud).match(/(\d+(-\d+)?)/);
            const audDisp = audMatch ? audMatch[0] : String(it.aud).replace(/^Корпус\s*/i, '').trim();
            const nameLower = String(it.name).toLowerCase();
            let typeLabel = 'Лекция';
            let typeClass = 'lecture';
            if (nameLower.includes('зачёт') || nameLower.includes('зачет')) {
              typeLabel = 'Зачёт';
              typeClass = 'exam';
            } else if (nameLower.includes('экзамен')) {
              typeLabel = 'Экзамен';
              typeClass = 'exam';
            } else if (nameLower.includes('практик') || nameLower.includes('семинар') || nameLower.includes('практ')) {
              typeLabel = 'Практика (семинар)';
              typeClass = 'practice';
            }
            return `\n        <div class="schedule-card pair-${it.pair}">\n          <div class="card-header">\n            <div class="card-date-time"><span class="card-time">${time}</span></div>\n            <div class="card-aud">${audDisp}</div>\n          </div>\n          <div class="card-body">\n            <div class="card-pair">${it.pair}</div>\n            <div class="card-type ${typeClass}">${typeLabel}</div>\n            <div class="card-title">${it.name}</div>\n          </div>\n          <div class="card-footer">\n            <div class="card-fio">${it.fio}</div>\n          </div>\n        </div>`;
            })
          .join('');
        return `\n      <div class="date-group">\n        <div class="date-label">${date}</div>\n        ${cards}\n      </div>`;
      })
      .join('');

    scheduleList.innerHTML = scheduleHTML || `<p class="empty-row">Расписание пустое.</p>`;
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
