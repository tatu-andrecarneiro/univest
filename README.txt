criar repositorio

gcloud artifacts repositories create my-repo --location=northamerica-northeast1 --repository-format=docker

docker build 


gcloud auth configure-docker northamerica-northeast1-docker.pkg.dev

Targear nova realease 

docker build -t northamerica-northeast1-docker.pkg.dev/univest-461616/my-repo/univest:1.X .

docker push northamerica-northeast1-docker.pkg.dev/univest-461616/my-repo/univest:1.X 


