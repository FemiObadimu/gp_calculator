export default function getScore(array) {
  //[{grade:0,unit:8}]
  let grade_unit = 0;
  let totalUnit = 0;
  array.forEach((e) => {
    if (e.grade && e.unit) {
      grade_unit += e.grade * e.unit;
      totalUnit += e.unit;
    }
  });
  console.log(grade_unit, totalUnit);
  if ((grade_unit > 0, totalUnit > 0))
    return (grade_unit / totalUnit).toFixed(2);
  else return null;
}
