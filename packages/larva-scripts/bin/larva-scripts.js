#!/usr/bin/env node
'use strict';

/**
 * Internal dependencies
 */
const { getArgsFromCli, spawnScript } = require( '../utils' );

const [ scriptName, ...nodesArgs ] = getArgsFromCli();

spawnScript( scriptName, nodesArgs );