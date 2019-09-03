import $ from 'jquery';
//backEnd
export function Journal() {
  this.entries = [];
}
Journal.prototype.addEntry = function(entry) {
  this.entries.push(entry);
}
export function Entry(title, entry) {
  this.title = title,
  this.entry = entry
}
Entry.prototype.numberOfWords = function() {
  var wordCounter = this.entry.trim().split(/\s+/).length;
  return wordCounter;
}
Entry.prototype.allCharacters = function(){
  var characterCounter = this.entry.split("").length;
  return characterCounter;
}
Entry.prototype.allVowels = function(){
  var vowelCounter = this.entry.match(/[aeiou]/g);
  return vowelCounter;
}
// frontEnd
Journal.prototype.display = function(){
  this.entries.forEach(function(entry1){
      $("#listOfStuff").append("<li>" + "The number of words are: " + " "  + entry1.numberOfWords() + "</li>");
      $("#listOfStuff").append("<li>" + "The number of characters are: " + " "  + entry1.allCharacters() + "</li>");
      $("#listOfStuff").append("<li>" + "The number of vowels are: " + " "  + entry1.allVowels() + "</li>");
  });
}
