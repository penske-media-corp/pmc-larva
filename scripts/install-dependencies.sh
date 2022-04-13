#!/bin/bash

actual_node_version="$(node -v)"
expected_node_version="v$(cat .nvmrc)"

# Note: this could return true
if [[ $actual_node_version == *$expected_node_version* ]] ;then
		npm install
		npx lerna exec npm install
	else
		echo "**********";
		echo "Unable to install dependencies!\n";
		echo "You are running Node version $actual_node_version, and \nthe required version is $expected_node_version. \n\nPlease use nvm to use the required Node version \nRefer to https://github.com/nvm-sh/nvm to set up nvm.";
		echo "**********";
		exit;
fi