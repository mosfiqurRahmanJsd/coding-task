const taskList = [
  {
    _id: "6135fb99f3aa03405ce69007",
    name: "Go to office",
    priority: 2,
    status: "to-do",
    dueDate: "2021-09-06T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fb89f3aa03405ce68fd5",
    name: "Go to top floor",
    priority: 2,
    status: "to-do",
    dueDate: "2021-09-14T18:00:00.000Z",
    creator: "Sakib",
    assignedPerson: [
      {
        _id: "60d48b001a9442117030a0ea",
        name: "Sajit",
      },
    ],
  },
  {
    _id: "6135fb74f3aa03405ce68fa3",
    name: "Wash your cloths",
    priority: 0,
    status: "to-do",
    dueDate: "2021-09-06T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fb4df3aa03405ce68f59",
    name: "Eat Banana",
    priority: 0,
    status: "to-do",
    dueDate: "2021-09-24T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fb21f3aa03405ce68f23",
    name: "Go to Motijheel",
    priority: 0,
    status: "to-do",
    dueDate: "2021-09-10T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fabdf3aa03405ce68d0f",
    name: "Go for an interview",
    priority: 0,
    status: "to-do",
    dueDate: "2021-09-06T18:00:00.000Z",
    creator: "Sakib",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135faa0f3aa03405ce68cd2",
    name: "Go for a walk",
    priority: 4,
    status: "to-do",
    dueDate: "2021-09-06T18:00:00.000Z",
    creator: "Sakib",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fa6af3aa03405ce68c7f",
    name: "Eat good food",
    priority: 1,
    status: "to-do",
    dueDate: "2021-09-07T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fa53f3aa03405ce68c49",
    name: "Brush your teeth",
    priority: 0,
    status: "to-do",
    dueDate: "2021-09-06T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
  {
    _id: "6135fa0df3aa03405ce68b5b",
    name: "Read a book",
    priority: 1,
    status: "to-do",
    dueDate: "2021-09-07T18:00:00.000Z",
    creator: "Sakib",
    assignedPerson: [
      {
        _id: "60d48b001a9442117030a0ea",
        name: "Sajit",
      },
    ],
  },
  {
    _id: "6135f9edf3aa03405ce68b25",
    name: "Hello there",
    priority: 0,
    status: "to-do",
    dueDate: "2021-09-06T18:00:00.000Z",
    creator: "Shamim",
    assignedPerson: [
      {
        _id: "612be6971e85108216cbeaa8",
        name: "Orvi",
      },
    ],
  },
];



const sortAndFilter = (taskList) => {
    // apply functionality
    let result = [];
    for (let i = 0; i < taskList.length; i++) {
      const element = taskList[i];
      if (element.priority === 0) 
      {
        result.push(element);
      }
    }
    result.sort(function (a, b) {
      var dateA = new Date(a.dueDate), dateB = new Date(b.dueDate)
      return dateA - dateB
    });
    // return array
    return result;
  };
  
  
console.log(sortAndFilter(taskList));
  
  







// 2. Find out how many tasks “Sakib” assigned to “Orvi”. [Note: Only Task Creator can assign a person]
const findTasks = (taskList) => {
  // apply functionality
  let result = [];
  for (let i = 0; i < taskList.length; i++) {
    const element = taskList[i];
    if (element.creator === "Sakib" && element.assignedPerson[0].name === "Orvi") {
      result.push(element);
    }
  }
  // return array
  return result;
};

console.log(findTasks(taskList));
