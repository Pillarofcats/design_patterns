class User {
  constructor(name, id) {
    this.name = name
    this.id = id
  }

  hasAccess() {
    return true
  }
}

//Null Object
class NullUser {
  constructor() {
    this.name = "Guest"
    this.id = -1
  }

  hasAccess() {
    return false
  }
}

const mockUsers = [
  new User('Jacob', 0),
  new User('Bayleigh', 1),
  new User('Dan', 2)
]

function getUser(id) {
  const user = mockUsers.find(user => user.id === id)
  if(user == null) return new NullUser
  return user
}

function printUser(id) {
  const user = getUser(id)
  let hasAccess

  if(user.hasAccess()) hasAccess = `Access granted!`
  else hasAccess = 'Access denied!'

  console.log(`Hello, ${user.name}. ${hasAccess}`)
}

//Print existing users
printUser(0)
printUser(1)
printUser(2)
//Print users that don't exist
printUser(3)
printUser(4)