let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getLetterGrade(score) {
  if (score >= 93) return 'A';
  if (score >= 85) return 'B';
  if (score >= 77) return 'C';
  if (score >= 69) return 'D';
  if (score >= 60) return 'E';
  
  return 'F';  
}

function getRoundedGradePercent(...scoresAndWeights) {
  const weightedAverage = scoresAndWeights.reduce((total, scoreAndWeight) => {
    return total + (scoreAndWeight[0] * scoreAndWeight[1]);
  }, 0);
  
  return Math.round(weightedAverage);
}

function getStudentScore(scoreObj) {
  const EXAMS_WEIGHT = 0.65;
  const EXERCISES_WEIGHT = 0.35;
  
  const examAverage = getAverage(scoreObj.exams);
  const exerciseTotal = scoreObj.exercises.reduce((total, current) => total + current);
  
  const roundedPercent = getRoundedGradePercent([examAverage, EXAMS_WEIGHT], [exerciseTotal, EXERCISES_WEIGHT]);
  const letterGrade = getLetterGrade(roundedPercent);
  
  return `${roundedPercent} (${letterGrade})`;  
}

function getExamScoresTogether(examData) {
  const examScoresByExam = [];
  
  examData.forEach(scoreSet => {
    scoreSet.forEach((score, index) => {
      if (examScoresByExam[index]) {
        examScoresByExam[index].push(score);
      } else {
        examScoresByExam[index] = [score];
      }
    });
  });
  
  return examScoresByExam;
}

function getAverage(set) {
  const sum = set.reduce((total, current) => total + current);
  
  return sum / set.length;
}

function numericalOrder(first, second) {
  return (first < second) ? -1 : 1;
}

function getExamSummary(examData) {
  const examScores = getExamScoresTogether(examData);
  
  const examSummaries = [];
  
  examScores.forEach(scoreSet => {
    let scores = scoreSet.slice();
    scores.sort(numericalOrder);
    
    examSummaries.push({
      average: getAverage(scores),
      minimum: scores[0],
      maximum: scores[scores.length - 1],
    });
  });
  
  return examSummaries;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
