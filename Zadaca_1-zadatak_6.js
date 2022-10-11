var space = "Ovaj zadatak je rijesen";

function camelcase(str) {
    return space.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  console.log(camelcase(space))