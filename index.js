const fs = require('fs');
const inquirer = require('inquirer');
// const generatehtml = require('/src/generatehtml');

const employeesArray = []

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
    .then(managerInfo => {
        const { name, id, email, officeNumber } = managerInfo;
        const newManager = new Manager (name, id, email, officeNumber);
        employeesArray.push(newManager);
    })
};

const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Enter employee role',
            choices: ['Engineer', 'Intern']
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
        let { name, role, id, email, github, school } = employeeInfo;
        let employee = {};

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        employeesArray.push(employee)

        if (addAnotherEmployee) {
            return newEmployee;
        } else {
            return employeesArray;
        }
    })
};

const writeFile = function() {
    fs.writeFile('/dist/index.html');
    console.log('Page written!');
}

newManager()
    .then(newEmployee)
    .then(employeesArray => {
        return makeHTML(employeesArray);
    })
    .then( () => {
        writeFile()
    })