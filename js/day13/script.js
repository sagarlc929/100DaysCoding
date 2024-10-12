const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = function(event) {
      const messageArea = document.getElementById('messageArea');
      messageArea.innerHTML += `<p>${event.data}</p>`;
    };

    function sendMessage() {
      const messageInput = document.getElementById('messageInput');
      const message = messageInput.value.trim();
      if (message) {
        ws.send(message);
        messageInput.value = '';
      }
    }

