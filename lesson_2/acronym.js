function acronym(string) {
  const words = string.split(/[ ,:-]+/);
  
  return words.reduce((acronym, word) => {
    acronym += word[0].toUpperCase();
    return acronym;
  }, '');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
