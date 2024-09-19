# RAGGENIE docs

## Prerequesites

## How to setup and run

### Run Locally

Clone the project

```bash
git clone https://github.com/sirocco-ventures/raggenie
```

### Installing backend Requirements

```bash

```

### Go to the project directory

```bash
cd raggenie/ui
```

### Install dependencies

```bash
  npm install
```

### Start the server

```bash
  npm run dev
```

### Using RAGGENIE backend API
To run just the backend API you can run
### Using Docker
Both docker file and the docker compose files are present in the root folder. To run the model you can run
```
docker compose up
```
### Configure 

## Example


## Connectors/pluggins
Different components in your LLM app can be inserted using plugins.
### Data Sources
Currently these are the datasource plugins that are available in raggenie.
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

To add an LLM endpoint choose your LLM inference provider and specify a unique name to reference the particular model.
![LLM inference plugin image](../../static/img/inferance_end_point.png?raw=true)

Specify the model name, inference provider endpoint, and the API key.

## Configuring capablities
Capabilities can be defined to make your chatbot do custom actions such as fill a form or book a meeting. Currently actions can be defined to interact with your datasources or to webhooks.
### Add Capability Name and Description
Capability Name and discription is used by the intent extraction module to determine which capability is to be exicuted. So it is important to give a detailed discription of the capability.
![Capability initialisation image](../../static/img/Capbilities.png?raw=true)
### Add Capability Parameters
You can specify the parameters nesessary to exicute an action for
![Capability parameters image](../../static/img/Create_parameter.png?raw=true)

## Configuring agents