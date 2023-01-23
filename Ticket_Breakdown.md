# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


## Ticket 1: Add a new column to the Agents table in the database to store the custom id provided by the Facility

-   Acceptance Criteria: A new column called "facility_id" has been added to the Agents table in the database.
-   Time/Effort Estimate: 20 min
-   Implementation Details:
    -   This task can be completed by adding a new column to the Agents table in the database using a database management tool such as SQL or by updating the database schema in the codebase.

## Ticket 2: Update the `getShiftsByFacility` function to include the custom id provided by the Facility in the metadata returned for each Agent

-   Acceptance Criteria: The `getShiftsByFacility` function now includes the custom id provided by the Facility for each Agent in the metadata returned.
-   Time/Effort Estimate: 20 min
-   Implementation Details:
    -   This task will involve updating the `getShiftsByFacility` function to include a join with the Agents table in the database to retrieve the custom id for each Agent.

## Ticket 3: Update the `generateReport` function to use the custom id provided by the Facility instead of the internal database id for each Agent

-   Acceptance Criteria: The `generateReport` function now uses the custom id provided by the Facility for each Agent instead of the internal database id.
-   Time/Effort Estimate: 20 min
-   Implementation Details:
    -   This task will involve updating the `generateReport` function to use the custom id provided by the Facility instead of the internal database id when generating the report.

## Ticket 4: Add functionality to the Facility's dashboard to allow them to input custom ids for each Agent they work with

-   Acceptance Criteria: Facility can input custom ids for each Agent they work with on their dashboard
-   Time/Effort Estimate: 20 min
-   Implementation Details:
    -   This task will involve adding a new form to the Facility's dashboard that allows them to input custom ids for each Agent they work with and then saving that information to the database.

## Ticket 5: Test and deploy the changes to production

-   Acceptance Criteria: The changes have been tested and deployed to production without any errors
-   Time/Effort Estimate: 20 min
-   Implementation Details:
    -   This task will involve thoroughly testing the changes on a staging environment before deploying to production to ensure that everything is working as expected.
