    let range = 2;
    // getComputerValue();
      const getComputerValue= function(range){
      return Math.floor(Math.random() * range) + 1;
     
    }
    const cNum = getComputerValue(range);
    document.querySelector('.cchoose').textContent = cNum;
    

// prompt and condition
  function getUsersPrompt() {
    const userPrompt = Number(prompt('Guess a Number based on current Range'));
    let text = document.querySelector('.uchoose').textContent = userPrompt;
  

    if (userPrompt === cNum){
      range++;
      text.innerHTML = (`Congratulation You and Computer choosed the same Number, the computer choosed  ${cNum} and you choose ${userPrompt}`);
      console.log(`You and Computer choosed the same Number. The range is now ${range}`);
      document.getElementById('range').innerHTML = range;
    }else {
        text.innerHTML = (`Computer Wins. computer choose ${cNum} and you choose ${userPrompt}`);
      console.log(`Not matched, the computer choosed  ${cNum} and you choose ${userPrompt}`);
      // document.querySelector(".human-choice").innerHTML = userPrompt; 
    // document.querySelector(".computer-choice").innerHTML = cNum;

    }
}
  let btn = document.querySelector('button');
    btn.addEventListener("click", getUsersPrompt);

    

    


