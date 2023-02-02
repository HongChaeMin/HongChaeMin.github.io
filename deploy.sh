yarn build
yarn export
git add out/
git commit -m "deploy to gh-pages"
git subtree push --prefix out origin gh-pages

rm -rf ../HongChaeMin.github.io/
cp out/** ../HongChaeMin.github.to/**

