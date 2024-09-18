# RAGGENIE docs

## Prerequesites

## How to setup and run
### Using RAGGENIE backend API
To run just the backend API you can run
### Using Docker
Both docker file and the docker compose files are present in the root folder. To run the model you can run
```
docker compose up
```

## Example


## Connectors/pluggins
Different components in your LLM app can be inseted using plugins.
### Data Sources
#### Structred Datasources
* Postgressql
* Airtable
* Bigquery
#### Unstrunctured Datasources
* PDFs
* Websites

### LLM Inferences
We currently support these LLM Inference endpoints.
* [OpenAI](https://openai.com/index/openai-api/)
* [Together.ai](https://www.together.ai/)
  
To add an LLM endpoint choose your 
![](././static/img/static\img\inferance end point.png)

## Configuring capablities
Capabilities can be defined to make your chatbot do custom actions such as fill a form or book a meeting. Currently actions can be defined to interact with your datasources.
### Add Capability Name and Description
### Add Capability Parameters

## Configuring agents
