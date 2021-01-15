import { awesomeFn } from "@quramy/x-core";

export async function main() {
  console.log('calling main');
  
  // dependencies across child packages
  const out = await awesomeFn();
  return out;
}
