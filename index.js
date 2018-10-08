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

function appendDriver(name){
  const driver2 = [...drivers];
  driver2.push(name)
  return driver2;
}

function prependDriver(name){
  const driver3 = [...drivers];
  driver3.unshift(name)
  return driver2;
}

function removeLastDriver(){
  
}

function removeFirstDriver(){
  
}