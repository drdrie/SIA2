const data = {
    "instructor":{
        "name":"Jane Doe",
        "subjects":["SIA2","WebTech","DSA"],
        "address":{
            "street": "123 Street",
            "baragay": "123 Brgy",
            "municapality": "Bulan",
            "province": "Sorsogon"
        }
    }
}

// Accessing the name
console.log(data.instructor.name); // Output: Jane Doe

// Accessing the subjects array
console.log(data.instructor.subjects); // Output: ["SIA2", "WebTech", "DSA"]

// Accessing the first subject
console.log(data.instructor.subjects[0]); // Output: SIA2

// Accessing the address
console.log(data.instructor.address); // Output: {street: "123 Street", baragay: "123 Brgy", municapality: "Bulan", province: "Sorsogon"}

// Accessing the street in the address
console.log(data.instructor.address.street); // Output: 123 Street