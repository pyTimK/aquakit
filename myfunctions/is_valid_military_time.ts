// create a function that checks whether a string is in the format of military time like "13:58", and "4:42"

export function isValidMilitaryTime(time: string) {
  const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return regex.test(time);
}
