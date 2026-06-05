const weekIndicator = document.getElementById('weekIndicator');
const todayDate = document.getElementById('todayDate');
const scheduleBody = document.getElementById('scheduleBody');
const prevWeekButton = document.getElementById('prevWeek');
const nextWeekButton = document.getElementById('nextWeek');
const groupSelect = document.getElementById('groupSelect');

let currentWeek = 1;

const scheduleData = [
  { date: '03.06', pair: '5', subject: 'Основы российской государственности и права человека' },
  { date: '03.06', pair: '6', subject: 'История транспорта России' },
  { date: '04.06', pair: '5', subject: 'Организационное поведение в процессах деятельности авиапредприятия' },
  { date: '04.06', pair: '6', subject: 'Управление производством и проектный консалтинг на воздушном транспорте' },
  { date: '05.06', pair: '5', subject: 'Стратегические бизнес-процессы на воздушном транспорте' },
  { date: '06.06', pair: '4', subject: 'Управление изменениями' },
  { date: '06.06', pair: '5', subject: 'Аэропорты и аэродромная деятельность' },
  { date: '08.06', pair: '5', subject: 'Внутренний и внешний аудит на воздушном транспорте' },
  { date: '08.06', pair: '6', subject: 'Патентоведение и защита интеллектуальной собственности' },
  { date: '09.06', pair: '4', subject: 'Управление изменениями' },
  { date: '09.06', pair: '5', subject: 'Аэропорты и аэродромная деятельность' },
  { date: '09.06', pair: '6', subject: 'Электротехника и электроника' },
  { date: '10.06', pair: '5', subject: 'Основы российской государственности и права человека' },
  { date: '10.06', pair: '6', subject: 'История транспорта России' },
  { date: '11.06', pair: '4', subject: 'Технологии упаковочного производства на авиапредприятии' },
  { date: '11.06', pair: '5', subject: 'Патентоведение и защита интеллектуальной собственности' },
  { date: '11.06', pair: '6', subject: 'Аэропорты и аэродромная деятельность' },
  { date: '13.06', pair: '4', subject: 'Стратегические бизнес-процессы на воздушном транспорте' },
  { date: '13.06', pair: '5', subject: 'Управление производством и проектный консалтинг на воздушном транспорте' },
  { date: '15.06', pair: '5', subject: 'Аэропорты и аэродромная деятельность' },
  { date: '15.06', pair: '6', subject: 'Управление изменениями (зачёт)' },
  { date: '16.06', pair: '4', subject: 'Внутренний и внешний аудит на воздушном транспорте' },
  { date: '16.06', pair: '5', subject: 'Управление производством и проектный консалтинг на воздушном транспорте' },
  { date: '17.06', pair: '4', subject: 'Электротехника и электроника' },
  { date: '17.06', pair: '5', subject: 'Патентоведение и защита интеллектуальной собственности' },
  { date: '17.06', pair: '5', subject: 'Информационные технологии в управлении качеством и защита информации (зачёт)' },
  { date: '18.06', pair: '4', subject: 'Организационное поведение в процессах деятельности авиапредприятия (зачёт)' },
  { date: '18.06', pair: '5', subject: 'Основы российской государственности и права человека (зачёт)' },
  { date: '18.06', pair: '6', subject: 'Внутренний и внешний аудит на воздушном транспорте (консультация)' },
  { date: '19.06', pair: '4', subject: 'Патентоведение и защита интеллектуальной собственности (консультация)' },
  { date: '19.06', pair: '5', subject: 'Внутренний и внешний аудит на воздушном транспорте (экзамен)' },
  { date: '20.06', pair: '4', subject: 'Патентоведение и защита интеллектуальной собственности (экзамен)' },
  { date: '20.06', pair: '5', subject: 'История транспорта России (зачёт)' },
  { date: '22.06', pair: '5', subject: 'Стратегические бизнес-процессы на воздушном транспорте (консультация)' },
  { date: '23.06', pair: '4', subject: 'Стратегические бизнес-процессы на воздушном транспорте (экзамен)' },
  { date: '23.06', pair: '6', subject: 'Управление производством и проектный консалтинг на воздушном транспорте (консультация)' },
  { date: '24.06', pair: '5', subject: 'Управление производством и проектный консалтинг на воздушном транспорте (экзамен)' },
  { date: '24.06', pair: '6', subject: 'Электротехника и электроника (консультация)' },
  { date: '25.06', pair: '5', subject: 'Электротехника и электроника (экзамен)' },
  { date: '25.06', pair: '6', subject: 'Аэропорты и аэродромная деятельность (консультация)' },
  { date: '26.06', pair: '5', subject: 'Аэропорты и аэродромная деятельность (экзамен)' },
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
        <td>${item.pair}</td>
        <td>${item.subject}</td>
      </tr>
    `)
    .join('');

  scheduleBody.innerHTML = scheduleRows || `
    <tr class="empty-row">
      <td colspan="3">Расписание пустое.</td>
    </tr>
  `;
};

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
