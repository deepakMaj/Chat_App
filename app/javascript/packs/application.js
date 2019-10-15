// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

import "bootstrap"

//= require bootstrap-sprockets

function scroll_bottom() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

function submit_message(){
  $('#message_body').on('keydown', function(e){
    if (e.keycode == 13){
      $('button').click();
      $('#clear').val('');
    };
  });
};

$(document).on('turbolinks:load', function(){
  scroll_bottom();
  submit_message();
})
