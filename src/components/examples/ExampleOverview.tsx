import React from 'react';

const ExampleOverview = () => (
    <section id="Overview">
        <h2>Overview</h2>
        <p>This document serves to introduce and explore the intricacies of <a {...{ target: '_blank', href: 'https://reactjs.org/docs/context.html', title: 'View Context React Documentation' }}>React Context</a>, which is seemingly a State sharing layer within applications somewhat akin to <a {...{ href: 'https://redux.js.org/basics/usage-with-react', title: 'View React Redux Docs', target: '_blank' }}>Redux</a>.</p>
        <q>
            Context is designed to <strong>share data that can be considered “global” for a tree of React components</strong>, such as the current authenticated user, theme, or preferred language.
        </q>
        <p>This document will explore the use cases and implementation of Context in a modern React application.</p>
    </section>
);

export default ExampleOverview;
