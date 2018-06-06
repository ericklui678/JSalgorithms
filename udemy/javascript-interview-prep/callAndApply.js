// Describe the javascript call() and apply() methods
// 1. How do they function?
// 2. What arguments do they take?
// 3. How are they different?

// call() is a method on function prototype object
// it gives you an alternative way to call your functions
// 1. Different way to pass arguments into function
// 2. Also changes 'this' context

// apply() is similar, but you pass all arguments as an array
const car1 = {
  brand: "Porsche",
  getCarDescription: function(cost, year, color) {
    console.log(
      `This car is a ${
        this.brand
      }. The price is $${cost}. The year is ${year}. The color is ${color}`
    );
  }
};

// notice how car2 does not have getCarDescription method
const car2 = {
  brand: "Lamborghini"
};

const car3 = {
  brand: "Ford"
};

// how you would usually call a method
car1.getCarDescription(80000, 2010, "blue");

// first argument in call method is what we want 'this' context to be
// since we want to use car2 instead of car1, pass car2 as argument
car1.getCarDescription.call(car2, 200000, 2013, "yellow");

// using apply, but car3 as 'this' context for first argument
car1.getCarDescription.apply(car3, [35000, 2012, "black"]);

// if no first argument is passed in call() or apply(), 'this' bound to global
