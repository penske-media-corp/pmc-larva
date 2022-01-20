# IMPORTANT!!!!

After this directory has been copied into a consuming project, [follow these steps](https://confluence.pmcdev.io/x/JQqeAw), delete this section of the readme, and replace the {Project} text below with the name of the brand (in the bright future, this will be automated).

# {Project} Larva

This is configuration only instance of Larva. There should be no CSS or JS compiled here, only JSON configuration using existing styles from larva.css. If additional styles are needed, they should be [contributed upstream to the Larva packages](https://confluence.pmcdev.io/x/EQNCB).

## Links

* [{Project} design tokens]().
* [{Project} style guide on Invision or XD]().
* [{Project} style guide on the static site]().

## Development

To start developing:

1. Run `npm install` from theme-directory/assets.
2. Run `npm run larva` to open the Larva server.

Add pattern configurations by creating variants for modules.

## Larva Commands

* `npm run larva` - Start the Larva pattern server. Navigate in the browser to http://localhost:3000.
* `npm run parser` - Parse recently changed pattern Twig files to PHP.
* `npm run write-json` - write pattern objects to JSON files.

