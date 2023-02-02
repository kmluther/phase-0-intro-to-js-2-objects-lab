const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

const newEmp = {...employee};

function deleteFromEmployeeByKey(employee, key) {
    delete newEmp.key;

    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key];

   return employee;
}
