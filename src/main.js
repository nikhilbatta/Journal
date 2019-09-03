import { Journal } from './journal1';
import { Entry } from './journal1';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var newJournal = new Journal();
$(document).ready(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("input#title").val();
    var inputEntry = $("input#entry").val();
    var newEntry = new Entry(inputTitle, inputEntry);
    newJournal.addEntry(newEntry);
    $("#outputDisplay").text(inputTitle);
    $("#outputDisplay1").text(inputEntry);
    $("#listOfStuff").show();
    newJournal.display();
    console.log(newJournal);
  });
  $("#newWack").click(function(){
    newJournal = new Journal();
    $("#outputDisplay").text(" ");
    $("#outputDisplay1").text(" ");
    $("#listOfStuff").hide();
  });
});
