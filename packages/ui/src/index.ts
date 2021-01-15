import { helloFunction } from "@outlast/core";

export function Button() {
  console.log('calling main');

  // dependencies across child packages
  const out = helloFunction();
  return out;
}
