'use strict';

import Toggle from '@nycopportunity/pttrn-scripts/src/toggle/toggle';

/**
 * The Attribution module
 *
 * @class
 */
class Attribution {
  /**
   * @constructor
   *
   * @return  {object}  The class
   */
  constructor() {
    this.selector = Attribution.selector;

    this.toggle = new Toggle({
      selector: this.selector
    });

    return this;
  }
}

/** @type  {String}  The dom selector for the module */
Attribution.selector = '[data-js*="attribution"]';

export default Attribution;
