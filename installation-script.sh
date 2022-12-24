#/bin/bash

git clone https://github.com/Mhm0ud/zid-pro

cd ./zid-pro/helm/zid

helm dependency update 

helm install my-app .