import { Card, Flex, Title, Image, Text } from '@mantine/core'
export default function Projects() {
    return (
        <>
            <Title order={1} align='center'>Projects</Title>
            <Flex wrap='wrap' rowGap='md' columnGap='md' justify='space-around' align='center'>
                <Card radius='lg' href='https://github.com/constellate-org/constellate' component='a' target='_blank' sx={{ maxWidth: '400px' }} withBorder shadow='md'>
                    <Card.Section>
                        <Image src='https://constellate.dev/constellate-dark.png' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'dark' ? 'block' : 'none'
                            }
                        }} />
                        <Image src='https://constellate.dev/constellate-light.png' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'light' ? 'block' : 'none'
                            }
                        }} />
                    </Card.Section>
                    <Text size='xl' fw={600} py={5} align='center'>Constellate</Text>
                    <Text size='md'>
                        Constellate is
                        a tool that publishes Jupyter notebooks as interactive web applications. It
                        supports a wide variety of Python data visualization libraries, and it takes
                        care of all of the web development work so you don't have to!
                    </Text>
                </Card>
                <Card radius='lg' sx={{ maxWidth: '400px' }} withBorder shadow='md'>
                    <Card.Section>
                        <Image src='/rho_dark.png' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'dark' ? 'block' : 'none'
                            }
                        }} />
                        <Image src='/rho_light.png' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'light' ? 'block' : 'none'
                            }
                        }} />
                    </Card.Section>
                    <Text size='xl' fw={600} py={5} align='center'>Pollard's Rho</Text>
                    <Text size='md'>
                        <a href='rho.vercel.app'>Pollard's Rho</a> is a blog of sorts using Constellate.
                        I write about a variety of topics: you might be interested in
                        <a href="https://rho.vercel.app/gender-in-ai-language-models-what-s-in-a-name/0"> an exploration of names and gender using language models</a> or
                        <a href="https://rho.vercel.app/computing-fibonacci-numbers/0"> my misadventures trying to efficiently compute Fibonacci numbers.</a>
                    </Text>
                </Card>
                <Card radius='lg' href='https://github.com/nicholas-miklaucic/aispell_app' component='a' target='_blank' sx={{ maxWidth: '400px' }} withBorder shadow='md'>
                    <Card.Section>
                        <Image src='https://raw.githubusercontent.com/nicholas-miklaucic/aispell-app/main/demo_dark.gif' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'dark' ? 'block' : 'none'
                            }
                        }} />
                        <Image src='https://raw.githubusercontent.com/nicholas-miklaucic/aispell-app/main/demo.gif' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'light' ? 'block' : 'none'
                            }
                        }} />
                    </Card.Section>
                    <Text size='xl' fw={600} py={5} align='center'>AISpell</Text>
                    <Text size='md'>
                        AISpell uses both a language model and a model of how people type to intelligently correct spelling.
                        It can correct errors in real time, on consumer hardware, by fusing the power of deep learning and classical statistics.
                    </Text>
                </Card>
                <Card radius='lg' href='https://github.com/nicholas-miklaucic/rho_plus' component='a' target='_blank' sx={{ maxWidth: '400px' }} withBorder shadow='md'>
                    <Card.Section>
                        <Image src='/rhoplus_dark.png' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'dark' ? 'block' : 'none'
                            }
                        }} />
                        <Image src='/rhoplus_light.png' sx={(theme) => {
                            return {
                                display: theme.colorScheme === 'light' ? 'block' : 'none'
                            }
                        }} />
                    </Card.Section>
                    <Text size='xl' fw={600} py={5} align='center'>Rho+</Text>
                    <Text size='md'>
                        Rho+ provides two useful things:
                        <ul>
                            <li>A theme with harmonious light and dark versions, defined for all of the major Python dataviz libraries.</li>
                            <li>A set of useful addons to matplotlib that make it easier to produce beautiful graphs quickly</li>
                        </ul>
                    </Text>
                </Card>
                <Card radius='lg' href='https://github.com/nicholas-miklaucic/serene-nano' component='a' target='_blank' sx={{ maxWidth: '400px' }} withBorder shadow='md'>
                    <Card.Section>
                        <Image src='https://static.wikia.nocookie.net/nichijou/images/1/14/Nanorollcake.png' caption='Nano, the fictional namesake of the bot' height={320} />
                    </Card.Section>
                    <Text size='xl' fw={600} py={5} align='center'>Nano</Text>
                    <Text size='md'>
                        I moderate a homework help Discord server with over 1,700 members. Nano is a bot I wrote to make life on there easier. Some features:

                        <ul>
                            <li>Automatic recognition and translation of non-English</li>
                            <li>A reputation system to encourage participation</li>
                            <li>Easy access to Merriam Webster, Wikipedia, and the weather without leaving the chat</li>
                        </ul>
                    </Text>
                </Card>
            </Flex>
        </>
    )
}
