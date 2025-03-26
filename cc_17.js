//Task 1: Create a Customer Class
console.log("Task 1: Create a Customer Class");

let globalTotalSpent = 0;
class Customer {        //Initializing the Customer class and assigning constructor values name,
constructor (name, email, purchaseHistory) {    //email, and purchaseHistory
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
    this.totalAmount = 0;
}
    addPurchase (amount) {  //Added a method that does three things, pushes a new purchase amount to a 
        this.purchaseHistory.push(amount)   //customer object, takes the amount and updates the individual
        this.totalAmount += amount;     //total as well as a global total for all customers
        globalTotalSpent += amount;
    }

    getTotalSpent () {  //method that calls the total amoount for an individual customer
        return this.totalAmount
    }
};


const customer1 = new Customer ("John Samali", "123@gmail.com") //added customer objects
const customer2 = new Customer ("Samantha Pantha", "Pantha@gmail.com")

customer1.addPurchase(124)  //Adding customer purchases
customer2.addPurchase(348)
customer1.addPurchase(900)

console.log(`Total spent by John Samali: $${customer1.getTotalSpent()}`)    
console.log(`Total amount spent by all customers: $${globalTotalSpent}`)



