const quiz = [
  {
  //   question: '『白鵬』ただしいのはどれ？',
  //   outGazou: '98ce2_1581_a916d915da25ab3cc2989e86f75fff91.jpg',
  //   answers: ['はくほお', 'はくほう', 'ほほほほう', 'はっくほう'],
  //   correct: 'はくほう'
  // }, {
  //   question: '『朝青龍』ただしいのはどれ？',
  //   outGazou: '98549b9a7a9664a15201fdca48739031.jpg',
  //   answers: ['あさりょうりゅう', 'あさしようりゆう', 'あさしょうりゅう', 'あさしょうりゆう'],
  //   correct: 'あさしょうりゅう'
  // }, {
  //   question: '『鶴竜』ただしいのはどれ？',
  //   outGazou: '8e664b6152522dea69dc4a00ada83d1f.webp',
  //   answers: ['かくりゆう', 'かくりゅう', 'かくりゅ', 'はくりゅう'],
  //   correct: 'かくりゅう'
  // }, {
  //   question: '『照ノ富士』ただしいのはどれ？',
  //   outGazou: 'スクリーンショット 2021-10-06 19.26.50.png',
  //   answers: ['てるのふし', 'てるのふじ', 'ですのふじ', 'てるのぶじ'],
  //   correct: 'てるのふじ'
  // }, {
    question: '『正代』ただしいのはどれ？',
    outGazou: '51490c80.jpg',
    answers: ['しょうだい', 'じょうたい', 'しょうたい', 'しようだい'],
    correct: 'しょうだい'
  }
];

// quizがある限り実行、０から開始を指定
// const $window = window;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// １問目の基本文法。（一番上の基礎）
// const question = `『白鵬』ただしいのはどれ？`

// const answers = [
//   'はくほお',
//   'はくほう',
//   'ほほほほう',
//   'はっくほう'
// ];
// const correct = 'はくほう';

// console.log(document.getElementById('js-question').textContent);
const button = document.getElementsByTagName('button');
const buttonLength = button.length;

// クイズの問題文、選択肢を定義する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  document.getElementById('gazou').src = quiz[quizIndex].outGazou;
  let buttonIndex = 0;
  // button[0].textContent = answers[0];
  // button[1].textContent = answers[1];
  // button[2].textContent = answers[2];
  // button[3].textContent = answers[3];   ⇓⇓⇓⇓
  // let buttonLength = $button.length;
  // ↑buttonLengthにbutton[]を代入
  // const shuffle = ([...answers]) => {
  //   for (let i = answers.length - 1; i >= 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [answers[i], answers[j]] = [answers[j], answers[i]];
  //   }
  //   return answers;
  // }
  // shuffle(answers);

function arrayShuffle(array) {
  // for (let i = (array.length - 1); 0 < i; i--) {
  for (let i = 0; i < array.length; i++) {
    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (1 + i));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;

};

  while (buttonIndex < buttonLength) {
    // console.log(quiz[quizIndex].answers[buttonIndex].arrayShuffle(array));
    // button[buttonIndex].textContent = Math.floor(Math.random() * (quiz[quizIndex].answers[buttonIndex]));
    // arrayShuffle(button[buttonIndex].textContent)
    arrayShuffle(quiz[quizIndex].answers);
    quiz[quizIndex].answers.splice(4);
    // quiz[quizIndex].answers.splice(r,1);
    button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

    // quiz[quizIndex].answers.splice(r,1)[buttonIndex];
 

    buttonIndex++; 
}};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
  window.alert('　○　せいかい！！');
  score++;
  } else {
  window.alert('ざんねん。。。がんばれ！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題が残ってたら実行
    setupQuiz(); 
  } else {

    // function doReload() {
    //   // reloadメソッドによりページをリロード
    //   window.location.reload();
    // }
    // document.getElementById('return').innerHTML = 
    // `もう一回チャレンジ！！`;
    // };
    // doReload();
      
  // 問題が残っていなかったら実行
    document.getElementById('kekka').innerHTML =
      `やおきくんおつかれさまでした！！ <br>
    やおきくんのせいかいすうは<br>
    ${quizLength}もんちゅう${score}もんのせいかいです！`;

    document.getElementById('return').innerHTML = 
    //   <input type="button" value="このページを再読込します" onclick="window.location.reload();"></input>;

      window.location.reload();
  }



};



let handlerIndex = 0;
// const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);

  });
  handlerIndex++;

};




// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });


// // ぼたんをクリックしたら正誤判定
// $button[0].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//       // 　　　　　　$button[]
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }
// });
// $button[1].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }
// });
// $button[2].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }
// });
// $button[3].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }

  // quizIndex++;

//   if (quizIndex < quizLength) {
//     setupQuiz();
//   } else {
//     window.alert('終了！あなたの正解は' + score + '/' + quizLength + 'です！');
//   }