// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();  
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();  
}

const allCities = ['Los Angeles', ...coolCities];

function appendDriver(name){
  const driver2 = [...drivers];
  driver2.push(name)

function prependDriver(name){
  
}

function removeLastDriver(){
  
}

function removeFirstDriver(){
  
}