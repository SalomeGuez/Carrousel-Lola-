#!/bin/bash 
sort -t -k 2 data.csv | uniq | head -n 5
