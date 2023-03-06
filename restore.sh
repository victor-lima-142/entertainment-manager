cd ./web-platform
rm -rf ./node_modules
yarn
cd ..
cd ./api
rm -rf ./vendor
composer install
cd ..