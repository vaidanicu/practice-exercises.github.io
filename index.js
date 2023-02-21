var employees = [
  {
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27",
  },
  {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44",
  },
  {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17",
  },
  {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63",
  },
  {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37",
  },
  {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40",
  },
  {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26",
  },
  {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70",
  },
  {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72",
  },
  {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98",
  },
];

//2.

function collectFirstName(employees) {
  const allname = employees.map((employee) => {
    return employee.firstName;
  });
  console.log(allname);
}

collectFirstName(employees);
/* ============================================================================================================ */
/* 3. */
/* function calculateAverageSalary(employees) {
  var sum = 0;
  employees.forEach((employee) => {
    sum += parseFloat(employee.salary);
  });
  console.log(sum);
}


calculateAverageSalary(employees);
 */

function calculateAverageSalary(employees) {
  var averageSalary = 0;
  employees.forEach((employee) => {
    averageSalary += parseFloat(employee.salary);
  });
  console.log(averageSalary);
}

calculateAverageSalary(employees);
//4.
/* ========================================================================================================================================================== */
function calculateAverageFemSalary(employees) {
  var TotalSalaryFem = 0;
  var averageFem = 0;

  employees.forEach((employee) => {
    if (employee.gender === "Female") {
      TotalSalaryFem += parseFloat(employee.salary);
      return TotalSalaryFem;
    }

    averageFem = TotalSalaryFem / employee.salary.length;
    console.log(averageFem);
  });
}

averageFem = calculateAverageFemSalary(employees);
/* ===================================================================================================================================================== */

//5

function splitEmployees(employees) {
  var female = employees.filter((employee) => employee.gender === "Female");
  console.log(female);

  var male = employees.filter((employee) => employee.gender === "Male");
  console.log(male);
}
splitEmployees(employees);
/* =============================================================================================== */

//6 convert with ForEach

function convertAllEmployees(employees) {
  var convert = {};

  employees.forEach((employee) => {
    convert[employee.lastName] = employee;
  });
  console.log(convert);
}

convertAllEmployees(employees);

/* Convert with .reduce  */

function convertAllEmployees(employees) {
  var AllEmployees = employees.reduce((acc, curr) => ({
    ...acc,
    [curr.lastName]: curr,
  }));
  console.log(AllEmployees);
}

convertAllEmployees(employees);
