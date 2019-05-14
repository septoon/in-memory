import * as j from './sort';
import createTable from './sortTable';

const sortArray = [
  j.sortIdUp,
  j.sortIdDown,
  j.sortTitleUp,
  j.sortTitleDown,
  j.sortYearUp,
  j.sortYearDown,
  j.sortImdbUp,
  j.sortImdbDown,
];
const json = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

let sortTable = sortArray[0];
json.sort(sortTable);
createTable(json);
let counter = 0;

setInterval(() => {
  if (counter < 7) {
    sortTable = sortArray[counter];
    json.sort(sortTable);
    createTable(json);
    counter += 1;
  } else {
    counter = 0;
    sortTable = sortArray[counter];
    json.sort(sortTable);
    createTable(json);
  }
}, 2000);
