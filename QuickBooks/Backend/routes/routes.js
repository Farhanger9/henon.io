const express = require('express');
const axios = require('axios');
const router = express.Router()

// Register route
router.get('/', async (req, res) => {
    res.send('Shuru ho gya')
})

router.get('/gettb', async (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365318365490/reports/TrialBalance?accounting_method=Cash&minorversion=65',
        headers: { 
          'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..yU4VsdE1CHkEZ7z3s621TA.61lY_mpL5XzVHiXkR1aLYNwt6aBojMLCCx9tbsQbF9LpKgdnbm4xldNLoitAyhrmaifVqYcV6hXZDXObXNQo8s0h6uXaWNdYXOv2QwM-b2gy7Zf7CilcWU8PQnrv_d3GXSgBc6n3W7tlfhhXzQMVojg_zVvmla-cQn2F9lUCdEtq4Irzz6lHCYBmz6eQ97sRhcdTbN1Kp8d0HutQSFJ6P3832q5yMnRNTNhivtwOo_LSibR7NWWdH3_qJMperNi3He9YzDNX3OrptCuImUdoCZv0-HNRkHjZWR4XUkjHylO9PPVB2xz4BRz2Bnwp-75mBeS-tHMQeVJlLWB0RvSOVGjecR2AwoIPMrQSTRsjr_T-mKS6YlnrmrXgvFzaAzN6YwIaJTCqac7102I67wA73ZoXWe_j6PiwuSvovnLsvCRKwIN05LkRvWpI5OtRG_Hoc7BNRTTUInLMbM0otb-thvfxv8rUp3ZQ5jeNIMfo9e3N-blcdrScX-pi1klbLolBgQ2jb0Wy3Qmap669JAxcpLBIb4Z0A6q3o1c_Im0hmtbV8-UZUmzv6mrvntPCSDE-b3rhdFOXAbgk8ExdfYSwBBAKkCuu1OtOlbDRnMJW6sRIo0_5ETevfh3suJxVYz61ukAQDfE66SCh_quxSonbygMgAeN1RqySfWvfqAzzrgUlKPM_dS4-SeIVQSio_0KxE4KXKdNUQARWxNc5-Lth_G4_11P8hBgyw4zRDhaNj-wbmymK5M5tQwsJeYNnwVeb.IsUPQJyrBuMnLBNDANS7zw'
        }
      };
      
      axios.request(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
})

module.exports = router;