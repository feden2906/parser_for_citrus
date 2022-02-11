const list = [
  {
    name: 'Vika',
    course: 'NODE'
  },
  {
    name: 'Viktoria',
    course: 'JS'
  },
  {
    name: 'Maks',
    course: 'REACT'
  },
  {
    name: 'Tamara',
    course: 'JAVA'
  },
  {
    name: 'Volodymyr',
    course: 'JS'
  },
  {
    name: 'Maks',
    course: 'JS'
  },
  {
    name: 'Alina',
    course: 'REACT'
  },
  {
    name: 'Olena',
    course: 'JS'
  },
  {
    name: 'Dima',
    course: 'JAVA'
  },
];

// filter
// console.log(list.filter(user => user.course === 'JS'));

// reduce
// const newList = list.reduce((acc, user) => {
//   if (!acc[user.course]) {
//     acc[user.course] = [];
//   }
//   acc[user.course].push(user);
//
//   return acc;
// }, {});
//
// console.log(newList);

// map
// Array with out mutation
// JSON.parse(JSON.stringify(list)).map(user => user.age = Math.round(Math.random() * 40));
// const a = list.map(user => ({...user, age: Math.round(Math.random() * 40)}));
//
// mutation
// list.map(user => user.age = Math.round(Math.random() * 40));


