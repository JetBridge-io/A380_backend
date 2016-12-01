/**
 * Copyright (c) 2016-present JET BRIDGE LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var REGISTERED = 'REGISTERED';
var RELEASING = 'RELEASING';
var RELEASED = 'RELEASED';

var isReleasing = function(status) {
  if (status === RELEASING) {
    return true;
  }

  return false;
}

module.exports = {
  REGISTERED : REGISTERED,
  RELEASING : RELEASING,
  RELEASED : RELEASED,
  isReleasing : isReleasing

}
