const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

export {student};

//1.CHANGE SKILLS ARRAY TO JSON

const jsonString = JSON.stringify(skills);
console.log(jsonString);

//2. STRINGIFY AGE VARIABLE

const ageString = JSON.stringify(age);
console.log(ageString);

//3. STRINGIFY "IS MARRIED" VARIABLE

const marriedString = JSON.stringify(isMarried);
console.log(marriedString);

//4. STRINGIFY STUDENT OBJECT

const studentString = JSON.stringify(student, undefined, 4);
console.log(studentString);