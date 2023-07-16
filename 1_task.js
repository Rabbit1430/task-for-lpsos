/** @format */

const Interviews = function QuestionnaireData(interviewData, passingtime) {
  let CompletedInterviews = [];
  for (let item of interviewData) {
    const time = item[1];
    if (time >= passingtime) {
      CompletedInterviews.push(item);
    }
  }
  console.log("Задание номер 1:", CompletedInterviews);
};

// Данные анкеты по формату <№ интервью><Время заполнения в сек><Оценка 1><Оценка 2>…<Оценка N>

const interviewData = [
  [1, 100, 5, 4, 3],
  [2, 50, 3, 2, 1, 4],
  [3, 200, 4, 3, 2, 1],
  [4, 40, 4, 3, 2, 1],
];

//Время для правдивого интервью в секундах
const passingtime = 60;

Interviews(interviewData, passingtime);
