# Clean all copies of tokens
rm build/tokens/*
rm packages/larva/build/tokens/*
npm run build --prefix packages/larva-tokens
npm run prod
npm run sync-build