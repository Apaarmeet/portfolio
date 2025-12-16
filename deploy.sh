set -e

echo "🚀 Starting deployment"

cd ~/portfolio

echo "🔄 Resetting repo to GitHub state"
git fetch origin
git reset --hard origin/main

echo "📦 Loading Node via NVM"
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

echo "📦 Installing dependencies"
npm install

echo "🏗 Building app"
npm run build

echo "♻️ Restarting app with PM2"
pm2 describe portfolio >/dev/null \
  && pm2 restart portfolio \
  || pm2 start npm --name "portfolio" -- start

echo "✅ Deployment complete"