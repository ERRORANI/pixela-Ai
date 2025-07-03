document.getElementById("sendBtn").addEventListener("click", async () => {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;
  
    appendMessage("You", message, "user");
    input.value = "";
  
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
  
    const data = await res.json();
    appendMessage("AI", data.reply, "bot");
  });
  
  function appendMessage(sender, text, cls) {
    const chatbox = document.getElementById("chatbox");
    const div = document.createElement("div");
    div.className = `message ${cls}`;
    div.textContent = `${text}`;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
  }