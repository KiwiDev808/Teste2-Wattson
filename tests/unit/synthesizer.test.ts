import { textSynthesizer } from '../../src/app/Entities/Synthesizer'

describe('Synthesizer', () => {
  it('should output a buffer', async () => {
    const synthesizerOutput = await textSynthesizer.synthesize('Olá Mundo')
    expect(synthesizerOutput).toBeInstanceOf(Buffer)
  })
})
