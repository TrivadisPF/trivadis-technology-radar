#!/bin/bash
for f in ../radar/**/*.md;
do 
    echo $f; 
    cat $f | yaml-front-matter --pretty | jsonlint -V *-schema.json -q
done

