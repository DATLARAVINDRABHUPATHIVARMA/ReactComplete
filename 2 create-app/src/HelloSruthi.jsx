function HelloSruthi() {
  let myName = 'Ravindra'
  let myQueen = "Radha"
  let King =  () => {
    return "SUNEEL MANTHENA "
  }
  let myRole = "General Warrior"
  let myPrincessName = 'Sruthi'
  return(
    <div>Hello, My name is {}, I'm Protector of the entire clan and my role is {myRole}.  I'm always loyal to Queen {myQueen} and Princess {myPrincessName}. Here the head of the clan will be {King()} </div>
  )
}

export default HelloSruthi;