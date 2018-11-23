var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar ', nameVar);

let nameLet = 'Jacej';
nameLet = 'Jacek';
console.log('nameLet ', nameLet);

const nameConst = 'Frank';
console.log('nameConst ', nameConst)

var fullName = 'Jacek Walasik';

if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}