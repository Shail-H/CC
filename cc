#!/bin/bash

node config.js $1 80 $2 &
node config.js $1 80 $2 &
node config.js $1 80 $2 &
echo -e "\033[35m 网址：$1 提交成功 时间：$2 秒 \033[0m"