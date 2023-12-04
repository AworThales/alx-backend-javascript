export default function getStudentIdsSum(arr) {
  return arr.reduce((v, w) => v + w.id, 0);
}
