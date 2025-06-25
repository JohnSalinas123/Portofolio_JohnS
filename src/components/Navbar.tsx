import { ActionIcon, Divider, Group, Paper,Text } from "@mantine/core";

import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconMailFilled } from '@tabler/icons-react';

import classes from './Navbar.module.css'
import { NavButton } from "./NavButton";
import { useLocation } from "react-router-dom";

export function Navbar() {

    const location = useLocation();
    const isProjects = location.pathname === "/projects";

    return (
        <div className={classes['nav-outer']}>
            <Paper withBorder className={`${classes.nav} ${isProjects ? classes['nav-outer-blur-bottom'] : ""}`}>
                <Group justify="space-between" w="100%">
                    <Group >
                        <NavButton name={"Projects"} to={"/projects"} />
                        <NavButton name={"Study"} to={"/study"} />
                        <NavButton name={"About"} to={"/about"} />
                    </Group>
                    <Group gap={12}>
                        <Group gap={8}>
                            <Text>John Salinas</Text>
                            <Text>&#183;</Text>
                            <Text>Software Developer</Text>
                        </Group>
                        
                        <Divider orientation="vertical"/>
                        <ActionIcon variant="subtle" aria-label="Settings" component="a" href="https://www.linkedin.com/in/johnsalinas123/" target="_blank"
										rel="noreferrer">
                            <IconBrandLinkedinFilled style={{ width: '70%', height: '70%' }} stroke={1.5} color="#8A9299"/>
                        </ActionIcon>
                        <Divider orientation="vertical"/>
                        <ActionIcon variant="subtle" aria-label="Settings" component="a" href="mailto: salinasjohn257@gmail.com" target="_blank"
										rel="noreferrer">
                            <IconMailFilled style={{ width: '70%', height: '70%' }} stroke={1.5} color="#8A9299"/>
                        </ActionIcon>
                        <Divider orientation="vertical"/>
                        <ActionIcon variant="subtle" aria-label="Settings" component="a" href="https://github.com/JohnSalinas123" target="_blank"
										rel="noreferrer">
                            <IconBrandGithubFilled style={{ width: '70%', height: '70%' }} stroke={1.5} color="#8A9299"/>
                        </ActionIcon>
                    </Group>
                </Group>
            </Paper>
        </div>
        
    )

}