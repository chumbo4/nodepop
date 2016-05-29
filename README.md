# REST API NODEPOP

##Crear un usuario

POST http://localhost:3000/api/v1/usuarios

##Ver ususarios

GET http://localhost:3000/api/v1/usuarios

##Token de usuario autentificado

POST http://localhost:3000/api/v1/usuarios/authenticate

##Crear un anuncio

POST http://localhost:3000/api/v1/anuncios

##Ver anuncios (con filtros)

GET http://localhost:3000/api/v1/anuncios?venta=true&nombre=te&precio=10-1000&limit=2&sort=precio&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3NDVlNTU2Njk3NDkxZjAxNDdjZjEzMyIsImlhdCI6MTQ2NDIwNTA4MiwiZXhwIjoxNDY0Mzc3ODgyfQ.7UudLNIza3T9PR2S_HWnToJhShbNuyp_9q6MI7NsTmg

##DevOps part

### DNS

http://ec2-54-187-29-88.us-west-2.compute.amazonaws.com/

#### Example with dns

GET http://ec2-54-187-29-88.us-west-2.compute.amazonaws.com//api/v1/usuarios

### IP

http://54.187.29.88/

###Get static image (x-Owner chumbo4)

http://ec2-54-187-29-88.us-west-2.compute.amazonaws.com/images/bici.png
