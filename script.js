    let range = 2;
    let stage = 1;

    // document.querySelector('.btn check').addEventListener('click', function(range){
    //   let cNum = Math.floor(Math.random() * range) + 1;
    //   console.log(cNum);
    //   } );
    //   const getComputerValue= function(range){
    //   return Math.floor(Math.random() * range) + 1;
    // }
    // const cNum = getComputerValue(range);
    // document.querySelector('.cchoose').textContent = cNum;

    // console.log(num)
    // const cNum = Math.trunc(Math.random()* 10)+1;
    // document. querySelector('.cchoose').textContent = cNum;
    // let range = 2;

   
    
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
        console.log(range);
        document.querySelector('.cchoose').textContent = cNum;
        document.querySelector('.stage').textContent = stage;
        document.querySelector('.range').textContent = range;
        document.querySelector('.match').textContent = '🎉 A MATCH';
        document.querySelector('body').style.backgroundColor = '#f542d7';
      } else if(cNum >userPrompt ) {
        document.querySelector('.cchoose').textContent = cNum;
        document.querySelector('.uchoose').textContent = `${userPrompt}`;
        document.querySelector('.cchoose').textContent = `${cNum}`;
        document.querySelector('.match').textContent = '👿 NOT A MATCH';

     }
    }

  let btn = document.querySelector('button');
    btn.addEventListener("click", getUsersPrompt);
    // let b = document.querySelector('button');
    // b.addEventListener("click", getComputerValue);
 
    // let cNum = result(range); 
    // const cNum = getComputerValue(range);
    // document.querySelector('.cchoose').textContent = cNum;

  

    


