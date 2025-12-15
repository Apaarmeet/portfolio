git pull 
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
npm install
npm run build
pm2 start npm --name "portfolio" -- start || pm2 restart portfolio