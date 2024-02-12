import { sleep } from "../utils/sleep.js";

async function fetchMovie(movieId) {
  if (!movieId) {
    return null;
  }

  await sleep();

  const res = await fetch(`https://search.imdbot.workers.dev/?tt=${movieId}`);
  const data = await res.json();
  return data;
}

export { fetchMovie };
