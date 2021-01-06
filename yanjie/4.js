//es6提供的新的数据结构
//1. 为了数组的优化而来
// Set Map 两种数据结构  存放特定的数据集合的
const people =new Set(); //[]
people.add('泽哥');
people.add('叫我');
people.add('去');
people.add('红苹果');
people.add('嫖娼');
for (const person of people){
    console.log(person);
}
const students = new Set(['泽哥','叫我去红苹果','嫖娼'])
students.add('自己逃单')
console.log(students);