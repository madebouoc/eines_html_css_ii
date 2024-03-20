let spanishLiterals = require('./src/assets/locals/locals_es.json');
let catalanLiterals = require('./src/assets/locals/locals_ca.json');
let englishLiterals = require('./src/assets/locals/locals_en.json');


catalanLiterals.catalan = deepMerge(catalanLiterals.catalan, spanishLiterals.spanish);
englishLiterals.english = deepMerge(englishLiterals.english, spanishLiterals.spanish);

module.exports = {
  "plugins": {
    "posthtml-include": {
      "root": "./src"
    },
    "posthtml-expressions": {
      "locals": {
        ...spanishLiterals,
        ...catalanLiterals,
        ...englishLiterals
      }
    }
  }
};


function deepMerge(obj1, obj2) {
  const output = { ...obj2 };
  if (!obj1) {
    return output;
  }
  Object.keys(obj1).forEach((key) => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      output[key] = deepMerge(obj1[key], obj2[key]);
    } else if (obj2.hasOwnProperty(key)) {
      output[key] = obj1[key];
    }
  });
  return output;
}


function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}








//      scopeTags: ['language']

/*
module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        ...spanish,
        ...catalan,
        ...english,
      },
    },
  },
};
*/
