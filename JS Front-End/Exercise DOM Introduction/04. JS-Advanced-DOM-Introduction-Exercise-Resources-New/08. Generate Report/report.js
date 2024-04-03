function generateReport() {
    const thElements = document.querySelectorAll("table thead th");
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
        .from(thElements)
        .map(thElement => {
            const checkboxEle = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.toLowerCase().trim(),
                active: checkboxEle.checked,
            };
        });


    const outputTable = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array
                .from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (!columns[i].active) {
                        return data;
                    }

                    const columnName = columns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data;
                }, {})

            return result;

        });

        outputElement.value = JSON.stringify(outputTable, null, 2);
}