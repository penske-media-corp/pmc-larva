#!/bin/bash

# Clean all copies of tokens
rm build/tokens/*
rm packages/larva/build/tokens/*

# Build tokens and CSS
npm run build --prefix packages/larva-tokens
npm run prod:scss

# Sync all build dirs
npm run sync-build