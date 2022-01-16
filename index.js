// modules and functions required
const fs = require('fs');
const inquirer = require('inquirer');
const generateCards = require('./src/generatehtml');

// constructor functions required
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// empty array to push each employee object to
const employeesArray = [];

// creates manager object first with prompts
const newManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager name',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('You must enter the Manager name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter Manager ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter Manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('You must enter office number!')
                }
            }
        },
    ])
    // add manager object to employees array
    .then((managerInfo) => {
        const { name, id, email, officeNumber } = managerInfo;
        const newManager = new Manager (name, id, email, officeNumber);
        employeesArray.push(newManager);
    })
};

// creates new employee from prompts
const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Enter employee role',
            choices: ['Engineer', 'Intern', 'Employee']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log('You must enter the Manager name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must enter Engineer GitHub!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You must enter Intern school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Do you need to add anymore employees?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let { name, role, id, email, github, school, addAnotherEmployee } = employeeInfo;
        let employee;
// depending on role, gives appropriate values
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        } else {
            employee = new Employee (name, id, email);
        }
// pushes each employee to employee array
        employeesArray.push(employee)
        console.log(employeesArray);
// if prompt indicates to add another employee, start questions again
        if (addAnotherEmployee) {
            return newEmployee();
        } else {
            return employeesArray;
        }
    })
};

// takes generated html code and writes html file
const writeFile = htmlData => {
    fs.writeFile('./dist/index.html', htmlData, err => {

        if (err) {
            console.log(`Error: ${err}`)
        } else {
            console.log('Page written!');
        }
    });
    
}

// starts with new manager, then new employees, then makes cards based on prompts, then starts write file function
newManager()
    .then(newEmployee)
    .then(employeesArray => {
        return generateCards(employeesArray);
    })
    .then(htmlData => {
        writeFile(htmlData);
    })