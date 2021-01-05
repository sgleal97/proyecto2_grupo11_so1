# proyecto2_grupo11_so1

# Comandos

### gRPC

- sudo docker build -t clientgrpc
- sudo docker run --net=host -it clientgrpc
- sudo docker buid -t grpcserver
- sudo docker run --net=host -it grpcserver

### NodeJS

- sudo docker build -t nodeapp .
- sudo docker run -p 3000:3000 -d nodeapp

### ReactJS

- sudo docker build -t react-app .
- sudo docker run -it -d -p 3000:3000 --name=react-app react-app

### Subir imagen docker

- sudo docker tag image usuario/image
- sudo docker push usuario/image