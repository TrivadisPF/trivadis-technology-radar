---
id:				materialize
title:      	"Materialize"
ring:       	watch
quadrant:   	platforms-and-services
relatedTo:		[]
alternativeTo:	[ksqldb]
skillsNeeded:	[]
supportsTvdBB:	[]
owners:         [Guido Schmutz]
knowHowPageURI:	""   
status:			draft
featured:        true
---

[Matererialize](https://materialize.com/) is a source-available streaming database written in Rust that maintains the results of a SQL query (a materialized view) in memory as the data changes. Whereas a traditional database does the evaluation when a SELECT statement is issued, Materialize asks for queries up-front and incrementally computes results as new data arrives.