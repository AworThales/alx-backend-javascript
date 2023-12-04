export default function cleanSet(set, startString) {
  let results = '';
  if (!startString || !startString.length) return results;
  for (const data of set) { if (data && data.startsWith(startString)) results += `${data.slice(startString.length)}-`; }
  return results.slice(0, results.length - 1);
}
