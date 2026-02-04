// Complex Object
const student = {
  name: "Mounika",
  age: 21,
  course: "Full Stack Development",
  marks: {
    html: 85,
    css: 88,
    javascript: 90
  }
};

// Object Destructuring
const { name, course, marks: { javascript } } = student;

console.log(`Name: ${name}`);
console.log(`Course: ${course}`);
console.log(`JavaScript Marks: ${javascript}`);


// Array
const subjects = ["HTML", "CSS", "JavaScript", "React"];

// Array Destructuring
const [firstSubject, secondSubject] = subjects;

console.log(`First Subject: ${firstSubject}`);
console.log(`Second Subject: ${secondSubject}`);
