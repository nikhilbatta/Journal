export function Journal() {
  this.entries = []
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
  console.log(wordCounter)
}
Entry.prototype.allCharacters = function(){
  var characterCounter = this.entry.split("").length;
  console.log(characterCounter);
}
Entry.prototype.allVowels = function(){
  var vowelCounter = this.entry.match(/[aeiou]/g);
  
  // var vowelCounter = this.entry.split("a","e","i","o","u",0).length;
  console.log(vowelCounter)
}
