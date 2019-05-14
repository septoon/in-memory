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
    
    tr.innerHTML = `
    <td>${data[i].id}</td>
    <td>${data[i].title}</td>
    <td>${data[i].year}</td>
    <td>${data[i].imdb.toFixed(2)}</td>
    `;
/
    if (counter > 4) {
      removeChildren(table);
    } else {
      counter++;
    }
  }
};

export default createTable;
