import { Configuration, OpenAIApi } from 'openai';

export async function callApi(input: string, apiKey: string): Promise<string> {
  const configuration = new Configuration({ apiKey: apiKey });
  const api = new OpenAIApi(configuration);

  const prompt = `Please output a Dart code that implements the following sentences. The code must be include \`main\` function. The output must not be include any description and code-block notation.\n\n${input}\n`;

  try {
    const result = await api.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 2048,
    });

    const text = result.data.choices[0].text;
    return text ?? '';
  } catch (error) {
    console.error(error);
    return '';
  }
}
