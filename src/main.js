import { Journal } from './journal1';
import { Entry } from './journal1';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var newJournal = new Journal();
  $("form#journal").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("input#title").val();
    var inputEntry = $("input#entry").val();
    var newEntry = new Entry(inputTitle, inputEntry);
    newEntry.numberOfWords();
    newEntry.allCharacters();
    newEntry.allVowels();
    newJournal.addEntry(newEntry);
    console.log(newJournal);
  });
});
