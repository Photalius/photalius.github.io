#!/usr/bin/env bash

# delete unused dirs
rm -rf "dist/assets"
rm -rf "dist/images"
rm -rf "dist/fonts"
rm "dist/style.css"
rm -rf "dist/types/src/common"

cp dist-umd/photalius.umd.js dist
cp dist-umd/photalius.umd.js.map dist
rm -rf dist-umd

# TODO: fix issue with "createRoot" being imported from "react-dom" and not "react-dom/client" in vite library mode.
#sed -i '' 's/import cm, { createPortal as kh } from "react-dom";/import { createPortal as kh } from "react-dom";\nimport cm from "react-dom\/client";/' "dist/photalius.es.js"

PHOTALIUS_PATH="./../landing/local_modules/photalius";

# empty previous
rm -rf "$PHOTALIUS_PATH"
mkdir "$PHOTALIUS_PATH"

# copy over editor lib to landing
cp -r dist "$PHOTALIUS_PATH/dist"
cp package.json "$PHOTALIUS_PATH"

# move assets to public dir
cp -r "assets/." "./../landing/public/photalius"

