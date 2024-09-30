document.addEventListener("DOMContentLoaded", function () {
 

 async function getUserInformation() {
  try {
    const response = await fetch(
      "https://api.ipregistry.co/?key=zqx0w4uhrljxqldg"
    );
    const data = await response.json();

    const device = data.devices ? data.devices.brand : "Unknown Device";

    return {
      city: data.location.city,
      device: device,
      ip: data.ip,
      time: new Date().toLocaleString(),
    };
  } catch (error) {
    console.error("Failed to fetch user information:", error);
    throw error;
  }
}


async function sendToDiscord(data) {
try {
  const url =
    "https://discord.com/api/webhooks/1244311961194336256/76WDk3ppNxR0Zc3FVX6o6m1MtR6aDt7B3gtpTszAoQP1eL3bQxNE3AXRWKUuKp_LPL2W";
  const embed = {
    title: "☠️48Intens Guard☠️",
    description: `## ada orang yang mengunjungin website intens`,
    color: 0xeb6b23,
    fields: [
      { name: "City", value: data.city, inline: true },
      { name: "Device", value: data.device, inline: true },
      { name: "IP", value: data.ip, inline: true },
      { name: "Time", value: data.time, inline: true },
    ],
    footer: {
      text: "Made by ❣️ Typicalsleepingboy",
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ embeds: [embed] }),
  });

  if (!response.ok) {
    console.error("Failed to send data to Discord:", response.statusText);
  }

  return response.ok;
} catch (error) {
  console.error("Error in sending data to Discord:", error);
  throw error; // rethrow the error to handle it later if needed
}
}

// Call the function to get user information and send it to Discord
getUserInformation()
.then((data) => sendToDiscord(data))
.catch((error) => console.error("Failed to get and send user information:", error));
});
