import { Title, Text, TypographyStylesProvider } from "@mantine/core";
import ReactMarkdown from 'react-markdown'

const markdown = `
I'm Nicholas, an undergraduate studying AI and NLP. Presently, I am a Data Science and Behavioral
Neuroscience major at Northeastern University, graduating in May 2023.

I enjoy teaching machines to learn, teaching people to learn, and researching how to better do both of those things. Some specific highlights:

- Multimodal learning: how can we combine language models with other forms of knowledge?
- Bayesian inference: how can we build deep probabilistic models of the world?
- Safety and ethics: how can we make sure AI benefits humanity, not just a lucky few?

If you want to learn more, check out my [projects](/projects) or [résumé](/resume.pdf).
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
