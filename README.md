

# elasticsearch (mongoosastic) example 
Example of microservices full project with nodejs, elasticsearch (mongoosastic) with pagination by infinite scroll , react, nginx and docker

# How to run 
```
docker-compose -f docker-compose-<target>.yml  <Commands>
```
- development
```
docker-compose -p my_project_name -f docker-compose-dev.yml build
docker-compose -p my_project_name -f docker-compose-dev.yml up -d
```

- production
```
docker-compose -p my_project_name -f docker-compose-prod.yml build
docker-compose -p my_project_name -f docker-compose-prod.yml up -d
```

- stop:
```
docker-compose -f docker-compose-<target>.yml down
```


# run manually (the order it's important)
```
    run mongod service
    run elasticsearch service   
    run user-service
    run search-service
    run client
```



## check if elasticsearch service is on (when it's return the list of hosts): 
```
  curl -X GET "http://localhost:9200/_cat/nodes?v&pretty"
```

```
ip         heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
172.18.0.3           16          96  95    4.59    2.93     2.72 dilmrt    *      es02
172.18.0.4           15          97  96    4.59    2.93     2.72 dilmrt    -      es01

```


# delete index from elasticsearch:
```
  curl -XDELETE localhost:9200/$INDEXNAME
```
## example
```
  curl -XDELETE localhost:9200/users
```
# get index mapping:
```
curl -X GET "http://localhost:9200/users"   
```


# Referencing external resources:
https://github.com/mongoosastic/mongoosastic
https://github.com/mongoosastic/mongoosastic/blob/master/docs/README.md


https://medium.com/@siddharthac6/elasticsearch-node-js-b16ea8bec427
install elasticsearch https://gist.github.com/SiddharthaChowdhury/1cf508cf1a76706f0fb29bbc1ab7ca47

- mongoosastic pagination:
https://stackoverflow.com/questions/30228784/node-js-elasticsearch-mongoosastic-from-and-size-for-pagination

- 23 Useful Elasticsearch Example Queries
https://dzone.com/articles/23-useful-elasticsearch-example-queries

- docker replica sets:
https://hub.docker.com/r/bitnami/mongodb/
https://github.com/bitnami/bitnami-docker-mongodb#setting-up-a-replication


- run react with docker problem with react-script -^3.4.0
https://stackoverflow.com/questions/62901034/docker-compose-up-exit-with-code-0-for-react-js