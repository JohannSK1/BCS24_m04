function calculateCircleArea(radius) {
    const pi = Math.PI;
    const area = pi * (radius ** 2);
    return area;
  }
  
  const radius = 5;
  const circleArea = calculateCircleArea(radius);
  console.log(circleArea);

  function checkPassingScore(score, totalScore) {
    const percentage = (score / totalScore) * 100;
    const passingPercentage = 75;
    const isPassed = percentage > passingPercentage;
    return isPassed;
  }
  
  const score = 80;
  const totalScore = 100;
  const isPassingScore = checkPassingScore(score, totalScore);
  console.log(isPassingScore);