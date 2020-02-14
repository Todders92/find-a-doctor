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
      if(response === false){
        $("#output").text(`error in handling request`);
      } else if (response.data.length>0) {
        response.data.forEach(function(response){
          $("ul#results").append(`<li>${response.profile.first_name} ${response.profile.last_name} ${response.practices[0].visit_address.city} ${response.practices[0].visit_address.state} ${response.practices[0].visit_address.street} ${response.practices[0].visit_address.zip} ${"phone number:"} ${response.practices[0].phones[0].number} </li>`);
        });
      }
    }

  });
});