### Doneness Checklist:

Canary release # (or n/a):

- [ ] Updated changelog with summary of changes under `Unpublished` section
- [ ] `npm run prod` in this repo outputs no changes
- [ ] Tested changes in a consuming project [via a canary release](https://confluence.pmcdev.io/x/XhOeAw):
- - [ ] If changes to build tools: npm scripts `prod`, `lint`, and `dev` scripts run as expected
- - [ ] If changes to Larva server: Static site generates as exepected in a theme  (avail. on a URL {brand}.stg.larva.pmcdev.io)