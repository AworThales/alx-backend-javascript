export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((data) => data.location === city)
    .map((person) => {
      const grades = newGrades.filter((data) => data.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
