document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send');
    const messageArea = document.getElementById('messageArea');

    sendButton.addEventListener('click', function () {
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name !== '' && message !== '') {
            const newMessage = document.createElement('div');
            newMessage.innerHTML = `<strong>${name}:</strong> ${message}`;
            messageArea.appendChild(newMessage);

            // Aici poți adăuga codul pentru a trimite mesajul către server sau altă acțiune dorită

            // Șterge valorile din câmpuri după trimitere
            nameInput.value = '';
            messageInput.value = '';
        } else {
            alert('Te rog să completezi toate câmpurile!');
        }
    });
    document.querySelector("html")
});
