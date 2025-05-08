// const express = require('express');
// const axios = require('axios');
// const app = express();
// const PORT = 3000; 
// const morgan = require('morgan');

// const apiKey = '60f3a053f6fd4c0c9ce9f5efa55'; 

// app.use(morgan('combined'));


// app.get('/evaluate/:testId', async (req, res) => {
//   const testId = req.params.testId;  

//   if (!testId) {
//     return res.status(400).json({ error: 'Missing testId' });
//   }

//   try {
//     // Calling the external API using GET
//     const response = await axios.get(
//       `https://dev-services.lovemytestonline.com/manage/get-evaluation-result/${testId}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': apiKey,
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error('External API Error:', error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to fetch evaluation result' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const axios = require('axios');
// const morgan = require('morgan');

// const app = express();
// const PORT = 3000;

// const apiKey = '60f3a053f6fd4c0c9ce9f5ef73fdfa55';

// app.use(express.json());

// app.use(morgan('combined'));

// app.post('/evaluate', async (req, res) => {


//     console.log('Incoming body:', req.body);

//   const { testId } = req.body;

//   if (!testId) {
//     return res.status(400).json({ error: 'Missing testId in request body' });
//   }

//   try {

//     const response = await axios.get(
//       `https://dev-services.lovemytestonline.com/manage/get-evaluation-result/${testId}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': apiKey,
//         },
//       }
//     );


//     res.json(response.data);
//   } catch (error) {
//     console.error('External API Error:', error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to fetch evaluation result' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// }); 






require('dotenv').config();

const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

// Get the API_KEY and PORT from the environment variables
const apiKey = process.env.API_KEY;
const PORT = process.env.PORT || 3000;  // Fallback to 3000 if PORT is not defined

// Middleware
app.use(express.json());
app.use(morgan('combined'));

// POST route
app.post('/evaluate', async (req, res) => {
  const { testId } = req.body;

  if (!testId) {
    return res.status(400).json({ error: 'Missing testId in request body' });
  }

  try {
    const response = await axios.get(
      `https://dev-services.lovemytestonline.com/manage/get-evaluation-result/${testId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('External API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch evaluation result' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
