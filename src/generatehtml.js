const makeManagerCard = employee => {
    return`
        <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${employee.name}</h3>
                <h4 class="card-title">Manager</h4>
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
            <h4 class="card-title">Engineer</h4>
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
            <h4 class="card-title">Intern</h4>
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
            <h4 class="card-title">Engineer</h4>
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

    return generatehtml(cardsArray);
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