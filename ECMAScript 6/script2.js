// function User(name,email,password){
//     this.name = name
//     this.email = email
//     this.password = password
// }
// User.prototype = {
//     constructor : User,
//     logIn(){
//         return this.name+" has logged in"
//     },
//     logOut(){
//         return `${this.name} has logged out.`
//     }
// }

// const user1 = new User('Fabrizio','asdsad','23e23e2')

// function Admin(name,email,password,code){
//     this.code = code
//     User.call(this,name,email,password)
// }
// Admin.prototype = Object.create(User.prototype)
// Admin.prototype.constructor = Admin
// Admin.prototype.eliminateUser = function(){
//     return "Deleting a user"
// }
// const admin1 = new Admin('Alvaro','alvaro&carla@forever.com','sdb86qwgd3tv','code01')

// function Shareholder(name,email,password,code,shverification){
//     this.shverification = shverification
//     Admin.call(this,name,email,password,code)
// }
// Shareholder.prototype = Object.create(Admin.prototype)
// Shareholder.prototype.constructor = Shareholder
// Shareholder.prototype.eliminateUser = function(){
//     return Admin.prototype.eliminateUser()+' by shareholder'
// }
// Shareholder.prototype.eliminateAdmin = function(){
//     return 'Deleting an admin'
// }
// Shareholder.prototype.getResources = function(){
//     return 'Getting resources from database'
// }
// const sh1 = new Shareholder('Luisa','luisafr@gmail.com','hjbnu6tn67nt75r','code02','shad123')


// const networkRequest = () => {
//     setTimeout(() => {
//         console.log('Async Code');
//     }, 2000);
// };
// console.log('Hello World');
// networkRequest();
// console.log('The end')

// console.log('Script start');
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// new Promise((resolve, reject) => {
//     resolve('Promise resolved');
//   }).then(res => console.log(res))
//     .catch(err => console.log(err));
// console.log('Script End');

// setTimeout(function(){
//     console.log("Etapa 1 completada");
//     setTimeout(function(){
//       console.log("Etapa 2 completada");
//       setTimeout(function(){
//         console.log("Etapa 3 completada");
//         setTimeout(function(){
//           console.log("Etapa 4 completada");
//           // Podríamos continuar hasta el infinito...
//         }, 4000);
//       }, 3000);
//     }, 2000);
//   }, 1000);
// console.log('sadasd')

// const me = {
//   get name(){
//     return this._name
//   },
//   set name(name){
//     this._name = name
//   }
// }
// me.name = 'asd'
// console.log(me)
// class Person{
//   constructor(name,age,country){
//     this.name    = name
//     this.age     = age
//     this.country = country
//   }
//   get name(){
//     return this._name
//   }
//   set name(name){
//     this._name = name
//   }
// }
// const person = new Person('Fabrizio',19,'Peru')
// console.log(person.name)
// console.log(person)