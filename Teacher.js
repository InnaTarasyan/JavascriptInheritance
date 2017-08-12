function Teacher(teacherId, subject, faculty, salary, firstName, lastName, address, description, subjects) {
// in order to create the child class in the same way as the parent class was created, the child class calls the base class constructor
   this._super.call(this, firstName, lastName, address, description);
   this.teacherId = teacherId;
   this.subject = subject; 
   this.faculty = faculty;
   this.salary = salary;

// the list of subjects
   this.subjects = subjects;
};

// defining inheritance. prototype always contains a contructor property. If Object.create was used, constructor property must be set explicitely.
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// _super refers to the Person constructor function
Teacher.prototype._super = Person;

Teacher.prototype.getAddress = function() {
   return Person.prototype.getAddress.call(this);
   
};

Teacher.prototype.getDescription = function() {
   return Person.prototype.getDescription.call(this);
   
};


// returns the salary of the teacher
Teacher.prototype.valueOf = function() {
   return this.salary;
};

//toString function
Teacher.prototype.toString =  function() { 
     return Person.prototype.toString.call(this)  +'teacherId: '+ this.teacherId +", salary: " + this.salary + ", subject: " + this.subject + ", faculty: " + this.faculty; 
};

Teacher.prototype.getTeacherKeys = function() {

  console.log("teacher object keys\n");
    for (var key in this) {
      console.log(key + '\n');
    } 

};

Object.defineProperties(Student.prototype, {

  listSubjects : {
    value : function() {
     list = '';
       for(var it = 0; it < this.subjects.length; it++) {
        list+= this.subjects[it] + '\n';
     }
     return list;
    },
    configurable : true,
    enumerable : true
  }

 });
