$(function(){
  function buildMessage(message){
    var image = message.image? `<img src = ${message.image} >`:"";
    var html = `<div class="contents__main__messages__data" data-message-id= ${message.id}>
                  <div class="contents__main__messages__data__info">
                    <div class="contents__main__messages__data__info__talker">
                      ${message.user_name}
                    </div>
                    <div class="contents__main__messages__data__info__date">
                      ${message.created_at}
                    </div>
                    </div>
                    <div class="contents__main__messages__data__text">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                    ${image}
                </div>`
    return html;
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $(".contents__main__messages").append(html);
      $(".contents__main__messages").animate({scrollTop: $(".contents__main__messages")[0].scrollHeight}, 'fast');
      $(".form__submit").prop('disabled',false);
      $("form")[0].reset()
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました")
    })
  });

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $(".contents__main__messages__data:last").data("message-id");
      $.ajax({
        url: "api/messages",
        type: "GET",
        dataType: "json",
        data: {id: last_message_id}
      })
      .done(function(messages){
        var insertHTML = "";
        messages.forEach(function(message){
          insertHTML = buildMessage(message);
          $(".contents__main__messages").append(insertHTML);
          $(".contents__main__messages").animate({scrollTop: $(".contents__main__messages")[0].scrollHeight}, 'fast');
        })
      })
      .fail(function(){
        alert("エラー");
      });
    }
  };
  setInterval(reloadMessages, 7000);
});