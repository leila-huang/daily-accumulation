/**
 * 生成一个用不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 8): string => {
  return Number(
    Math.random().toString().substr(2, randomLength) + Date.now()
  ).toString(36);
};
