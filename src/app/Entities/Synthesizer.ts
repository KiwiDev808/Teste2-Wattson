import * as TextToSpeechV1 from 'ibm-watson/text-to-speech/v1'
import { Response } from 'ibm-watson/text-to-speech/v1-generated'
import { credentials } from '../../config/textToSpeech'

const textToSpeech = new TextToSpeechV1.default(credentials)

export class Synthesizer {
  constructor(private textToSpeech: TextToSpeechV1) {}

  async synthesize(text: string): Promise<Buffer> {
    const synthesizeParams = {
      text: text,
      accept: 'audio/wav',
      voice: 'pt-BR_IsabelaV3Voice',
    }

    return this.textToSpeech
      .synthesize(synthesizeParams)
      .then((response: Response) => {
        return this.textToSpeech.repairWavHeaderStream(response.result)
      })
  }
}

export const textSynthesizer = new Synthesizer(textToSpeech)
