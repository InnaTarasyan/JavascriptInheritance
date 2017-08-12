var SimplePerson = (function(name, height, weight, socialInsuranceNumber) {
  //properties/fields
  var _name = name || "Name Surname";
  var _height = height || 100; //in inches
  var _weight = weight || 160;
  var _socialInsuranceNumber = socialInsuranceNumber || "555 555 555";

  function oPerson() {}
		
  SimplePerson.prototype = {
    setHeight: function(height) { _height=height; },
    getHeight: function() { return  _height; },
    setWeight: function(weight) { _weight=weight; },
    getWeight: function() { return  _weight; },
    setName:   function(name) { _name=name; },
    getName:   function() { return  _name; },
    setSocialInsuranceNumber: function(socialInsuranceNumber) {  _socialInsuranceNumber=socialInsuranceNumber; },
    calculateBmi: function() { return Math.round(( _weight * 703) / ( _height *  _height)); }
  };

  return oPerson;
})();

//instantiate the SimplePerson class with some arguments
var aPerson = new SimplePerson("Name Surname", 100, 160, "123 456 789");
alert("My name is " + aPerson.getName() + and my BMI is " + aPerson.calculateBmi() + ".");