// localStorage.setItem("name", "nate");

// sessionStorage.setItem("name", "diana");

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName - lastName;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const nate = new Person("Nate", "Couch", "9-19-81");
const diana = new Person("Diana", "McGuire", "8/11/83");

console.log(diana);
