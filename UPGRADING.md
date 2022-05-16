# Upgrading Consuming Projects
This document contains documentation on how to upgrade a Larva project, and
highlights breaking changes to be aware of when upgrading.

## How to Upgrade a Larva Project
From within your Larva project, run `npx @penskemediacorp/larva upgrade`.

This will upgrade your Larva package to the latest stable release, and run a
build.

---

# Breaking Updates Changelog

This document notes breaking changes that should be considered when updating a
consuming project's Larva version.

### `lrv-a-crop-2x3` (version 0.5.0)

Prior to version 0.5.0, the `lrv-a-crop-2x3` algorithm was inverted,
producing a 3x2 crop rather than a 2x3 crop. To fix this, the existing crop was
corrected and a new `lrv-a-crop-3x2` algorithm introduced. No patterns were
updated as themes would not have the new algorithm. When upgrading a consuming
project, its patterns and/or controllers may need to be updated to use the new
algorithm in places where a 3x2 crop was desired but a 2x3 crop is requested. To
do so, replace instances of `lrv-a-crop-2x3` with `lrv-a-crop-3x2` where
appropriate.

---

### `lrv-a-crop-2x1` (version 0.5.0)

Prior to version 0.5.0, the `lrv-a-crop-2x1` algorithm was incorrectly
implemented, producing a 1x1 crop rather than a 2x1 crop. When upgrading a
consuming project, its patterns and/or controllers may need to be updated to use
the 1x1 algorithm in places where a 1x1 crop was desired. To do so, replace
instances of `lrv-a-crop-2x1` with `lrv-a-crop-1x1` where appropriate.
