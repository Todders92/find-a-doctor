import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./find-a-doctor";


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const name = $("input#issue").val();
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
    // $("form").hide();
  });
});