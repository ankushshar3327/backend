// Assuming this is inside a module
export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken(); // Assuming user.getJWTToken() retrieves the JWT token for the user

  // Calculate cookie expiry date
  const cookieExpiresInDays = process.env.COOKIE_EXPIRE || 30; // Default to 30 days if not provided
  const options = {
    expires: new Date(Date.now() + cookieExpiresInDays * 24 * 60 * 60 * 1000), // Calculate expiry date based on days
    httpOnly: true, // Set httpOnly to true for security reasons
  };
  console.log("jwt token")

  // Send response with token and user data
  res.status(statusCode)
     .cookie("token", token, options) // Set the "token" cookie with the JWT token
     .json({
       success: true,
       user,
       message,
       token, // Include the token in the JSON response
     });
};
``
