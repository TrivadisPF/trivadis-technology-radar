#!/bin/bash
cd ..
for f in radar/**/*.md;
do 
    echo $(dirname "$1/${f}"); 
    mkdir -p $(dirname "$1/${f}")
    cat $f | yaml-front-matter --pretty > $1/$f.json
done

