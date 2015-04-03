#!/bin/bash

git checkout gh-pages
gulp
git add .
git commit -m 'chore(icon): deploying'
git push
git checkout master
