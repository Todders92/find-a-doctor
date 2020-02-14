import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./find-a-doctor";


$document.ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor();
      getElements(response);
    })();
    function getElements(response) {
      if(response){
        $("#doctorName").text(response.);
        $("#doctorAddress").text(response.);
        $("#doctorNumber").text(response.);
        $("#doctorWebsite").text(response.);
        $("#output").show();
      } else {
        $("#doctorName").text(`Error in handling request.`);
        $("#doctorAddress").text(`Error in handling request.`);
        $("#doctorNumber").text(`Error in handling request.`);
        $("#doctorWebsite").text(`Error in handling request.`);
        $("#output").show();
      }
    }

  });
});