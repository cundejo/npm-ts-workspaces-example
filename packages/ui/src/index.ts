import { helloFunction } from "@outlast/core";

export async function index() {
  console.log('calling main');

  // dependencies across child packages
  const out = helloFunction();
  return out;
}
