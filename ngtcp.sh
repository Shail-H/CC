#!/bin/bash
for n in $(seq $1); do
node ngtcp.js http://$2:$3 ngp.txt $4 POST &
done
