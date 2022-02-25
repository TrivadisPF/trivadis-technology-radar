---
id:				apicurio-registry
title:      	"Apicurio Registry"
ring:       	assess
quadrant:   	languages-and-frameworks
relatedTo:		[]
alternativeTo:	[]
skillsNeeded:	[]
supportsTvdBB:	[]
owners:         [Guido Schmutz] 
knowHowPageURI:	"" 
status:			draft
featured:       true
---

[Apicurio Registry](https://www.apicur.io/registry) is a schema registry and an API registry, which stores and retrieves event schemas and API designs, and gives you control of their evolution. It can be used as a drop-in replacement of the Confluent Schema Registry. In contrast to the Confleunt Schema Registry, the Apicurio Registry supports with PostgreSQL an alternative storage solutions to Kafka. 

We have used in a project together with Azure Event Hub, where a Kafka topic for the schema storage is not possible, due to the missing Compacted Log topics.