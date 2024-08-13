
import { CodeGenerator } from '../common_llm/codeGenerator';
import OpenAI from 'openai';
import { setOpenAIApiKey , getOpenAIApiKey  } from "../config/apiKeys";

export class OpenaiCodeGenerator extends CodeGenerator {
    private openai: OpenAI;

    constructor(modelName: string, apiKey?: string) {
        super(modelName);
        

        if (apiKey) {
            setOpenAIApiKey(apiKey);
        }

        const apiKeyToUse = getOpenAIApiKey();
        
        this.openai = new OpenAI({
            apiKey: apiKeyToUse,
        });
    }

    async getModelResponse(fullPrompt: string): Promise<any> {
        try {
            const response = await this.openai.chat.completions.create({
                messages: [{ role: 'user', content: fullPrompt }],
                model: this.modelName,
            });
            return response.choices[0].message?.content?.trim() || '';
        } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
            throw error;
        }
    }


}
