export function shortenLongNumbers(num: number): string {
  const absNum = Math.abs(num);

  if (absNum < 1000) {
    return num.toString();
  }

  const si = [
    { v: 1e3, s: `k` },
    { v: 1e6, s: `M` },
    { v: 1e9, s: `B` },
    { v: 1e12, s: `T` },
    { v: 1e15, s: `P` },
    { v: 1e18, s: `E` },
  ];

  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (absNum >= si[index].v) {
      break;
    }
  }

  return (
    (num / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, `$1`) +
    si[index].s
  );
}
