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
    "answer": true,
    "explanation": "（服用時点が同じ2剤以上の内服薬）"
  },
  {
    "text": "【仮】外来服薬支援料の問題2（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題3（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題4（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題5（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題6（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題7（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題8（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題9（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題10（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題11（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題12（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題13（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題14（あとで変更してください）",
    "answer": false,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  },
  {
    "text": "【仮】外来服薬支援料の問題15（あとで変更してください）",
    "answer": true,
    "explanation": "仮の解説です。あとで正しい内容に変更してください。"
  }
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
  explanation.textContent = q.explanation;
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
    quizTitle: "外来服薬支援料クイズ",
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
