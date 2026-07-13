const axios = require("axios");

exports.analyzeReviewsWithAI = async (reviews) => {
  try {
    const reviewTexts = reviews.map(
      (review) => review.Comment
    );

    const prompt = `
Analyze all restaurant reviews together.

Return ONLY valid JSON in this exact format:

{
  "sentiment":"positive",
  "summaryBullets":[
    "point1",
    "point2",
    "point3"
  ],
  "topMentions":[
    "word1",
    "word2",
    "word3"
  ]
}

Reviews:
${reviewTexts.join("\n")}
`;

    console.log(
      "OPENROUTER_API_KEY:",
      process.env.OPENROUTER_API_KEY ? "Loaded" : "Missing"
    );

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = response.data.choices[0].message.content;

    console.log("AI RESPONSE:");
    console.log(content);

    try {
      return JSON.parse(content);
    } catch (parseError) {
      console.log("JSON Parse Failed:", parseError.message);

      return {
        sentiment: "mixed",
        summaryBullets: ["AI summary unavailable"],
        topMentions: [],
      };
    }
  } catch (error) {
    console.error("AI Review Analysis Error:");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error.message);
    }

    return {
      sentiment: "mixed",
      summaryBullets: ["AI analysis failed"],
      topMentions: [],
    };
  }
};