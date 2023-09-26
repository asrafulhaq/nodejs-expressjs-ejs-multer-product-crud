/**
 * Create a random di
 */
export const getRandomUniqueID = (length = 26) => {
  const timestamp = Math.floor(new Date().getTime() / 1000).toString(16); // Current timestamp in hexadecimal
  const increment = Math.floor(Math.random() * 0x100000).toString(16); // Random 5-digit incrementing value in hexadecimal

  // Ensure the incrementing value is exactly 5 characters long
  const paddedIncrement = increment.padStart(5, "0");

  // Combine the timestamp and incrementing value to create the user ID
  const userId = timestamp + paddedIncrement;

  return userId;
};

/**
 * Create slug
 */

export const createSlug = (name) => {
  // Convert the name to lowercase and replace spaces with hyphens
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  // Remove any special characters or symbols
  const cleanedSlug = slug.replace(/[^a-z0-9-]/g, "");

  return cleanedSlug;
};
