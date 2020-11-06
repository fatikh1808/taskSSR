import React from 'react';

import { ArticleCard } from './articleCard';

export default {
  title: 'Ssr/ArticleCard',
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

const Template = (args) => <ArticleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 2,
  author_name: 'Fotikh',
  title: "React",
  rubric: "Programming",
  image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  author_last_name: "Tashlanov",
  width: "80%",
  borderRadius: 5
};

