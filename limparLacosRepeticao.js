let students = [
    {name: "Vitor", country: "Brasil"},
    {name: "Lima", country: "EUA"},
    {name: "João", country: "Japan"},
    {name: "Joãoviski", country: "Russia"}
]


let foreigner = students.filter(student => student.country != "Brasil")
let countries = students.map(s => s.country)
students.forEach(student => student.year = "2023")

console.log(foreigner)

// filter, map e forEach