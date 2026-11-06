let users = [];

const init = async () => {
  const loadData = async () =>{
    const valasz = await fetch("http://localhost:3000/users");
    users = await valasz.json();
  }
  await loadData();
  console.log(users);
  tablazatGeneralas();
}

let tablazatGeneralas = () => {
  let tablazat = document.getElementById("userData");
  users.forEach(user => {
    const sor = document.createElement("tr");

    const cellaUserName = document.createElement("td");
    cellaUserName.textContent = user.nev;

    const cellaUserClass = document.createElement("td");
    cellaUserClass.textContent = user.osztaly;

    sor.appendChild(cellaUserName);
    sor.appendChild(cellaUserClass);
    tablazat.appendChild(sor);
  })
}
document.addEventListener('DOMContentLoaded', init);