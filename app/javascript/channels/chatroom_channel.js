import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#message-container').append(data.message);
    function scroll_bottom() {
      if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
      }
    }
    scroll_bottom();
  function submit_message(){
    $('#message_body').on('keydown', function(e){
      if (e.keycode == 13){
        $('button').click();
        $('#clear').val('');
      }
    })
  }
  submit_message();
  }
});
