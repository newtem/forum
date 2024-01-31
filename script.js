var username;
var chatBox = document.getElementById('chat-box');

function setNickname() {
  username = document.getElementById('nickname-input').value.trim();
  if (username !== '') {
    document.getElementById('nickname-input').setAttribute('disabled', 'true');
    document.getElementById('message-input').removeAttribute('disabled');
    document.getElementById('send-button').removeAttribute('disabled');
  }
}

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim();

  if (message !== '') {
    appendMessage(username, message);
    saveMessage(username, message);
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

function saveMessage(sender, message) {
  var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.push({ sender, message });
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function loadMessages() {
  var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.forEach(function (msg) {
    appendMessage(msg.sender, msg.message);
  });
}

document.getElementById('nickname-input').addEventListener('blur', setNickname);

loadMessages();
