# RAGGENIE docs

## Prerequesites

## How to run raggenie

### To run raggenie backend Server

#### Clone the project
```bash
git clone https://github.com/sirocco-ventures/raggenie
```

#### Install Requirements
```bash
pip install -r requirements.txt
```

#### To run server
```bash
python main.py --config ./config/config.yaml llm
```

### To run raggenie ui server


#### Go to the project ui directory

```bash
cd raggenie/ui
```

#### Install dependencies

```bash
npm install
```

#### Start the server

```bash
npm run dev
```

<!-- ### Using RAGGENIE backend API
To run just the backend API you can run -->
### Using Docker
Both docker file and the docker compose files are present in the root folder. To run the model you can run
```bash
docker compose up
```

## How to configure raggenie

### Configuration
#### Configuration details
You should provide a bot name, a short discription about the bot and a long discription about the bots usecase.
Note:- Long dicription will be used when making LLM calls and thus will affect the performance of the chatbot. It is recomended to give detailed description that can help the LLM to understand its usecases.

#### Inference endpoint
To add an LLM endpoint choose your LLM inference provider and specify a unique name to reference the particular model.
![LLM inference plugin image](../../static/img/inferance_end_point.png?raw=true)

Specify the model name, inference provider endpoint, and the API key.

#### Capabilities
Capabilities can be defined to make your chatbot do custom actions such as fill a form or book a meeting. Currently actions can be defined to interact with your datasources or to webhooks.
##### Add Capability Name and Description
Capability Name and discription is used by the intent extraction module to determine which capability is to be exicuted. So it is important to give a detailed discription of the capability.
![Capability initialisation image](../../static/img/Capbilities.png?raw=true)
##### Add Capability Parameters
You can specify the parameters nesessary to exicute an action. Raggenie uses LLM calls to see if all the specified parameters could be retreaved from the user input. In case if LLM could not detect all the nesessary parameters raggenie would ask the user to specify the missing parameters
![Capability parameters image](../../static/img/Create_parameter.png?raw=true)
these parameters can be used to trigger an action.

### Plugins
These are the datasources that are connected to raggenie. They are used to perform RAG operations and can also be interacted with using capabilities through actions. You can add, delete or edit your existing plugins here. Raggenie does not use the contents inside the plugins during LLM calls, Raggenie uses the schema and description of a plugin provided to produce queries that could be used to retreave nessesary data from the plugins. You need atleast one plugin connected to deploy raggenie.

#### Configuration
Plugin configuration is used to specify the metadata of different datasources such as datasource name, description and login details.
You need to specify informations such as:
* Plugin Name: Plugin name is used to differentiate between different connected plugins.
* Database Description: Description is should contain a breafe description about the use case of the database. The description is used during LLM calls, thus more detailed descriptions may help to improve the relevance of LLM output. The decription should be between 100 and 200 characters to make sure that it is detailed enough while also keeping the token count low.
* Database login details: These are specific for different plugins. Refer [Plugins](/docs/Connectors) for more details
after entering all the details use `connection test` button perform a health check. If the health check passes use `save & continue` to save the plugin.

#### Database schema
Raggenie automatically fetches your schema from the database on saving the configuration. Edit and add descriptions for different tables and their related columns. These decriptions are used during LLM calls and is nessesary for usable LLM responses. After adding descriptions `save & continue`.

#### Documentation
You can add documentation of the plugins. This can be used a add important details regarding the plugins, which helps to fully understand how a plugin functions and how to use it effectively. This can be used to include important conditions and criterias. This data would be split into chunks and retreaved along with the schema during RAG exicution, thus can help to get improved responses from the LLMs. Then `save & continue` to fully save the plugin.

### Samples
You can give example questions and their responses to improve the models accuracy. These are used for few shot prompting purposes. You can find all the example questions for your chatbot here. To give sample data for raggenie, fill in the following parameters.
* Question: This is the user query that the model is supposed to generate a response for.
* Connector: This is the plugin that contains the data, which is needed to get the correct LLM response.
* Query: This is the query that should be generated by the LLM to get the correct data.
* Metadata: This can be used to give additional data about the example. This is optional.
`Save` your changes for updating the sample respose.

### Deploy
`Restart Chatbot` to apply all the changes that have been made to the chat bot. This restarts the backend and connections with the updated configurations.

You can get the live preview URL from here to be shared with your end users.

### Preview
You can see the live preview of your chatbot to interact with and run tests. It comes with basic frondend features such as the chatbot, conversation tracking and chat history.

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


## LLM Inferences
We currently support these LLM Inference endpoints.
* [OpenAI](https://openai.com/index/openai-api/)
* [Together.ai](https://www.together.ai/)

## Configuring agents