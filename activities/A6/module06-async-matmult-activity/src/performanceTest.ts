import matrixMultiply from "./matrixMultiply.js";
import matrixMultiplyAsync1 from "./matrixMultiplyAsync1.js";
import matrixMultiplyAsync2 from "./matrixMultiplyAsync2.js";
import randomMatrix from "./randomMatrix.js";
import { type Matrix } from "./matrices.js";

async function timeIt<T>(label: string, thunk: () => Promise<T> | T) {
  const t0 = performance.now();
  await thunk();
  const t1 = performance.now();
  console.log(`${label}: ${(t1 - t0).toFixed(2)} ms`);
}

async function driver() {
  const size = 10;
  const a = randomMatrix(size);
  const b = randomMatrix(size);

  console.log(`Matrix size: ${size}x${size}`);

  // Sequential
  await timeIt("matrixMultiply (sequential)", () => matrixMultiply(a, b));

  // Async1
  await timeIt("matrixMultiplyAsync1 (async)", () =>
    matrixMultiplyAsync1(a, b)
  );

  // Async2
  await timeIt("matrixMultiplyAsync2 (async, concurrent)", () =>
    matrixMultiplyAsync2(a, b)
  );
}

driver();