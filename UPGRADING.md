# Upgrading consuming projects

This document notes breaking changes that should be considered when updating a
consuming project's Larva version.

---

### `lrv-a-crop-2x3`

Prior to version `[VERSION]`, the `lrv-a-crop-2x3` algorithm was inverted,
producing a 3x2 crop rather than a 2x3 crop. To fix this, the existing crop was
corrected and a new `lrv-a-crop-3x2` algorithm introduced. No patterns were
updated as themes would not have the new algorithm. When upgrading a consuming
project, its patterns and/or controllers may need to be updated to use the new
algorithm in places where a 3x2 crop was desired but a 2x3 crop is requested.
