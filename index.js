function maxnumber(array){
    const max=Math.max(...array)
    return max;
}

const bignumber=maxnumber([12,20,22,30]);
// console.log(bignumber);

// defoult paramiter
function maxnumber(array=[12,20,22,30]){
    const max=Math.max(...array)
    return max;
}

const bignumber1=maxnumber();
// console.log(bignumber1);

const name='Tufan Ali';
const Age = 24;

const myName= `My name is ${name}.I am ${Age} years old.`;
// console.log(myName);


const Student = {
    fullName:'Rocky',
    Roll:12,
    Age:25,
    address:'Akkelpur'
}

// const fullName=Student.fullName;
// const Roll=Student.Roll;
// const address=Student.address;
// console.log(fullName);
const {fullName,Roll,address} = Student;
// console.log(fullName);


const PeopleDetails={
    people1:{
        fullName:'Jakir Hosson',
        age:23,
        address:'JoypurHat'
    }
}

// console.log(PeopleDetails.people1.fullName);

const Number1 = [12,45,52,86,23,67];
for (let index = 0; index < Number1.length; index++) {
    const element = Number1[index];
    // console.log(element);
    if(element>52){
        // console.log(element);
    }
}

const numbers=[10,20,30,40,50];
const squaers=numbers.map(number => number *2);
// console.log(squaers);


const number=[10,20,30,40,50];
const squaer=numbers.filter(number => number<40);
// console.log(squaer);



class Trem1{
    name;
    address='Aladhipur';
    constructor(name,addres){
        this.name=name;
        this.address=addres;
    }
}

class support{
    supporttime;
    Details='What Your Name';
    constructor(name,addres,time){
        this.supporttime=this.Details;
    }
}

const rocky=new support('rocky','Ali',10);
console.log(rocky);