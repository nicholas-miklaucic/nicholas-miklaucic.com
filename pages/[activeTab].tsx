import { Container, Paper, ScrollArea, Tabs, TypographyStylesProvider, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import About from '../components/tabs/about';
import Projects from '../components/tabs/projects';
import Publications from '../components/tabs/publications';

export default function TabContent({ activeTab }) {
    console.log('Active tab is ', activeTab)
    return (
        <>
            {activeTab === "about" &&
                <About />}
            {activeTab === "projects" &&
                <Projects />}
            {activeTab === "resume" &&
                <TypographyStylesProvider>
                    <Text size='xl' align='center'>
                        My résumé can be found <a href='/resume.pdf' target='_blank'>here.</a>
                    </Text>
                </TypographyStylesProvider>}
            {activeTab === "publications" &&
                <Publications />}
        </>
    );
}

export async function getStaticPaths(ctx) {
    return {
        paths: ['about', 'projects', 'resume', 'publications'].map((x) => {
            return {
                params: {
                    activeTab: x
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    return {
        props: ctx.params
    }
}
