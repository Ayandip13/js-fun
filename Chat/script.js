const API_KEY = "AIzaSyBVgwDcPDuDaZPGIE8hGBqNGMlUimu5y_g";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

async function generateResponse(prompt) {
  const response = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: "POST",
    //specifies the HTTP method(post) to send data to the API (here prompt is sending to the API)
    headers: {
      "Content-Type": "application/json",
      //whenever the response will come it will be in json format
    },
    body: JSON.stringify({
      //the body of the request, converting the user's message into the format required by the API.
      contents: [
        {
          parts: [
            {
              text: prompt,
              //user's input (`prompt`) is inserted into the request payload
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate response");
    //if there's an error, an exception is thrown with an error message
  }

  const data = await response.json();
  //converts the api response into the json fomat
  return data.candidate[0].content.parts[0].text;
  //Returns the first generated response from the API (the text part of the response).
}
