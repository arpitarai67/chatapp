const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
 
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "ea562e5e-3120-4f2b-a518-4a1a74e60a40" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // return res.status(e.response.status).json(e.response.data);
    if (e.response && e.response.status) {
      // Handle the error response if e.response is defined
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Log the error details and return a generic error message
      console.error('Error:', e);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
});



app.listen(3001);