import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./find-a-doctor";


$(document).ready(function() {
  $("form#docNames").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(name);
      getElements(response);
    })();
    function getElements(response) {
      console.log(response);
      if(response.data.length === 0) {
        $("#errorText").text(`No matches found, try another name`);
      } else if (response.data.length>0) {
        response.data.forEach(function(response){
          $("ul#results").append(`<li>${response.profile.first_name} ${response.profile.last_name} ${response.practices[0].visit_address.city} ${response.practices[0].visit_address.state} ${response.practices[0].visit_address.street} ${response.practices[0].visit_address.zip} ${"Phone number:"} ${response.practices[0].phones[0].number} </li>`);
        });
      }
    }
    $("#nameOutput").show();
    $("form#docNames").hide();
  });
  $("form#sick").submit(function(event) {
    event.preventDefault();
    const symptom = $("input#symptom").val();
    (async () => {
      let doctor = new Doctor();
      const answer = await doctor.getSick(symptom);
      getAnswer(answer);
    })();
    function getAnswer(answer) {
      console.log(answer);
      if(answer.data.length === 0) {
        $("#errorSymptom").text(`No matches found, try inputting a different ailement`);
      } else if (answer.data.length>0) {
        answer.data.forEach(function(answer){
          $("ul#symptomResults").append(`<li>${answer.profile.first_name} ${answer.profile.last_name} ${answer.practices[0].visit_address.city} ${answer.practices[0].visit_address.state} ${answer.practices[0].visit_address.street} ${answer.practices[0].visit_address.zip} ${"Phone number:"} ${answer.practices[0].phones[0].number} </li>`);
        });
      }
    }
    $("#sickOutput").show();
    $("form#sick").hide();
  });
});