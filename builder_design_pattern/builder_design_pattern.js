//CLASSIC
class Address {
  cosntructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

//Use this to create Users
class UserBuilder {
  constructor(name) {
    this.user = new User(name)
  }

  setAge(age) {
    this.user.age = age
    return this
  }

  setPhone(phone) {
    this.user.phone = phone
    return this
  }

  setAddress(address) {
    this.user.address = address
    return this
  }

  build() {
    return this.user
  }
}

let user = new UserBuilder('Jacob').setAge(34).setAddress('Rolla, MO').build()
console.log(user)


//CLASSIC JAVASCRIPT WITH OPTIONAL PARAMETERS IS AN ALTERNATIVE
// class Address {
//   cosntructor(zip, street) {
//     this.zip = zip
//     this.street = street
//   }
// }

// class User {
//   constructor(name, {age, phone, address} = {}) {
//     this.name = name
//     this.age = age
//     this.phone = phone
//     this.address = address
//   }
// }

// let user = new User('Jacob', {age: 34, address: 'Rolla, MO'})
// console.log(user)