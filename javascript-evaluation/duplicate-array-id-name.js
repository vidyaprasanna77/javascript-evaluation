const arr = [
  {id: 1, name: "Stephen covey" }, 
  {id: 2, name: "Robin Sharma" },
   {id: 3, name:"Tolstoy"},
   {id: 3, name: "Tolstoy"},
  {id: 5, name: "James clear"}
];

const uniqueIds = [];

const unique = arr.filter((element) => {
  const isDuplicate = uniqueIds.includes(element.id);
  console.log(isDuplicate);

  if (!isDuplicate) {
    uniqueIds.push(element.id);
    console.log(uniqueIds);

    return true;
  }

  return false;
});

console.log(unique);
