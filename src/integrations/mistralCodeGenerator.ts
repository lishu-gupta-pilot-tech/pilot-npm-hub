import { Mistral } from '@mistralai/mistralai';
import { CodeGenerator } from '../common_llm/codeGenerator';
import { setMistralApiKey , getMistralApiKey  } from "../config/apiKeys";

export class MistralCodeGenerator extends CodeGenerator {
    private client: Mistral;

    constructor(apiKey?: string) {
        super('Mistral');


        if (apiKey) {
            setMistralApiKey(apiKey);
        }


        const apiKeyFromEnv = getMistralApiKey();

        this.client = new Mistral({ apiKey: apiKeyFromEnv });
    }

    public async getModelResponse(fullPrompt: string): Promise<string> {
        const chatResponse = await this.client.chat.complete({
            model: "mistral-large-latest",
            messages: [{ role: 'user', content: fullPrompt }]
        });

        const content = chatResponse?.choices?.[0]?.message?.content;

        if (content) {
            return content;
        } else {
            throw new Error("No valid content received from Mistral.");
        }
    }
}
