import fetch from "isomorphic-unfetch"; // Import fetch for making HTTP requests

const shortenUrl = async (longUrl) => {
  const response = await fetch("/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ longUrl }),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  const data = await response.json();
  return data.shortUrl;
};

export default shortenUrl;
