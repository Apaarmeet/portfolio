git fetch origin
git reset --hard origin/main
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
npm install
npm run build
pm2 start npm