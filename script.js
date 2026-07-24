const questions = [
  {
    "text": `<strong>問題1</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>バイアスピリン錠100㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>タケキャブ錠10㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>マグミット錠330㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>7日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": true,
    "explanation": "（服用時点が同じ2剤以上の内服薬）"
  },
  {
    "text": `<strong>問題2</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>カロナール錠300㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>49日分</td></tr>
<tr><td>レバミピド錠100㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>49日分</td></tr>
<tr><td>マグミット錠330㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>49日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": true,
    "explanation": "（1剤で3種類以上の内服薬）"
  },
  {
    "text": `<strong>問題3</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>プレドニゾロン錠1㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>プレドニゾロン錠5㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>タケキャブ錠10㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": false,
    "explanation": "（同一成分・規格違いのプレドニゾロン錠に関しては1剤1種類扱いとなり、処方全体では1剤2種類のため外来服薬支援料2算定不可）"
  },
  {
    "text": `<strong>問題4</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>バイアスピリン錠100㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
    <tr><td>タケキャブ錠10㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
    <tr><td>カロナール錠300㎎</td><td>1錠</td><td>1日1回</td><td>昼食後</td><td>7日分</td></tr>
    <tr><td>レバミピド錠100㎎</td><td>1錠</td><td>1日1回</td><td>昼食後</td><td>7日分</td></tr>
<tr><td>マグミット錠330㎎</td><td>1錠</td><td>1日1回</td><td>夕食後</td><td>7日分</td></tr>
<tr><td>メコバラミン錠500μg</td><td>1錠</td><td>1日1回</td><td>夕食後</td><td>7日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": false,
    "explanation": "（それぞれ服用時点が同じ2種類ずつを一包化するだけなので、要件を満たさない）"
  },
  {
    "text": `<strong>問題5</strong><br><br>
    <strong>【循環器内科】</strong><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>バイアスピリン錠100㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
    </table>
    <br>
    <strong>【内科】</strong><br>
     <table style="border-collapse:separate; border-spacing:20px 6px;">
<tr><td>タケキャブ錠10㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>アムロジピン錠5㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": true,
    "explanation": `（2科の処方を合わせて一包化することで、「1剤で3種類以上の内服薬」を一包化するという要件を満たすため、算定可。<br>
ただし、どちらの処方医からも一包化の指示をもらう必要あり）<br>
「処方」欄の記載内容からは加算理由が不明のときは、算定理由が明確となるように記載すること。<br>
レセプト適用コード：異なる保険医の発行する処方箋に係る算定理由（外来服薬支援料2）`
 
  },
  {
    "text": `<strong>問題6</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>アムロジピン錠5㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>28日分</td></tr>
<tr><td>ロスバスタチン錠2.5㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>28日分</td></tr>
<tr><td>トビエース錠4㎎</td><td>2錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
（トビエースは吸湿性のため、ヒートのままホチキスをした。）
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": false,
    "explanation": "（トビエース錠はPTPシートのままであり、一包化されておらず、ホチキスで添付していても一包化したものとは扱われないため）"
  },
  {
    "text": `<strong>問題7</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>カロナール錠300㎎</td><td>3錠</td><td>1日3回</td><td>毎食後</td><td>7日分</td></tr>
    <tr><td>レバミピド錠100㎎</td><td>1錠</td><td>1日3回</td><td>毎食後</td><td>7日分</td></tr>
    <tr><td>メコバラミン錠500μg</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
    <tr><td>バイアスピリン錠100㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>タケキャブ錠10㎎</td><td>1錠</td><td>1日1回</td><td>朝食後</td><td>7日分</td></tr>
<tr><td>アムロジピン錠5㎎</td><td>1錠</td><td>1日1回</td><td>夕食後</td><td>7日分</td></tr>
</table>
<br>
  一包化の算定できる日数は？`,
    choiceTrue:"7日分",
    choiceFalse:"14日分",
    "answer": true,
    "explanation": "（7日分だけ外来服薬支援料2の算定基準を満たすため）"
  },
  {
    "text": `<strong>問題8</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>カロナール錠300㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>7日分</td></tr>
    <tr><td>レバミピド錠100㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>7日分</td></tr>
    <tr><td>マグミット錠330㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>7日分</td></tr>
<tr><td>タケキャブ錠10㎎</td><td>1錠</td><td>1日1回</td><td>夕食後</td><td>21日分</td></tr>
<tr><td>アムロジピン錠5㎎</td><td>1錠</td><td>1日1回</td><td>夕食後</td><td>21日分</td></tr>
</table>
<br>
  一包化の算定できる日数は？`,
    choiceTrue:"7日分",
    choiceFalse:"21日分",
    "answer": true,
    "explanation": "（朝夕食後の3種類が加算要件を満たすため）"
  },
  {
    "text": `<strong>問題9</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>マグミット錠330㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
<tr><td>モンテルカスト錠10㎎</td><td>1錠</td><td>1日1回</td><td>就寝前</td><td>7日分</td></tr>
<tr><td>マイスリー錠5㎎</td><td>0.5錠</td><td>1日1回</td><td>就寝前</td><td>7日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": false,
    "explanation": "（外来服薬支援料2算定不可だが、マイスリー錠5㎎の自家製剤加算が算定可能）"
  },
  {
    "text": `<strong>問題10</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>マグミット錠330㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
<tr><td>アムロジピン錠5㎎</td><td>1錠</td><td>1日1回</td><td>夕食後</td><td>14日分</td></tr>
<tr><td>デパス錠1㎎</td><td>0.5錠</td><td>1日1回</td><td>就寝前</td><td>14日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": true,
    "explanation": "（マグミット錠、アムロジピン錠で外来服薬支援料2算定可。デパス錠は外来服薬支援料2の算定に関わっていないが、0.5㎎の規格が存在するので自家製剤加算算定不可）"
  },
  {
    "text": `<strong>問題11</strong><br><br>
    <table style="border-collapse:separate; border-spacing:20px 6px;">
    <tr><td>Rp1)</td></tr>
    <tr><td>カロナール錠300㎎</td><td>3錠</td><td>1日3回</td><td>毎食後</td><td>14日分</td></tr>
    <tr><td>レバミピド錠100㎎</td><td>3錠</td><td>1日3回</td><td>毎食後</td><td>14日分</td></tr>
    <tr><td>Rp2)</td></tr>
<tr><td>マグミット錠330㎎</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
<tr><td>メコバラミン錠500μg</td><td>2錠</td><td>1日2回</td><td>朝夕食後</td><td>14日分</td></tr>
<tr><td>Rp3)</td></tr>
<tr><td>カルボシステインDS</td><td>0.5ｇ</td><td>1日1回</td><td>就寝前</td><td>7日分</td></tr>
<tr><td>アンブロキソール塩酸塩DS</td><td>0.5ｇ</td><td>1日1回</td><td>就寝前</td><td>7日分</td></tr>
</table>
<br>
  外来服薬支援料2算定可？不可？`,
    choiceTrue:"算定できる",
    choiceFalse:"算定できない",
    "answer": true,
    "explanation": "（Rp1 ・Rp2で外来服薬支援料2算定可。<strong>Rp3は外来服薬支援料2の算定に関わっていない為、計量混合調剤加算算定可</strong>）"
  },
  
];

let current = 0;
let score = 0;
let answered = false;
const answerLog = [];

const startScreen = document.getElementById("startScreen");
const info1Screen = document.getElementById("info1Screen");
const info2Screen = document.getElementById("info2Screen");
const quizScreen = document.getElementById("quizScreen");
const finishScreen = document.getElementById("finishScreen");
const progress = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const questionText = document.getElementById("questionText");
const resultBox = document.getElementById("resultBox");
const judge = document.getElementById("judge");
const explanation = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const submitForm = document.getElementById("submitForm");
const sendStatus = document.getElementById("sendStatus");

function showQuestion() {
  answered = false;
  const q = questions[current];
  progress.textContent = `${current + 1} / ${questions.length}`;
  scoreEl.textContent = `正解 ${score}`;
  questionText.innerHTML = q.text;
  document.querySelector('[data-answer="true"]').textContent =
  q.choiceTrue || "算定できる"; 
document.querySelector('[data-answer="false"]').textContent =
  q.choiceFalse || "算定できない";
  resultBox.classList.add("hidden");
  document.querySelectorAll(".answer").forEach(btn => btn.disabled = false);
}

function finishQuiz() {
  quizScreen.classList.add("hidden");
  finishScreen.classList.remove("hidden");
  const percent = Math.round((score / questions.length) * 100);
  finalScore.textContent = `${questions.length}問中 ${score}問正解（${percent}%）`;
  finalMessage.textContent = percent >= 80 ? "かなり良い感じです！" : percent >= 60 ? "あと少しで安定しそうです。" : "解説を見ながらもう一度やってみましょう。";
}

function handleAnswer(userAnswer) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const correct = userAnswer === q.answer;
  if (correct) score++;
  answerLog.push({
    no: current + 1,
    question: q.text,
    userAnswer: userAnswer ? "算定できる" : "算定できない",
    correctAnswer: q.answer ? "算定できる" : "算定できない",
    result: correct ? "正解" : "不正解"
  });
  judge.textContent = correct ? "正解！" : "不正解";
  explanation.innerHTML = q.explanation;
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `正解 ${score}`;
  document.querySelectorAll(".answer").forEach(btn => btn.disabled = true);
  nextBtn.textContent = current === questions.length - 1 ? "結果を見る" : "次の問題へ";
}

async function submitResult(event) {
  event.preventDefault();

  if (!GAS_WEB_APP_URL) {
    sendStatus.textContent = "config.js にGoogle Apps ScriptのURLを設定してください。";
    return;
  }

  const payload = {
    timestamp: new Date().toLocaleString("ja-JP"),
    quizTitle:"外来服薬支援料クイズ",
    storeName: document.getElementById("storeName").value.trim(),
        name: document.getElementById("playerName").value.trim(),
    difficulty: document.getElementById("difficulty").value,
    score,
    total: questions.length,
    percent: Math.round((score / questions.length) * 100),
    answers: JSON.stringify(answerLog)
  };

  sendStatus.textContent = "送信中です...";

  try {
    await fetch(GAS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    
    sendStatus.textContent = "送信しました。スプレッドシートを確認してください。";
   
    submitForm.querySelector("button").disabled = true;
    
    document.getElementById("retryBtn").disabled=false;
 
  } catch (error) {
    console.error(error);
    sendStatus.textContent = "送信に失敗しました。URLや公開設定を確認してください。";
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  info1Screen.classList.remove("hidden");
});

document.getElementById("info1NextBtn").addEventListener("click", () => {
  info1Screen.classList.add("hidden");
  info2Screen.classList.remove("hidden");
});

document.getElementById("quizStartBtn").addEventListener("click", () => {
  info2Screen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});

document.querySelectorAll(".answer").forEach(btn => {
  btn.addEventListener("click", () => handleAnswer(btn.dataset.answer === "true"));
});

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    finishQuiz();
  }
});

submitForm.addEventListener("submit", submitResult);
document.getElementById("retryBtn").addEventListener("click", () => location.reload());
