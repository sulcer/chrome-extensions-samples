const fetchData = async function() {
    const res = await fetch('https://api.sledilnik.org/api/summary');
    const data = await res.json();

    const totalCases = data.casesToDateSummary.value;
    const activeCases = data.casesActive.value;
    const testedToday = data.testsToday.value;
    const hospitalized = data.hospitalizedCurrent.value;

    document.getElementById('totalCases').innerHTML = totalCases;
    document.getElementById('activeCases').innerHTML = activeCases;
    document.getElementById('testedToday').innerHTML = testedToday;
    document.getElementById('hospitalized').innerHTML = hospitalized;
}

fetchData();