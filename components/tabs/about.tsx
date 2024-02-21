import { Title, Text, TypographyStylesProvider } from "@mantine/core";
import ReactMarkdown from 'react-markdown'

const markdown = `
I'm Nicholas, a CS PhD student at the University of South Carolina. I have the great fortune to be advised by [Dr. Jianjun Hu](https://www.cse.sc.edu/~jianjunh/) and work in his [Machine Learning and Evolution Laboratory.](http://mleg.cse.sc.edu/)

Many paradigm shifts in technology have started from materials, from the Iron Age, to steel, to plastics, to semiconductors. The next generation of materials is out there, yet to be discovered, and AI has an important role to play in that discovery. Hopefully, I do too!

My work applies the latest advances in AI—diffusion models, transformers, state-space models, and more—towards problems in materials science. Crystals are a challenging domain with many idiosyncrasies, so making the models that work well for images and text work well for my problems involves a lot of creative math.

I do some programming and write up interesting technical ideas in my spare time. You can check out my [projects](/projects) to learn more about that, or get my [résumé](/resume.pdf).

If you're interested in collaboration, whether on my research or something else, feel free to reach out! My email or Discord is the best way of reaching me.
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
