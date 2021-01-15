import { helloFunction } from "@outlast/core";
import ui from "@outlast/ui";

export async function index() {
  console.log('calling main');

  // dependencies across child packages
  const hello = helloFunction();
  const button = ui.Button();

  return button
}
