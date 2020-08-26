#!/bin/bash
FILE='ex1.sh'
if [ -e $FILE ]
then
    echo  "O caminho $FILE está habilitado!"
    if [ -w $FILE ]
    then 
        echo "Você tem permissão para editar $FILE"
    else
        echo "Você não foi autorizado a editar $FILE"
    fi
fi
