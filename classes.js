// Base Class
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log("Ñum ñum");
    }
    talk(){
        console.log("Bla bla");
    }
    sleep(){
        console.log("zzz");
    }
}

// Governor sub-class
class Governor extends Person {
    constructor(name, age, gender, stateOfGovernment) {
        super(name, age, gender);
        this.stateOfGovernment = stateOfGovernment;
    }
    static chiefExecutiveOfficer = true;

    static vetoStateLegislation(){
        console.log(
        `I hereby veto this bill, as I believe it is not in the best interest
        of our state's residents.`
        );
    }
    static declareStateOfEmergency(){
        console.log(
            `In response to the impending hurricane, I am declaring a state of
            emergency to ensure the safety and well-being of our citizens.`
            );
    }
    static commuteSentences(){
        console.log(
            `After careful consideration, I have decided to grant a pardon to correct
            an injustice in this case and provide a second chance to the individual involved.`
            );
    }
}
console.log(Governor.chiefExecutiveOfficer);
Governor.vetoStateLegislation();
Governor.declareStateOfEmergency();
Governor.commuteSentences();

// PostalWorker sub-class
class PostalWorker extends Person {
    constructor(name, age, gender, workHours) {
        super(name, age, gender);
        this.workHours = workHours;
    }
    mailSort() {
        console.log("I'm sorting mails");
    }
    mailDelivering() {
        console.log("I'm delivering mails");
    }
}

// Chef sub-class
class Chef extends Person {
    constructor(name, age, gender, workHours) {
        super(name, age, gender);
        this.workHours = workHours;
    }
    preparingFood() {
        console.log("I'm cooking...");
    }
    planningMenu() {
        console.log("I'm working on menus");
    }
}

// Instances
const postalWorker1 = new PostalWorker("Patrick", 26, "male", 40);
console.log(postalWorker1);
postalWorker1.mailSort();
postalWorker1.mailDelivering();

const postalWorker2 = new PostalWorker("Rick", 32, "male", 40);
console.log(postalWorker2);
postalWorker2.mailSort();
postalWorker2.mailDelivering();


const chef1 = new Chef("Amanda", 21, "female", 40);
console.log(chef1);
chef1.preparingFood();
chef1.planningMenu();

const chef2 = new Chef("Renzo", 40, "male", 40);
console.log(chef2);
chef2.preparingFood();
chef2.planningMenu();