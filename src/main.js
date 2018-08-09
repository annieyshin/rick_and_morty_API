import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { RickAPI } from './rick-and-morty.js';

$(document).ready(function() {
  $('#form-input').submit(function(event) {
    event.preventDefault();
    let characterName = $('#name_input').val();
    let characterStatus = $('#status_input').val();
    let characterGender = $('#gender_input').val();
    let rick = new RickAPI();
    let promise = rick.getCharacters({name: characterName, status: characterStatus, gender: characterGender});
    promise.then(function(response) {
      let body = JSON.parse(response);
      $("#character").text(body.results[0].name);
      $('#gender').text(body.results[0].gender);
      $('#status').text(body.results[0].status);

    });
  });
});
