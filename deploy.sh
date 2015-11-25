set -e
GITURL=`git config remote.origin.url`
npm install
npm run start
cd build
rm -rf .git/
git init
git remote add origin $GITURL
git add .
git commit -am "deploy"
git push origin master:gh-pages --force

