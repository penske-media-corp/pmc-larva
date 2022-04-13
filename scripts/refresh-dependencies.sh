#!/bin/bash

npx lerna exec -- rm -rf node_modules package-lock.json
sh ./scripts/install-dependencies.sh
npm run prod