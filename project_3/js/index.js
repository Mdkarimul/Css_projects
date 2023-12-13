// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import  "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/@popperjs/core/dist/esm/popper.js";



export {

}
//
// Place any custom JS here
//

document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })