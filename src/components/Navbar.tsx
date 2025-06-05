import { ActionIcon, Divider, Group, Paper,Text } from "@mantine/core";

import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconMailFilled, IconSunFilled } from '@tabler/icons-react';

import classes from './Navbar.module.css'
import { NavButton } from "./NavButton";

export function Navbar() {

    return (
        <div className={classes['nav-outer']}>
            <Paper withBorder className={classes.nav}>
                <Group justify="space-between" w="100%">
                    <Group >
                        <NavButton name={"Projects"} to={"/projects"} />
                        <NavButton name={"study"} to={"/study"} />
                        <NavButton name={"about"} to={"/about"} />
                        <NavButton name={"hobby"} to={"/hobby"} />
                    </Group>
                    <Group gap={12}>
                        <Text>John Salinas</Text>
                        <Divider orientation="vertical"/>
                        <ActionIcon variant="subtle" aria-label="Settings">
                            <IconBrandLinkedinFilled style={{ width: '70%', height: '70%' }} stroke={1.5} color="#8A9299"/>
                        </ActionIcon>
                        <Divider orientation="vertical"/>
                        <ActionIcon variant="subtle" aria-label="Settings">
                            <IconMailFilled style={{ width: '70%', height: '70%' }} stroke={1.5} color="#8A9299"/>
                        </ActionIcon>
                        <Divider orientation="vertical"/>
                        <ActionIcon variant="subtle" aria-label="Settings">
                            <IconBrandGithubFilled style={{ width: '70%', height: '70%' }} stroke={1.5} color="#8A9299"/>
                        </ActionIcon>
                    </Group>
                </Group>
            </Paper>
        </div>
        
    )

}