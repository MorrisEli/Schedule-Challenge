# Schedule-Challenge

## Description

This is a work day schedule app. Using a current time API, it desplays the current time. If a time block is in the past it is colored red. If a time block is present, it is colored grey. If it is a futrure time block it is colored green. You can save info in each time block.

## Screenshot

![Uploading A5BF63CB-4B28-43F1-93A8-6A2C49184F6E_1_201_a.jpeg…]()


Criteria:
## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

Function:


About:


Notes:
1.)
Display the current day at the top of the calender.

2.)
Present timeblocks for standard business hours.
    a.) Color code timeblocks to indicate whether it is past, present, or future.

3.)
Click into timeblock and enter event.
    a.)Be able to save the event in local storage.
    b.)When page is refreseshed, saved events persist





In order to delete a timeblock- Have to delete information input and click save before page refreshes due to time change. (refreshes evfery minute)

Changed 'past' color to red.






    $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  