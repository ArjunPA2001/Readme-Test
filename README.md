<p align="center">
  <a href="https://www.raggenie.com/">
    <img src="https://cdn.prod.website-files.com/664e485574efd184749b7301/6658314c55210573e334ac1b_Group%2042.png" width="150" alt="RAGGENIE Logo">
  </a>
</p>

<h1 align="center">
RAGGENIE
</h1>

// github dynamic stats

## What is RAGGENIE
RAGGENIE is a low-code RAG builder designed to make it easy to build your own conversational AI applications. With RAGGENIE, you can connect to multiple data sources and create a conversational AI on top of that, along with integrating it with pre-built agents for actions.

The project is in its early stages, and we are working on adding more capabilities soon.

• Open-source tool: Since there is some community interest in this project and we can't build all the plugins ourselves, we decided to release it under the MIT license, giving the community full freedom.

• Current focus: We are currently focused on making it easy to build RAG. In the future, we will explore how to help take these applications from pilots to production.

## 📐 Architecture

![picture of Architecture flow]()

### 🔮 Supported LLM Inferences
Raggenie supports inference APIs to different LLM providers to run your model. The are the inference APIs currently supported by us:
* [OpenAI](https://openai.com/index/openai-api/)
* [Gemini](https://ai.google.dev/gemini-api)
* [Claude](https://www.anthropic.com/api)
* [Together.ai](https://www.together.ai/)

### 🗃️ Data Sources
These connectors will help you connect your data to RAG. It can handle structured or unstructured data, enabling the RAG to answer questions from these sources.
* Structured Datasources(airtable):<br />
You can use raggenie to connect to your data sources to analyse it or to intergrate it to your application. Raggenie generates queries to execute on your data sources and provides the results. Current integrations are:
    * [MySQL](https://www.mysql.com/)
    * [PostgreSQL](https://www.postgresql.org/)
    * [GraphQL](https://graphql.org/)
    * [Splunk](https://www.splunk.com/)
    * [Bigquery](https://cloud.google.com/bigquery)

* Document based sources(default):<br />
These sources allows you to load documents such as text documents or Word documents to create an AI chat application that can interact with this data. Current integrations are:
    * [Google Drive](https://www.google.com/intl/en_in/drive/)
    * [SharePoint](https://www.microsoft.com/en-in/microsoft-365/sharepoint/collaboration)
    * [Dropbox](https://www.dropbox.com/)

### 💡Capabilities
you can have more functionalities from RAGGENIE than just as a chatbot by defining its capabilities. They can be used to do tasks such as booking a meeting, checking a calendar, or completing a form from the chat.

Capabilities of the chatbot are defined by the user at the time of configuration. You can setup parameters required for each capability.
* RAGGENIE can make sure that all the parameters are obtained for executing the capability.
* RAGGENIE uses intent extraction to decide which of its defined capabilities should be used.
* Capabilities can be used to trigger different actions.

### 🤖 Agents/Actions
RAGGENIE can do actions to accomplish tasks with user queries. These can be setup along with capabilities to make RAGGENIE more than just a coversation bot. Currently supported actions are.
* Fetch data from a database
* Insert data into database

### 🖼️ UI Plugin*
This component will help you embed the chat widget into your UI with JavaScript.

## 🛠️ Getting Started
You can use RAGGENIE to create your own conversational chat feature for your application either by integrating it as a chatbot or by embedding it into your application. You can also use it to create different chatbots for different internal teams by tuning each chatbot for different tasks and using different knowledge base for different usecases.

### ☁️ Usage of RAGGENIE
![demo video]()

### 📄 Documentation
Comprehensive documentation is available to help you get the most out of RagGenie. The full documentation for RAGGENIE can be found [here]()

### 📦 Installation and running
#### Setting up virtual environment

* Create a venv
```bash
python3 -m venv venv
```

* Activating Venv
```bash
source venv/bin/activate  
```

#### Installing dependencies

* Installation: To install the required dependencies, run:
```bash
pip install -r requirements.txt
```

#### Running RAGGENIE

* Init API mode
To run raggenie specify the config file to use
```bash
python main.py --config ./config/config.yaml llm
```

* Start chainlit server
You can use the provided chainlit server to connect to raggenie
```bash
chainlit run ./ui/chainlit_ui.py
```

## 🚧 Feature Pipeline
These are the planned features and improvements that are in the pipeline for future releases.
* REST API Requests for actions
* Web hooks for actions

## 🔒 Privacy and security
RAGGENIE takes schema and documentation from your datasources and uses them to make SQL queries by calling the provided LLM inference endpoint, in case you want to Query the datasources. These are the only data send to the LLM.
RAGGENIE does not send private data from your datasource outside the application.

## 📜 License
RagGenie is licensed under the [MIT License](https://opensource.org/license/mit), which is a permissive open-source license that allows you to freely use, modify, and distribute the software with very few restrictions.

## 🤝 Contributing
Contributions are welcome! Please check the outstanding issues and feel free to open a pull request. For more information, please check out the [contribution guidelines]().
