import { Group, Paper, Stack, Image, Text } from "@mantine/core";
import GitHubCalendar from 'react-github-calendar'

import classes from './AboutPage.module.css'


export function AboutPage() {

    return (
        <>
            <Stack align="center">
            <Group align="flex-start" className={classes['outer']}>
                <div className={classes.left}>
                    <Paper withBorder pl={20} pr={20} pb={20}>
                        <Stack className="">
                            <Group m={20} justify="center" h={100}>
                                <div className={classes["profile-pic"]}>
                                    <Image radius="9999px" src="other_images/profile_picture.png" />
                                </div>
                            </Group>
                            <Text>John Salinas</Text>
                            <Text>Software Developer</Text>

                        </Stack>
                    </Paper>
                </div>
                <div className={classes.right}>
                    <Stack>
                       
                    </Stack>
                </div>
            </Group>
            <Paper withBorder className={classes.github}>
                    <GitHubCalendar username="grubersjoe" />
                    <Text c="#8A9299">Only shows public contributions</Text>
                    <img src="https://github-readme-stats.vercel.app/api?username=JohnSalinas123&show_icons=true&theme=default" alt="GitHub Stats" />
                    <img src="https://streak-stats.demolab.com/?user=JohnSalinas123&theme=default" alt="GitHub Streak" />
                </Paper>
            </Stack>
        </>
    )

}