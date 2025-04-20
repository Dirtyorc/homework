const user = {
  Aleksey: {
    gender: 'male',
    age: 33,
    isAdmin: true,
    // ==========2 задание=====
    sayHello(name) {
      console.log(`Hello ${name}`)
    }
  }
}
console.log(user.Aleksey)
user.Aleksey.sayHello('Lexa')
// =====3 задание=========
const users = [
  {
    name: 'Aleksey',
    age: 33,
    isAdmin: true
  },
  {
    name: 'Irina',
    age: 28,
    isAdmin: false
  },
  {
    name: 'Dmitry',
    age: 4,
    isAdmin: false
  },
  {
    name: 'Archi',
    age: 8,
    isAdmin: false
  }

]

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false)    
  console.log(users[i].isAdmin)
}
