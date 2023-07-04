#!/bin/bash 
grep "Ingénieur" /home/user/documents/data.csv | shuf | head -n 10
