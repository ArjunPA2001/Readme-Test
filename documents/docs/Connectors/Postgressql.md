---
sidebar_position: 1
---

# Postgressql Plugin

You can connect to an instance of postgress using the postgressql plugin.

### Plugin name
The name of the plugin is used to differentiare between different connected plugins. These would be used for LLM calls during intent extraction.

### Plugin Description
A brief description of data in the plugin. This is used during LLM calls and may affect the quality of LLM response thus make sure that it is descriptive enough for good LLM output while being short enough to reduce LLM cost.

### Database sslmode

### Database name
Name of the postgressql database that is used to establish connection.

### Database host
The host url of postgressql database, this defaults to `localhost`.

### Database port
The port address of postgressql database, this defaults to `5432`

### Password
The password of the postgressql database.

### User name
Username of postgressql database.