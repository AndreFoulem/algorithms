class Student {
  constructor(firstName, lastName = 'foulem') {
    this.firstName = firstName
    this.lastName = lastName
  }
}

console.log(new Student('andre'))
