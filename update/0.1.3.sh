#!/bin/bash
printf "Run Update v0.0.1 ...\n"
file="0.0.1.log"
if [ -f "$file" ]
then
	printf "\033[0;33m0.0.1 Updated\033[0m\n"
else
	cd ..
	npm install gulp 
	cd update
	(
	   printf 'gulp\n'
	) > 0.0.1.log
	printf "-----------------------------"
    printf "\033[1;32mCongrats!\033[0m\n"
    printf "\033[1;32mv0.0.1 Update Finished\033[0m\n"
fi