import { Title, Text, TypographyStylesProvider } from "@mantine/core";
import ReactMarkdown from 'react-markdown'

const markdown = `
Swire-Thompson, B., **Miklaucic, N.**, Wihbey, J. P., Lazer, D., & DeGutis, J. (2022). The backfire effect after correcting misinformation is strongly associated with reliability.
*Journal of experimental psychology. General*, 151(7), 1655–1665. [https://doi.org/10.1037/xge0001131](https://doi.org/10.1037/xge0001131)
`

export default function Publications() {
    return (
        <TypographyStylesProvider>
            <Title order={1} align='center'>Publications</Title>
            <Text size='lg'>
                <ReactMarkdown children={markdown} components={{
                    a: (props) => (
                        <a {...props} target='_blank' />
                    ),
                    strong: (props) => (
                        <Text {...props} size='lg' fw='bold' color='rhoPurple' span />
                    )
                }}>
                </ReactMarkdown>
            </Text>
        </TypographyStylesProvider >
    )
}
