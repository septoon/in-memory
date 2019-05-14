/* eslint-disable no-plusplus */
/* eslint-disable no-var */
const removeChildren = (elem) => {
  elem.lastChild.removeChild(elem.lastChild.children[1]);
};

let counter = 0;

const createTable = (data) => {
  // eslint-disable-next-line vars-on-top
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement('tr');

    const table = document.querySelector('[data-table=table]');
    const trCreate = table.children[0];
    trCreate.appendChild(tr);

    let td = document.createElement('td');
    td.innerHTML = data[i].id;
    trCreate.lastChild.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = data[i].title;
    trCreate.lastChild.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = `(${data[i].year})`;
    trCreate.lastChild.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = `imdb: ${data[i].imdb.toFixed(2)}`;
    trCreate.lastChild.appendChild(td);

    if (counter > 4) {
      removeChildren(table);
    } else {
      counter++;
    }
  }
};

export default createTable;
