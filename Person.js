
function Person(firstName, lastName, address, description) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.address = address;
   this.description = description; 

};

Person.prototype.getFullName = function() {
   return 'firstName: ' + this.firstName + ", lastName: " + this.lastName;
};

Person.prototype.getAddress = function() { 
   return 'Address: ' + this.address;
};

Person.prototype.getDescription = function() { 
   return 'Description: ' + this.description;
};

Person.prototype.toString = function() {
   return "firstName: " + this.firstName + ", lastName: "+ this.lastName +", address: "+this.address +", description: " + this.description;
};

