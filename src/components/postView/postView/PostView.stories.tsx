import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { PostView } from "./PostView";

export default {
    title: "PostView/PostView",
    component: PostView,
} as ComponentMeta<typeof PostView>;

const Template: ComponentStory<typeof PostView> = (args) => (
    <PostView {...args}></PostView>
);

export const Image = Template.bind({});
Image.args = {
    
};