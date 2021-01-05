# proyecto2_grupo11_so1

# Comandos

### gRPC

- sudo docker build -t clientgrpc
- sudo docker run --net=host -it clientgrpc
- sudo docker buid -t grpcserver
- sudo docker run --net=host -it grpcserver

### NodeJS

- sudo docker build -t nodeapp .
- sudo docker run -it -d -p 3001:3001 --name=node-app node-app