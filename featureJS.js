// let aluno = {
//     name: "Nome Sobrenome",
//     year: "2023",
//     course: { // '?' - Caso não exista
//         name: "Anything",
//         duration: 123,
//         instructor: { // '?' - Caso não exista
//             name: "Nome Sobrenome"
//         }
//     }
// }

let aluno = {
  name: "Nome Sobrenome",
  year: "2023",
  course: {
    // '?' - Caso não exista
    name: "Anything",
    duration: 123,
  },
};

// let {course} = aluno
let course = aluno.course?.instructor?.name;

console.log(course);
