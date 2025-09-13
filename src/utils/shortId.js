export function shortId(uuid) {
  let hash = 0;
  for (let i = 0; i < uuid.length; i++) {
    hash = (hash * 31 + uuid.charCodeAt(i)) & 0xfffffff; 
  }
  return ("0000" + (hash % 10000)).slice(-4);
}
