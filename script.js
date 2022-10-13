    let range = 2;
    let stage = 1;
    let Winner = 0;

  // prompt and condition function
  function getUsersPrompt() {
    const userPrompt = Number(prompt('Guess a Number based on current Range'));
// second function
    const getComputerValue= function(range){
      return Math.floor(Math.random() * range) + 1;
    }
    const cNum = getComputerValue(range);
    document.querySelector('.cchoose').textContent = cNum;

    // let cNum = num;
    document.querySelector('.uchoose').textContent = userPrompt;
    // document.querySelector('.cchoose').textContent = cNum;

    if (!cNum){
        document.querySelector('.uchoose').textContent = 'No Number';
    }else if(cNum === userPrompt){

        range++;
        stage++;
        console.log(`The Random Num is ${cNum}`);
        console.log(`The New range is 1 to ${range}`);
        console.log(`The User prompt is ${userPrompt}`);
        document.querySelector('.cchoose').textContent = cNum;
        document.querySelector('.stage').textContent = stage;
        document.querySelector('.range').textContent = range;
        document.querySelector('.match').textContent = '🎉 A MATCH';
        document.querySelector('.match').style.color = '#f542d7';
      } else if(cNum >userPrompt ) {
        console.log(`The Random Num is ${cNum}`);
        console.log(`The range is 1 to ${range}`);
        console.log(`The User prompt is ${userPrompt}`);
        document.querySelector('.cchoose').textContent = cNum;
        document.querySelector('.uchoose').textContent = `${userPrompt}`;
        document.querySelector('.cchoose').textContent = `${cNum}`;
        document.querySelector('.match').textContent = '👿 NOT A MATCH';
     } else if(cNum<userPrompt){
      console.log(`The Random Num is ${cNum}`);
      console.log(`The range is 1 to ${range}`);
      console.log(`The User prompt is ${userPrompt}`);
      document.querySelector('.cchoose').textContent = cNum;
      document.querySelector('.uchoose').textContent = `${userPrompt}`;
      document.querySelector('.cchoose').textContent = `${cNum}`;
      document.querySelector('.match').textContent = '👿 NOT A MATCH';
     }
    }

  let btn = document.querySelector('button');
    btn.addEventListener("click", getUsersPrompt);
  

  

    


