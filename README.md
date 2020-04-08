# rerender-null-array

This repo demonstrates a regression in Ember 3.17 where a re-render of an array that contains all null values only renders one iteration.

To reproduce, run `ember test`, or to see that it's a regression between Ember 3.16 and 3.17, run `ember try:each`.
