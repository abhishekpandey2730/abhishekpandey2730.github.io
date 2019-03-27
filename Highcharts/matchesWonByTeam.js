fetch('Querries-JSON/extraRunsPerTeam.json').then((response) => response.json()).then(data => {
    var jsonData = data;
    console.log(jsonData);
     plotChart2(jsonData);
})