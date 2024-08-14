# PilotHub
Pilot Aggregator is a Python package designed to streamline the aggregation of data from multiple sources. Built with efficiency and flexibility in mind, this package allows developers to easily collect, process, and manage data in a unified manner.

## Features

- **Unified API Configuration:** Easily configure API keys for different LLMs.
- **LLM Integration:** Seamlessly switch between different LLMs (e.g., OpenAI, Gemini, Mistral) for text and code generation.
- **Code Generation:** Generate Python code based on prompts using the specified LLM.
- **Text Generation:** Generate detailed text responses based on prompts using the specified LLM.
- **Extensible Design:** Easily add support for more LLMs in the future.


## Installation

You can install the package using npm:

```bash
npm i pilot-fusion
```
## Getting Started

### 1. Configure API Keys

Before using the LLMs, you need to set the API keys. The package provides utility functions in `config.py` to set and retrieve these keys.

**Example:**

```python
import * as LLMintegrator from 'pilot-fusion';

# Set the OpenAI API key
LLMintegrator.set_openai_api_key('your-openai-api-key')

# Set the Google API key for Gemini
LLMintegrator.set_google_api_key('your-google-api-key')

# Set the Mistral API key
LLMintegrator.set_mistral_api_key('your-mistral-api-key')
```

### 2. Using LLMs for Code Generation

You can generate code using different LLMs by creating an instance of the corresponding generator class.

```python
import * as LLMintegrator from 'pilot-fusion';

# Initialize the Gemini code generator
const geminiCodeGen = new LLMintegrator.GeminiCodeGenerator();

# Generate code based on a prompt
async function generateCode() {
    const prompt = 'create a python code for adding two numbers.';
    
    try {
        const generatedText = await geminiCodeGen.generateCode(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}
```

### 3. Using LLMs for Text Generation


Similar to code generation, you can also generate text responses using different LLMs.

Example:

```python
# Generate a text response based on a prompt
async function generateText() {
    const prompt = 'who is president of india.';
    
    try {
        const generatedText = await geminiCodeGen.generateText(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}
```

### 4. Using LLMs for Diagram Code Generation


Similar to code and text generation, you can also generate Diagram code responses using different LLMs.

Example:

```python
# Generate a text response based on a prompt
async function generateDiagram() {
    const prompt = 'create a diagram for banking system.';
    
    try {
        const generatedText = await geminiCodeGen.generateDiagram(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}
```


# Code Generators Using Different AI Models

### 1. Gemini Code Generator

This generator uses Google's Gemini model.

```python
import * as LLMintegrator from 'pilot-fusion';

const geminiCodeGen = new LLMintegrator.GeminiCodeGenerator('model-name');
async function generateDiagram() {
    const prompt = 'create a diagram for banking system.';
    
    try {
        const generatedText = await geminiCodeGen.generateDiagram(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}
print(code)
```
### 2. OpenAI Code Generator

This generator uses OpenAI's models like GPT-3.5-turbo.

```python
import * as LLMintegrator from 'pilot-fusion';

const geminiCodeGen = new LLMintegrator.OpenaiCodeGenerator('model-name');
async function generateDiagram() {
    const prompt = 'create a diagram for banking system.';
    
    try {
        const generatedText = await geminiCodeGen.generateDiagram(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}

```

### 3. Mistral Code Generator

This generator uses the Mistral model.


```python
import * as LLMintegrator from 'pilot-fusion';

const geminiCodeGen = new LLMintegrator.MistralCodeGenerator('model-name');
async function generateDiagram() {
    const prompt = 'create a diagram for banking system.';
    
    try {
        const generatedText = await geminiCodeGen.generateDiagram(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}


```
### 4. Claude Code Generator

This generator uses Anthropic's Claude model.


```python
import * as LLMintegrator from 'pilot-fusion';

const geminiCodeGen = new LLMintegrator.ClaudeCodeGenerator('model-name');
async function generateDiagram() {
    const prompt = 'create a diagram for banking system.';
    
    try {
        const generatedText = await geminiCodeGen.generateDiagram(prompt);
        console.log('Generated Text:\n', generatedText);
    } catch (error) {
        console.error('Error generating text:', error);
    }
}


```

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions, feel free to open an issue or contact the repository maintainers.
