var nickname;
var chatBox = document.getElementById('chat-box');

function setNickname() {
  nickname = document.getElementById('nickname-input').value.trim();
  if (nickname !== '') {
    document.getElementById('nickname-input').setAttribute('disabled', 'true');
    document.getElementById('message-input').removeAttribute('disabled');
    document.getElementById('send-button').removeAttribute('disabled');
  }
}

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim();

  if (message !== '') {
    appendMessage(nickname, message);
    messageInput.value = '';
    messageInput.focus();
  }
}

function appendMessage(sender, message) {
  var messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('nickname-input').addEventListener('blur', setNickname);
