export function sortTable(columnIndex: number, ascending: boolean): void {
  const table = document.querySelector('#winners-table');
  if (table) {
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(table.getElementsByTagName('tr'));

    rows.sort((a, b) => {
      const cellA = a.getElementsByTagName('td')[columnIndex].textContent;
      const cellB = b.getElementsByTagName('td')[columnIndex].textContent;

      const valueA = parseFloat(cellA!);
      const valueB = parseFloat(cellB!);

      return ascending ? valueA - valueB : valueB - valueA;
    });

    rows.forEach((row) => {
      tbody.append(row);
    });
  }
}
