echo "arg:" $@
source $HOME/.bash_profile
export $DEPLOY_DIR=$HOME/dep/static/

function mes(){
    echo $1,$2
    curl -X POST --data-urlencode \
    "payload={\"channel\": $1, \"username\": \"webhookbot\", \"text\": \"$2\", \"icon_emoji\": \":sunglasses:\"}" $WEBHOOK_URL
}

hexo --version
npm --version
node --version

# hexo
cd $DEPLOY_DIR
npm install --save hexo-cli
hexo generate --force --bail
\cp -rf ./public/* /var/www/public/
\cp -rf ./public/* /var/www/public/$1
echo "{'test':'test'}" > /var/www/public/data/test.json

mes \"#bot\" "development"
mes \"#bot\" "$(find /var/www/public -maxdepth 1 -type d iprintf '%f\n')"
mes \"#bot\" "http://$(curl ifconfig.io)/$1\n \`ssh $(whoami)@$(curl ifconfig.io)\`"
mes \"#server_log\" "\`\`\`$(cd /var/www/public/$1 ;find .|sort)\`\`\`"
