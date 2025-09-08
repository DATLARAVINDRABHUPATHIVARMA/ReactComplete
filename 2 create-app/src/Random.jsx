function Random() {
  let number1 = Math.random()*1000;
  let number2 = Math.random()*1000;
  let myPrincessName = 'Sruthi';
  let queen = 'Radha';

  
  return <h1 style={{"background-color" : "#768456"}}>Today while enemies attacking I protected Queen {queen} {Math.round(number1)} times and Princess {myPrincessName} {Math.round(number2)} times with my war strategy</h1>
}

export default Random;