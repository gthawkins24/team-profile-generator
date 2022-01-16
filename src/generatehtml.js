// returns each appropriate card
const makeManagerCard = employee => {
    return`
        <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${employee.name}</h3>
                <h4 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 18 10">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
              </svg> Manager</h4>
            </div>

            <div class="card-body">
                <ul class="list-group list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
`
}

const makeEngineerCard = employee => {
    return`
    <div class="col-md-4">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">${employee.name}</h3>
            <h4 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 18 10">
            <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
          </svg> Engineer</h4>
        </div>

        <div class="card-body">
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">GitHub: ${employee.github}</li>
            </ul>
        </div>
    </div>
</div>
`
}

const makeInternCard = employee => {
    return`
    <div class="col-md-4">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">${employee.name}</h3>
            <h4 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 18 20">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
          </svg> Intern</h4>
        </div>

        <div class="card-body">
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">School: ${employee.school}</li>
            </ul>
        </div>
    </div>
</div>
`
}

const makeEmployeeCard = employee => {
    return`
    <div class="col-md-4">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">${employee.name}</h3>
            <h4 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 18 10">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg> Employee</h4>
        </div>

        <div class="card-body">
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
            </ul>
        </div>
    </div>
</div>
`
}

// starts each appropriate card function based on input
const generateCards = employeesArray => {

    cardsArray = [];

    for (let i = 0; i < employeesArray.length; i++) {
        const employee = employeesArray[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = makeManagerCard(employee);

            cardsArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = makeEngineerCard(employee);

            cardsArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = makeInternCard(employee);

            cardsArray.push(internCard);
        }

        if (role === 'Employee') {
            const employeeCard = makeEmployeeCard(employee);

            cardsArray.push(employeeCard);
        }
    }

    return generatehtml(cardsArray.join(''));
}

const generatehtml = function (cards) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>Company Employees</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header">
            <p>My Team</p>
        </nav>
    </header>

    <div class="container">
        <div class="row">
            ${cards}
        </div>
    </div>

</body>

</html>
    `
}

module.exports = generateCards;