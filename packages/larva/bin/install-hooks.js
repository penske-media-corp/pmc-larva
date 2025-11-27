#!/usr/bin/env node

/**
 * Git Hooks Installation Script
 *
 * Copies pre-push hook from larva package to .git/hooks/ for all team members.
 * Runs automatically via npm postinstall script.
 *
 * Source: node_modules/@penskemediacorp/larva/bin/pre-push
 * Target: root/.git/hooks/pre-push (local, not tracked)
 */

const fs = require( 'fs' );
const path = require( 'path' );
const { execSync } = require( 'child_process' );

const colors = {
	reset: '\x1b[0m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	cyan: '\x1b[36m',
};

function log( message, color = 'reset' ) {
	console.log( `${ colors[ color ] }${ message }${ colors.reset }` );
}

function findGitRoot() {
	// Try multiple strategies to find the correct git root

	// Strategy 1: Check if INIT_CWD is set (npm sets this to original directory)
	if ( process.env.INIT_CWD ) {
		try {
			const gitRoot = execSync( 'git rev-parse --show-toplevel', {
				encoding: 'utf8',
				cwd: process.env.INIT_CWD,
			} ).trim();
			return gitRoot;
		} catch ( e ) {
			// Fall through to next strategy
		}
	}

	// Strategy 2: Walk up from node_modules to find .git
	let currentDir = __dirname;
	while ( currentDir !== path.parse( currentDir ).root ) {
		// Go up until we find node_modules
		if ( currentDir.includes( 'node_modules' ) ) {
			// Go up from node_modules/@penskemediacorp/larva to the project root
			const parts = currentDir.split( path.sep );
			const nodeModulesIndex = parts.lastIndexOf( 'node_modules' );
			if ( nodeModulesIndex > 0 ) {
				const projectRoot = parts.slice( 0, nodeModulesIndex ).join( path.sep );
				const gitDir = path.join( projectRoot, '.git' );
				if ( fs.existsSync( gitDir ) ) {
					return projectRoot;
				}
			}
		}

		currentDir = path.dirname( currentDir );
	}

	// Strategy 3: Use current working directory as fallback
	try {
		return execSync( 'git rev-parse --show-toplevel', {
			encoding: 'utf8',
			cwd: process.cwd(),
		} ).trim();
	} catch ( e ) {
		throw new Error( 'Could not find git repository' );
	}
}

function installHooks() {
	try {
		// Find the correct git root
		const gitRoot = findGitRoot();

		// Source hook is in bin folder (same directory as this script)
		const sourceHookPath = path.join( __dirname, 'pre-push' );
		const targetHookPath = path.join( gitRoot, '.git', 'hooks', 'pre-push' );

		if (!fs.existsSync(sourceHookPath)) {
			log( '⚠️  Larva pre-push hook not found', 'yellow' );
			log( `Looking in: ${ sourceHookPath }`, 'yellow' );
			return false;
		}

		// Create .git/hooks directory if needed
		const hooksDir = path.dirname( targetHookPath );
		if ( ! fs.existsSync( hooksDir ) ) {
			fs.mkdirSync( hooksDir, { recursive: true } );
		}

		// Copy the hook
		fs.copyFileSync( sourceHookPath, targetHookPath );

		// Make executable
		if ( process.platform !== 'win32' ) {
			fs.chmodSync( targetHookPath, '755' );
		}

		log( '✓ Larva pre-push hook installed successfully!', 'green' );
		log( `  Git root: ${ gitRoot }`, 'cyan' );
		log( `  Source: ${ sourceHookPath }`, 'cyan' );
		log( `  Target: ${ targetHookPath }`, 'cyan' );
		return true;
	} catch ( error ) {
		log( `⚠️  Could not install Larva hook: ${ error.message }`, 'yellow' );
		return false;
	}
}

// Run if called directly
if ( require.main === module ) {
	log( '\n📦 Installing Larva Git hooks...', 'cyan' );
	installHooks();
	log( '' );
}

module.exports = { installHooks };
