let arr = [];
let html = "";

arr[0] = {
  Name: 'Math',
  Data: '15.11.2025',
  Aud: 213
};

arr[1] = {
  Name: 'CS',
  Data: '14.11.2025',
  Aud: 301
};

arr[2] = {
  Name: 'JavaScript',
  Data: '11.11.2025',
};

function res_diff_Days (text) {
  let currDate = new Date();
  let date = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

  let timeDiff = Math.abs(currDate.getTime() - date.getTime());

  return Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
}

function output (item, i, array) {
  let text = item['Data']
  let diffDays = res_diff_Days(text)
  let res;
  item['Aud'] = !item['Aud'] ? 'Не вказано' : item['Aud'];

  if (diffDays === 1) {
    html += `<tr style="background:mediumpurple;">`;
    res = 'Консультація';
  }
  else if (diffDays === 0) {
    html += `<tr style="background:darkcyan">`;
    res = 'Іспит';
  }
  else {
    html += `<tr>`;
    res = 'Нема поточних подій';
  }

  for (let key in item) {
    html += `<td>${item[key]}</td>`;
  }

  html += `<td>${res}</td>`;
  html += `</tr>`;
}

function ras () {
  html = '<table style="b-table">';
  html += '<tr><td><b>Предмет</b></td>'+
    '<td><b>Дата</b></td><td><b>Аудиторія</b></td><td><b>Поточна подія</b></td></tr>';
  arr.forEach(output)
  html += '</table>';
  document.getElementById('result').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const checkDateButton = document.querySelector('.check-date');
  if (checkDateButton) {
    checkDateButton.addEventListener('click', ras);
  }
});
