const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsXsFZWAYrKkSSgFMBbgWPUO4LXwhKbADS7je-HmcxkC_NaKRT6s_Ouggcbh4dYACx94LM230rConx/pub?output=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const rows = text.split("\n").slice(1);
    const eventsDiv = document.getElementById("events");

    rows.forEach(row => {
      const cols = row.split(",");

      if (!cols[0]) return;

      const title = cols[0];
      const date = cols[1];
      const description = cols[2];
      const posterLink = cols[3];

      const event = document.createElement("div");
      event.className = "event-card";

      event.innerHTML = `
        <h2>${title}</h2>
        <p class="date">${date}</p>
        <p>${description}</p>
        ${posterLink ? `<img src="${posterLink}" />` : ""}
      `;

      eventsDiv.appendChild(event);
    });
  });
