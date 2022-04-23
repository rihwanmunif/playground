
// mengembalikan jumlah dari key-value pairs
console.log(employees.size); // results: 3

// menghapus data
employees.delete("08198765432");

console.log(employees.size); // results: 2

const keys = employees.keys();
console.log(keys.next().value); // result: 08123456789
console.log(keys.next().value); // result: 08123450003