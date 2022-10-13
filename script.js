    let range = 2;
    let stage = 1;
    let counter = 0;

    const userName = (prompt('GIVE YOUR USER NAME'));
    console.log(userName);
      //  document.querySelector('.label').textContent = `${userName}Choose:`;
      //  document.querySelector('.stage').textContent = stage;
  // prompt and condition function
  function getUsersPrompt() {
   
    const userPrompt = Number(prompt('Guess a Number based on current Range'));
// second function
    const getComputerValue= function(range){
      return Math.floor(Math.random() * range) + 1;
    }
    const cNum = getComputerValue(range);
    document.querySelector('.cchoose').textContent = cNum;
    // document.querySelector('.label').textContent = `${userName}Choose:`;
    // let cNum = num;
    document.querySelector('.uchoose').textContent = userPrompt;
    // document.querySelector('.cchoose').textContent = cNum;

    if (!cNum){
        document.querySelector('.uchoose').textContent = 'No Number';
    }else if(cNum === userPrompt){
        counter++;
        range++;
        stage++;
        console.log(`The Random Num is ${cNum}`);
        console.log(`The New range is 1 to ${range}`);
        console.log(`${userName} prompt is ${userPrompt}`);
        document.querySelector('.winner').textContent = counter;
        document.querySelector('.cchoose').textContent = cNum;
        document.querySelector('.stage').textContent = stage;
        document.querySelector('.range').textContent = range;
        document.querySelector('.uchoose').textContent = `${userPrompt}`;
        document.querySelector('.match').textContent = '🎉 A MATCH';
        document.querySelector('body').style.backgroundColor = '#f542d7';
        // document.querySelector('body').style.color = '#f542d7';
        
      } else if(cNum >userPrompt ) {
        counter++
        console.log(`The Random Num is ${cNum}`);
        console.log(`The range is 1 to ${range}`);
        console.log(`The User prompt is ${userPrompt}`);
        document.querySelector('.winner').textContent = counter;
        document.querySelector('.cchoose').textContent = cNum;
        // document.querySelector('label').textContent = `${userName} Choose`;
        document.querySelector('.uchoose').textContent = `${userPrompt}`;
        document.querySelector('.cchoose').textContent = `${cNum}`;
        document.querySelector('.match').textContent = '👿 NOT A MATCH';
        document.querySelector('body').style.backgroundColor = '#000000';
        // document.querySelector('body').style.backgroundColor = '#FFFFFF';

     } else if(cNum<userPrompt){
      counter++
      console.log(`The Random Num is ${cNum}`);
      console.log(`The range is 1 to ${range}`);
      console.log(`The User prompt is ${userPrompt}`);
      document.querySelector('.cchoose').textContent = cNum;
      document.querySelector('.winner').textContent = counter;
      // document.querySelector('label').textContent = `${userName} Choose`;
      document.querySelector('.uchoose').textContent = `${userPrompt}`;
      document.querySelector('.cchoose').textContent = `${cNum}`;
      document.querySelector('.match').textContent = '👿 NOT A MATCH';
      document.querySelector('body').style.backgroundColor = '#000000';
      // document.querySelector('body').style.backgroundColor = '#FFFFFF';
    }
  }

    // Listen for a click event
  let btn = document.querySelector('button');
    btn.addEventListener("click", getUsersPrompt);

  

    


