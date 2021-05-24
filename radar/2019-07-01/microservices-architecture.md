---
id:				microservices-architecture
title:      	"Microservices Architecture (MSA)"
ring:       	adopt
quadrant:  	 	architecture-methods-and-patterns
relatedTo:		[]
alternativeTo:	[monolithic-architecture]
skillsNeeded:	[]
supportsTvdBB:	[]
owners:         [Guido Schmutz]
knowHowPageURI:	""  
status:			draft
featured:       true
---

[Microservices Architecture (MSA)](https://martinfowler.com/articles/microservices.html) architecture style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.