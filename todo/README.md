



# LAB - Context API

**To Do List Manager Phase 3:** Add some configuration settings to the application

In this phase, we'll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

## Phase 3 Requirements

In Phase 3, we'd like to extend the functionality of the application by potentially allowing users to set a few configuration options to change how the application behaves. The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories.

- As a user, I would like to see my To Do List Items a few at a time so that I don't have to wade through them all
- As a user, I would like my default view to only be "Incomplete" Items so that I can quickly determine what I have to do.
- As a user, I would like my list sorted by difficulty so that I can more easily prioritize
- As a user, I would like the option to change my default preferences with regards to how many Items I see per page, which items are filtered, and how they are sorted



# LAB - Custom Hooks

**To Do List Manager Phase 2:** Connecting the To Do Application to an external API and Database

In this phase, we'll be connecting our application to an API so that our list will be saved permanently. This will require a working and deployed API server with a proper "To Do" data model and appropriate REST routes


## Phase 2 Requirements

In Phase 2, we're going to connect the To Do Manager to a deployed API, backed by a database. The core functionality and stories do not change (reference Phase 1), but a new one has been added to note this shift in persistence.

- As a user, I would like to be able to add, update, and delete To Do items
- As a user, I would like my To Do Items to be permanently stored so that I can re-access them at any time, using any device

Note that the display of each To Do item has changed slightly.



# LAB - Hooks API

**To Do List Manager Phase 1:** Begin the build of an application designed for creating and organizing a "To Do" list in your browser.

In this initial phase, we're going to have to start by converting a legacy application into a more modern architecture. Our initial "Proof of Concept" was written using class based components and was not properly styled. Now that our client has given us the "green light" for development, we're going to refactor the application using Hooks and upgrading the style.


## Phase 1 Requirements

Today, we begin the first of a 4-phase build of the To Do List Manager, a web-based task manager application, written in React. In this first phase, our goal is to setup a foundational system using React hooks that we can build upon in later phases, adding databases, logins, and more advanced features.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I would like an easy way to add a new to do item using an online interface
- As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
- As a user, I would like to delete to do items that are no longer needed
- As a user, I would like to easily mark to do items as completed
- As a user, I would like to edit an existing to do item