import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Group,
    Tabs,
    Title,
    Container,
    Flex,
    Image,
    Stack,
    Badge
} from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import router from 'next/router';
import { IconBrandDiscord, IconMail } from '@tabler/icons';

export default function Layout({ children }: { children: any }) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <MediaQuery smallerThan="sm" styles={{ main: { marginTop: '40vh' } }}>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                        zIndex: 1,
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} >
                        <Tabs
                            value={children.props.activeTab}
                            onTabChange={(value) => router.push(`/${value}`)}
                            variant='pills'
                            orientation='vertical'
                            inverted={true}
                            loop={true}
                            styles={{
                                tabsList: {
                                    width: '100%'
                                },
                                tab: {
                                    padding: theme.spacing.md,
                                    fontSize: theme.fontSizes.md
                                }
                            }}
                        >
                            <Tabs.List>
                                <Tabs.Tab value="about">About</Tabs.Tab>
                                <Tabs.Tab value="projects">Projects</Tabs.Tab>
                                <Tabs.Tab value="resume">Résumé</Tabs.Tab>
                                <Tabs.Tab value="publications">Publications</Tabs.Tab>
                            </Tabs.List>
                        </Tabs>
                    </Navbar>
                }
                aside={
                    <MediaQuery smallerThan="sm" styles={{ height: '40vh', position: 'fixed', top: '50px', zIndex: 0 }} >
                        <Aside p="md" hidden={false} width={{ base: '100%', sm: 300, md: 350 }} fixed={true} styles={{ position: 'relative', zIndex: 0 }}>
                            <Flex align='center' direction={{ base: 'row', sm: 'column' }} justify='space-around'>
                                <div style={{ width: 'min(100%, 10rem)' }}>
                                    <Image src='/Miklaucic_Nicholas.png' alt="Nicholas Miklaucic headshot" fit="contain" radius='xl'
                                        caption={`/ˈnɪkəlɪs/ /məˈklɔsɪk/`} />
                                </div>
                                <Stack style={{ width: 'min(100%, 400px)' }} px={20}>
                                    <Flex align='center' justify='space-between'>
                                        <a href="mailto:nicholas.miklaucic@gmail.com">nicholas.miklaucic@gmail.com</a>
                                        <IconMail size={24} stroke={1.5} />
                                    </Flex>
                                    <Flex align='center' justify='space-between'>
                                        <p>PollardsRho#7513</p>
                                        <IconBrandDiscord size={24} stroke={1.5} />
                                    </Flex>
                                </Stack>
                            </Flex>
                        </Aside>
                    </MediaQuery>
                }
                header={
                    <Header height={{ base: 50, md: 70 }} p="md" >
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <Group position="apart" sx={{ width: '100%', overflow: 'hidden' }} noWrap>
                                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                    <Burger
                                        opened={opened}
                                        onClick={() => setOpened((o) => !o)}
                                        size="sm"
                                        color={theme.colors.gray[6]}
                                    />
                                </MediaQuery>
                                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                                    <div></div>
                                </MediaQuery>
                                <Text size={32} color='rhoPurple' style={{ textOverflow: '', whiteSpace: 'nowrap' }} >Nicholas Miklaucic</Text>
                                <ColorSchemeToggle />
                            </Group>
                        </div>
                    </Header >
                }
            >
                <Container styles={{ zIndex: 1, position: 'relative' }}>
                    {children}
                </Container>
            </AppShell >
        </MediaQuery >
    );
}
