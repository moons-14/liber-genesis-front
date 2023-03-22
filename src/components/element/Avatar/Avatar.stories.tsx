import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
    title: "Element/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args}></Avatar>
);

export const Image = Template.bind({});
Image.args = {
    src: "https://moons14.com/icon.png",
    name: "moons14.eth"
};