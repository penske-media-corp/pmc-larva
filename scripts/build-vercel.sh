#!/bin/bash

# Build React site and copy to to build/html
mkdir -p build/html/site
npm install --prefix=packages/site
npm run build --prefix=packages/site
cp -r packages/site/build/* build/html

# Generate Larva static site
nohup node ./packages/larva/lib/start.js > /dev/null 2>&1 &
npm run build-html