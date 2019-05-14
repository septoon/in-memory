const id = document.getElementById('id');
const title = document.getElementById('title');
const year = document.getElementById('year');
const imdb = document.getElementById('imdb');

const noArrow = () => {
  const tableId = document.getElementById('id');
  const tableTtl = document.getElementById('title');
  const tableYr = document.getElementById('year');
  const tableImdb = document.getElementById('imdb');

  tableId.textContent = 'id';
  tableTtl.textContent = 'title';
  tableYr.textContent = 'year';
  tableImdb.textContent = 'imdb';
};

const sortIdUp = (a, b) => {
  noArrow();
  id.textContent = 'id ↓';
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
};

const sortIdDown = (a, b) => {
  noArrow();
  id.textContent = 'id ↑';
  if (b.id < a.id) {
    return -1;
  }
  if (b.id > a.id) {
    return 1;
  }
  return 0;
};

const sortTitleUp = (a, b) => {
  noArrow();
  title.textContent = 'title ↓';
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const sortTitleDown = (a, b) => {
  noArrow();
  title.textContent = 'title ↑';
  if (b.title < a.title) {
    return -1;
  }
  if (b.title > a.title) {
    return 1;
  }
  return 0;
};

const sortYearUp = (a, b) => {
  noArrow();
  year.textContent = 'year ↓';
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
};

const sortYearDown = (a, b) => {
  noArrow();
  year.textContent = 'year ↑';
  if (b.year < a.year) {
    return -1;
  }
  if (b.year > a.year) {
    return 1;
  }
  return 0;
};

const sortImdbUp = (a, b) => {
  noArrow();
  imdb.textContent = 'imdb ↓';
  if (a.imdb < b.imdb) {
    return -1;
  }
  if (a.imdb > b.imdb) {
    return 1;
  }
  return 0;
};

const sortImdbDown = (a, b) => {
  noArrow();
  imdb.textContent = 'imdb ↑';
  if (b.imdb < a.imdb) {
    return -1;
  }
  if (b.imdb > a.imdb) {
    return 1;
  }
  return 0;
};

export {
  sortIdUp,
  sortIdDown,
  sortTitleUp,
  sortTitleDown,
  sortYearUp,
  sortYearDown,
  sortImdbUp,
  sortImdbDown,
};
