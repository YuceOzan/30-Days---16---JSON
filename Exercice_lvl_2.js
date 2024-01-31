//1. STRINGIFY STUDENT OBJECT WITH ONLY : FIRST NAME, LAST NAME AND SKILLS
import { student } from "./Exercice_lvl_1.js";

const studentStringify = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);
console.log(studentStringify);

