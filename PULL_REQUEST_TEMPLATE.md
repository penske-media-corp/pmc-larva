<!-- Add a summary of your changes here -->

### Make sure you complete these items:

- [ ] Updated root CHANGELOG.md with summary of changes under `Unpublished` section
- [ ] `npm run prod` in this repo outputs expected changes (excepting the issue with re-ordered partials in larva-css algorithms partials - see [LRVA-1885](https://jira.pmcdev.io/browse/LRVA-1885))
- [ ] If adding a new pattern, in the PR comment, included a screenshot and link to the static Vercel deployment
- [ ] If changes to build scripts or the Node.js server, tested changes in pmc-spark [via a pre-release](https://confluence.pmcdev.io/x/XhOeAw)
- - If changes to build tools: npm scripts `prod`, `lint`, and `dev` scripts run as expected
- - If changes to Larva server: Static site generates as expected in a theme  (avail. on a URL {brand}.stg.larva.pmcdev.io)