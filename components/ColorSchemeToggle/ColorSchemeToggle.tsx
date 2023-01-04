import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <ActionIcon
            onClick={() => toggleColorScheme()}
            size='lg'
            variant='filled'
            color='rhoPurple'
        >
            {colorScheme === 'dark' ? (
                <IconSun size={24} stroke={2} />
            ) : (
                <IconMoonStars size={24} stroke={2} />
            )}
        </ActionIcon>
    );
}
