import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./find-a-doctor";


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const issue = $("input#issue").val();
    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(issue);
      getElements(response);
    })();
    function getElements(response) {
      if(response){
        $("#doctorName").text(response.data[0].practices[0].name);
        $("#earthDate").text(response.data);
        $("#cameraOut").text(response.data);
        $("#output").show();
      } else {
        $("#doctorName").text(`Error in handling request.`);
        $("#earthDate").text(`Error in handling request.`);
        $("#cameraOut").text(`Error in handling request.`);
        $("#output").show();
      }
    }

  });
});