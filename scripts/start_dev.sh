#!/bin/bash

cd "$(dirname "$0")/.." || exit

docker-compose stop

docker-compose -f docker-compose.yml build db && docker-compose -f docker-compose.yml up db