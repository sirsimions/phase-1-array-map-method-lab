const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let sentenceCase = [];

const titleCased = ()=> {
  tutorials.map(function titleCased(varSentences){

   let arrayOne = [];
  
      function characterArray(characters){
        arrayOne = characters.split(" ");
      };
      characterArray(varSentences);
  
  
      const capitalLetters = arrayOne.map( function(characters) {
        return characters.charAt(0).toUpperCase()+characters.slice(1);
  })
  
      const newString = capitalLetters.join(" ");
      sentenceCase.push(newString);

});
  return sentenceCase;
} 

