//argument object - no longer bound with arrow functions

const add = (a,b) => {
    //console.log(arguments)
    return a+b;
}
console.log(add(55,1, 1001))

//this keyword - no longer bound

const user = {
    name: 'Jacek',
    cities: ['Wroclaw', 'Boleslawiec', 'Gromadka'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        console.log(this)
        return this.numbers.map((number) => number*this.multiplyBy);
    } 
}

console.log(multiplier.multiply());