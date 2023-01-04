import { Title, Text, TypographyStylesProvider } from "@mantine/core";
import ReactMarkdown from 'react-markdown'

const markdown = `
I'm Nicholas, a prospective graduate student studying AI and NLP. Presently, I am a Data Science and Behavioral
Neuroscience major at Northeastern University graduating in May 2023.

**As you read this text, you're learning about me. My research goal is enabling machines
to do the same—to learn through natural language.**
More specifically, I currently work in [GRAIL](https://www.ccs.neu.edu/home/lsw/grail.html) under [Lawson Wong](https://www.ccs.neu.edu/home/lsw/) on applying NLP to reinforcement learning:
using natural language instructions to play *Montezuma's Revenge* better.

Many different threads within the larger project of intelligent, literate AI excite me. To name a few:

- Multimodal learning: how can we combine language models with other forms of knowledge?
- Psycholinguistics: how do humans learn their first language(s) so effectively?
- Bayesian inference: how can models properly quantify their own uncertainty and form useful prior beliefs?
- Safety and ethics: how can we make sure AI benefits humanity, not just a lucky few?

If you want to learn more, check out my [projects](/projects) or [résumé](/resume).
`

export default function About() {
    return (
        <TypographyStylesProvider>
            <Title order={1} align='center'>Hello!</Title>
            <Text size='lg'>
                <ReactMarkdown children={markdown} components={{
                    a: (props) => (
                        <a {...props} target='_blank' />
                    )
                }} />
            </Text>
        </TypographyStylesProvider >
    )
}
