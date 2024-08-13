
import { CodeGenerator } from "../common_llm/codeGenerator";
import { getGoogleApiKey } from "../config/apiKeys";
import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiCodeGenerator extends CodeGenerator {
    public modelName: string;
    private model: any;

    constructor(modelName = 'gemini-1.5-flash') {
        super('gemini');
        this.modelName = modelName;


        const genAI = new GoogleGenerativeAI(getGoogleApiKey());


        this.model = genAI.getGenerativeModel({ model: this.modelName });
    }

    public async getModelResponse(fullPrompt: string): Promise<{ text: string }> {
        try {
            const result = await this.model.generateContent(fullPrompt);
            const response = await result.response;
            const text = await response.text();
            return { text: text.trim() };
        } catch (error) {
            console.error('Error generating content with Gemini:', error);
            return { text: '' };
        }
    }
}