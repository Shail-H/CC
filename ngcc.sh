#!/bin/bash
echo '目标:'$2' 时间:'$3' 并发:'$1' 模式:CC'
#echo '目标:'$2' 时间:'$3' 并发:'$1'' >> ~/ngp.txt
for n in $(seq $1); do
node ngcc.js $2 ngp.txt $3 POST &
done
