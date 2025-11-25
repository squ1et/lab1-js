document.addEventListener('DOMContentLoaded', () => {
    const btnTask1 = document.querySelector('#solve-t1');

    btnTask1.addEventListener('click', () => {
        const divs = document.querySelectorAll('div:not(.task)');

        divs.forEach(div => {
            let text = div.textContent.trim();

            if (text.length > 10) {
                div.textContent = text.slice(0, 10) + '...';
            }
        });
    });

    const btnTask2 = document.querySelector('#solve-t2');

    btnTask2.addEventListener('click', () => {
        const table = document.querySelector('.table-t2');
        const rows = table.querySelectorAll('tr');
        const colsCount = rows[0].children.length;

        let sums = new Array(colsCount).fill(0);

        rows.forEach(row => {
            row.style.backgroundColor = 'mediumpurple';
            row.querySelectorAll('td').forEach((cell, index) => {
                sums[index] += parseInt(cell.textContent);
            });
        });

        const sumRow = document.createElement('tr');
        sumRow.style.backgroundColor = 'darkcyan';

        sums.forEach(sum => {
            const td = document.createElement('td');
            td.textContent = sum;
            sumRow.appendChild(td);
        });

        table.appendChild(sumRow);
    });
});
