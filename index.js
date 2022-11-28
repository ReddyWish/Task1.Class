// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//
//     this.setTechnologies = function(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     this.setNewStatus = function(newStatus) {
//         this.status = newStatus;
//     }
// }


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
        this.setTechnologies = function(technologies) {
            this.technologies = [
                ...this.technologies,
                ...technologies,
            ];
        }
        this.setNewStatus = function(newStatus) {
            this.status = newStatus;
        }
    }
}

const student = new Student('ilya', 30)
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ])
student.setNewStatus('Middle')
console.log(student)