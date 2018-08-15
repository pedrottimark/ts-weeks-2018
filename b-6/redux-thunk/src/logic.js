export const getFoodText = foodId => foodId.replace(/_/g, ' ');

export const getRecommendationClass = recommendation =>
  recommendation < 0
    ? 'avoid'
    : recommendation === 0
      ? 'limit'
      : '';

/*
export const getRecommendationClass = recommendation => {
  if (recommendation < 0) {
    return 'avoid';
  }
  if (recommendation === 0) {
    return 'limit';
  }
  return '';
}
*/
