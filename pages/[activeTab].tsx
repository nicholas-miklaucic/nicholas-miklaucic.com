import { Container, Paper, ScrollArea, Tabs, TypographyStylesProvider, Text } from '@mantine/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import About from '../components/tabs/about';
import Projects from '../components/tabs/projects';
import Publications from '../components/tabs/publications';

export default function TabContent({ activeTab }: { activeTab: string }) {
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

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...ctx.params
        }
    }
}
