## PoC - Access Technology Radar over SQL

```
docker exec -ti hive-metastore hive
```

```
create database tech_db;
use tech_db;

CREATE EXTERNAL TABLE technology_t (id string
									, title string
									, info string
									, quadrant string
									, ring string
									, relatedTo ARRAY<string>
									, alternativeTo ARRAY<string>
									, skillsNeeded ARRAY<string>
									, supportsTvdBB ARRAY<string>
									, status string
									, featured boolean
									, owners ARRAY<string>
									, `__content` string
									)
ROW FORMAT SERDE 'org.apache.hive.hcatalog.data.JsonSerDe'
LOCATION 's3a://radar-bucket/tech/';
```

```
docker exec -it trino-cli trino --server trino-1:8080
```

```
use minio.tech_db;
show tables;

SELECT * FROM technology_t;
```


