yarn build
yarn export
git add out/
git commit -m "deploy to gh-pages"
git subtree push --prefix out origin gh-pages
git checkout gh-pages

cd ..
rm -rf HongChaeMin.github.io/**
cp -rf blog-front/** HongChaeMin.github.io
cd HongChaeMin.github.io
git pull
git add --all
git commit -m "deploy"
git push
git checkout feat/resume
