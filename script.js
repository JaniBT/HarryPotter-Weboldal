document.addEventListener('DOMContentLoaded', function () {
    const toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
  });

function masolas() {
  alert("Ejnye bejnye! Másolgatunk-másolgatunk? HA?");
  alert("Látom mit csinálsz, hisz ez egy varázslatos weboldal!");
}

document.getElementById('footer-szo').addEventListener('copy', masolas);

function tulajdonosoklista() {

  const x = document.getElementById("lista-gomb");
  if (x.innerHTML === "Lista Megtekintése") {
    x.innerHTML = "Lista Eltávolítása";
    const table = document.getElementById('tulaj-lista');
    const table_header = document.createElement('thead');
    table_header.innerHTML = `<tr>
      <th scope="col">#</th>
      <th scope="col">Keresztnév</th>
      <th scope="col">Vezetéknév</th>
    </tr>`;
    
    if (!table.querySelector('thead')) {
      table.appendChild(table_header);
    }

    const tulajok_listaja = [{szam: 1, firstName: 'Antioch', lastName: 'Peverell'}, {szam: 2, firstName: 'Elvetemült', lastName: 'Emeric'}, {szam: 3, firstName: 'Egetverő', lastName: 'Egbert'}, {szam: 4, firstName: 'Godelot', lastName: '-'}, {szam: 5, firstName: 'Hereward', lastName: '-'}, {szam: 6, firstName: 'Barnabas', lastName: 'Deverill'}, {szam: 7, firstName: 'Loxias', lastName: '-'}, {szam: 8, firstName: 'Arcus vagy Livius', lastName: '"Pontosan nem tudni"'}, {szam: 9, firstName: 'Gregorovics', lastName: '-'}, {szam: 10, firstName: 'Gellert', lastName: 'Grindelwald'}, {szam: 11, firstName: 'Albus', lastName: 'Dumbledore'}, {szam: 12, firstName: 'Draco', lastName: 'Malfoy'}, {szam: 13, firstName: 'Harry', lastName: 'Potter'}];

    const table_body = document.createElement('tbody');
    
    for (const adat of tulajok_listaja) {
      const tr = document.createElement('tr');

      tr.innerHTML = `<td scope="row">${adat.szam}</td>
      <td>${adat.firstName}</td>
      <td>${adat.lastName}</td>`;

      table_body.appendChild(tr);
    }

    if (!table.querySelector('tbody')) {
      table.appendChild(table_body);
    }
  } else {
    x.innerHTML = "Lista Megtekintése";
    const thead = document.querySelector('thead');
    const tbody = document.querySelector('tbody');

    thead.remove();
    tbody.remove();
  }

  
}