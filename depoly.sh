#!/bin/bash

cd /home/ubuntu/app/blog && git pull
pnpm install && pnpm docs:build
rm -r ./public
mv ./docs/.vitepress/dist ./public
