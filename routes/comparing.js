const express = require('express');
const router = express.Router();

// ฟังก์ชันแปลง Alien numeral → integer
function alienToInt(s) {
  const values = { A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000 };
  s = s.toUpperCase();
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]];

    if (!current) throw new Error(`Invalid character: ${s[i]}`);

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

// POST /api/comparing
router.post("/", (req, res) => {
  const { inputData } = req.body;

  if (!inputData) {
    return res.status(400).json({ error: "Missing 'inputData' field in body" });
  }

  try {
    const result = alienToInt(inputData);
    res.json({ input: inputData, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
