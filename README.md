## Desafio consultora web

El desafio consiste en crear una web que permita agendar horas medicas , rellenando un formulario con :

- Nombre completo ( Nombres y ambos apellidos)
- Rut (El cual tiene que ser validado en formato )
- Edad ( Debe ser mayor o igual a 0)
- Sexo (Masculino , Femenino o no se quiere especificar)
- Nombre del medico
- Fecha de la hora (Dia , mes , año y hora de la citacion a agendar)
- Correo ( el cual debe ser validado en formato , y en caso de exito en la reserva mandar un correo de confirmacion)

Para la resolución del desafio , es que se ocupo Visual studio code para la edicion de codigo,  El framework de Laravel  , react para el diseño , postresql para la persistencia de los datos , 

## Instalacion
Se utilizo la guia ubicada en la documentacion oficial de Laravel:
- **[Documentacion de instalacion de Laravel Via composer](https://laravel.com/docs/8.x#installation-via-composer)**

Para instalar laravel se siguio la documentacion descrita y además utilizaron los siguientes programas
- XAMPP , para levantar un servidor y crear un directorio especial de las aplicaciones php
- Composer , programa que gestiona los archivos Php y permite la instalacion de Laravel

Al momento de instalar XAMPP , se recuerda la ruta y se agrega el programa al path de windows (para luego poder levantar un servidor local).

Una vez instalado XAMPP y Composer se procede a instalar laravel con el siguiente comando : composer global require laravel/installer

## Solucion Realizada
