




function createDimondShape(size) {
  for (let i = 1; i <= size; i++) {
    for (let s = size - 1; s >= i; s--) {
      process.stdout.write(" ");     // console.log() calls process.stdout.write with formatted output.
                                      
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
  if (i == size + 1) {
    for ( i = 1; i <= size - 1; i++) {
      for ( s = 1; s <= i; s++) {
        process.stdout.write(" ");
      }
      for (j = i; j <= size - 1; j++) {
        process.stdout.write("* ");
      }
      console.log();
    }
  }
}
createDimondShape(9);