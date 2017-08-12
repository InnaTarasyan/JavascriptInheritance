function Student(studentId, gpa, absenceCount, firstName, lastName, address, description, grades, subjects) {
// in order to create the child class in the same way as the parent class was created, the child class calls the base class constructor
   this._super.call(this, firstName, lastName, address, description);
   this.studentId = studentId;
   this.gpa = gpa; 
   this.absenceCount = absenceCount;

// the list of grades
   this.grades = grades;  

// list of subjects
   this.subjects = subjects;   
 
};

// defining inheritance. prototype always contains a contructor property. If Object.create was used, constructor property must be set explicitely.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// _super refers to the Person constructor function
Student.prototype._super = Person;

Student.prototype.getAddress = function() {
   return Person.prototype.getAddress.call(this);
   
};

Student.prototype.getDescription = function() {
   return Person.prototype.getDescription.call(this);
   
};


// returns the gpa grade of a student
Student.prototype.valueOf = function() {
   return this.gpa;
};

//toString function
Student.prototype.toString =  function() { 
     return   Person.prototype.toString.call(this) + 'studentId: '+ this.studentId +", gpa: " + this.gpa; 
};

Student.prototype.getStudentKeys = function() {

  console.log("student object keys\n");
    for (var key in this) {
      console.log(key + '\n');
    } 

};


Object.defineProperties(Student.prototype, {
  midGrade : {
    value : function() {
       midGrade = 0;
       for(var it = 0; it < this.grades.length; it++) {
        midGrade+= this.grades[it];
       }
       midGrade/= this.grades.length;
       return midGrade;
    },
    writable: true,
    enumerable : true
  },

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

