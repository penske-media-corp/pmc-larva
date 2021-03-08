cd packages/larva-tokens
node lib/generate-typography.js
npm run build
cd ../../
npm run prod:scss
npm run sync-build