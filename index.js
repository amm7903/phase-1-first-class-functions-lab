// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
return drivers.slice(0,2);
}

// const returnLastTwoDrivers = function() {
//let drivers3 = drivers;
//return drivers3;

//}

//let selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]

const returnLastTwoDrivers = function(drivers) {
return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(){
  return  (function fareQuintupler(four) {
      return four*5;
    })
}

const fareDoubler = function(createFareMultiplier) {
  return createFareMultiplier * 2
}
  
  
const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
}
// so is the reason when we declare a constant as function is to pass other functions inside?

function selectDifferentDrivers(drivers,twoDriversFunction){
    return twoDriversFunction(drivers)
} 
