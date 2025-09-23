// remoteSum.ts
// This module exports a function that takes two numbers and calls out to a website to compute their sum.

/**
 * Calls an external API to compute the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {Promise<number>} - The sum returned by the remote API.
 */
export default async function remoteProduct(a: number, b: number, noisy=false): Promise<number> {
  // Example API: https://api.mathjs.org/v4/?expr=2%2B3
  const url = `https://api.mathjs.org/v4/?expr=${encodeURIComponent(`${a} * ${b}`)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch sum: ${response.statusText}`);
  }
  const text = await response.text();
  const result = Number(text);
  if (Number.isNaN(result)) {
    throw new Error('API did not return a valid number');
  }
  if (noisy) {
    // eslint-disable-next-line no-console
    console.log(`${a} * ${b} = ${result}`);
  }
  return result;
}

// function usageExample() {
//   remoteProduct(5, 7, true)
//       .then(product => console.log(`The product is: ${product}`))
//       .catch(e => console.error(e));
// }

// usageExample();
  