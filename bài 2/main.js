const merge2String = (string1, string2) => {
    const array1 = string1.split('');
    const array2 = string2.split('');
    let max = Math.max(array1.length, array2.length);
    let string = '';
    for (let i = 0; i < max; i++) {
      if (array1[i] === undefined) {
      array1[i] = '';
      }
      else if (array2[i] === undefined) {
      array2[i] = '';
      }
      string = string + array1[i] + array2[i];
    }
    console.log(string);
  }
  merge2String("abc", "123");
  merge2String("abc", "0123");
  merge2String("abcd", "123");