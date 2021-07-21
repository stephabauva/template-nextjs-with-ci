// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * sample api function
 * @param {object} req The request object
 * @param {object} res The response object
 */
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
