#!/bin/bash 
cut -d ',' -f 3 sort | uniq -c |head -n 3| sort -nr
