import { Title, Text, TypographyStylesProvider } from "@mantine/core";
import ReactMarkdown from 'react-markdown'

const markdown = `
I'm Nicholas, a first-year PhD student at the University of South Carolina. I study methods of applying current deep learning models
to problems in materials science. I obtained my bachelor's in Data Science & Behavioral Neuroscience at Northeastern University.

In my spare time, I pursue a wide variety of coding- and AI-related endeavors. Check out my [projects](/projects) or [résumé](/resume.pdf) 
to learn more!
`

export default function About() {
    return (
        <TypographyStylesProvider>
            <Title order={1} align='center'>Hello!</Title>
            <Text size='xl'>
                <ReactMarkdown children={markdown} components={{
                    a: (props) => (
                        <a {...props} target='_blank' />
                    )
                }} />
            </Text>
        </TypographyStylesProvider >
    )
}
