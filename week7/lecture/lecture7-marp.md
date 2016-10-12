<!-- $theme: gaia -->

<!-- page_number: true -->
<!-- *page_number: false -->
<!-- *template: invert -->

IML 400 Creative Coding for the Web
====
## Programming the Web - APIs
### Meeting 7:    10.06.16

---
## Agenda

### 1. Lecture
1. API's and Art
2. API's part 2

### 2. Workshop
1. Interactive API's


---

## API's and Art

API's convert data and programs into material.  

This material is released to the network and in a networked culture gets amplified and massaged into unanticipated forms.


---

## Objects are data tables

It might help you to think about objects like data tables.  

Every object with the same properties is like a row in that table

---

## Example: A data table ...
 
| name | height |  school | hometown 
| :-: | :-: | :-: | :-:
| rhazes | 77 |  psu, duke, ucla | tampa
| steve | 70 |  otis | vancouver
| jill | 69 |  usc | sao paulo 

* We have a data table with some demographic data.  

* Each row of the table corresponds to one person.  

* Each row can be captured as an object  

* The entire table can be represented by an array of objects

---

## Example: A data table ...
 
| name | height |  school | hometown 
| :-: | :-: | :-: | :-:
| rhazes | 77 |  psu, duke, ucla | tampa


... as an object ...  


```javascript
var row1 = { 
name: "rhazes", height: 77, 
school: ["psu","duke","ucla"],
hometown: "tampa" }

```

---

## Example: A data table ...
 
| name | height |  school | hometown 
| :-: | :-: | :-: | :-:
| rhazes | 77 |  psu, duke, ucla | tampa
| steve | 70 |  otis | vancouver
| jill | 69 |  usc | sao paulo 


```javascript
var table = [
{ name: "rhazes", height: 77, 
school: ["psu","duke","ucla"], hometown: "tampa" },
{ name: "steve", height: 70, 
school: ["otis"], hometown: "vancouver" },
{ name: "jill", height: 77, 
school: ["usc"], hometown: "sao paulo" }

]
```
---

## Accessing the table (via code)

| name | height |  school | hometown 
| :-: | :-: | :-: | :-:
| rhazes | 77 |  psu, duke, ucla | tampa
| steve | 70 |  otis | vancouver
| jill | 69 |  usc | sao paulo 

---

```javascript
/* challenge: 
 1. write code to access the name of 3rd object
 2. write code to access steve's hometown
 3. write code to access jill's school
*/
```

---

## Tables can contain other tables

| student | year |  grades |  
| :-: | :-: | :-: | :-:
| rhazes | 77 |  tableCourses |  


**tableCourses:**  

| iml300 | iml400 |  iml310 |  
| :-: | :-: | :-: | :-:
| F | C |  B+ |  

```javascript
var obj = {student: rhazes, year: grad, 
grades: {iml300: 'F', iml400: 'C', iml310: 'B+'}};

```

---
```javascript
/* challenge: 
 1. write code to access the object's iml310 grade
*/
```

---

## Understanding APIs
#### APIs are Tables
API endpoints are essentially tables of data that a company's developers are providing access to.  

The _response format_ tells us:
* column names, 
* column contents (data types), 
* maximum rows that we can receive at one time

---

## Understanding APIs
#### APIs are Tables

The _request format_ tells us:

* parameters that we can provide to change what we get back ( the query parameters )

---
## Understanding APIs

##### Spotify example

[Spotify Search web endpoint](https://developer.spotify.com/web-api/search-item/)

---

#### Response Format for playlist object

|collaborative|external_urls|href|id|images|...
|:-:|:-:|:-:|:-:|:-:|:-:
|boolean| obj| string|string|array img objects

[**external_urls object**](https://developer.spotify.com/web-api/object-model/#external-url-object)

key|value
:-:|:-:
string | string

---

[**image object**](https://developer.spotify.com/web-api/object-model/#external-url-object)

height| url | width
:-:| :-: | :-:
integer | string | integer

---

## Using APIs

The primary objective to using APIs is to display the data table.  

This is where art and design enter because there are myriad possibilities for how this can be done.  

* display the information in an attractive, wacky, unanticipated layout
* make the information dynamic and interactive
* combine the information with other information sources (mashups).

---
## Using APIs

Displaying the data hits from an API is simply a task of _mapping_ the values in the columns to _html_ tags.  

The fact that  the tables can be represented as objects is very helpful... 

_objects and functions that manipulate those objects bridge the data in table format to its display in HTML_

---

## Sample Data Table

| name | height |  school | grades 
| :-: | :-: | :-: | :-:
| rhazes | 77 |  psu, duke, ucla | courseObj
| steve | 70 |  otis | courseObj
| jill | 69 |  usc | courseObj 

**course table**
student id| iml300 | iml400 |  iml310 |  
| :-: | :-: | :-: | :-: | :-:
rhazes | F | C |  B+ |  

---

## Sample Data Objects

```javascript
var result = { students: [
{ name: "rhazes", height: 77, 
school: ["psu","duke","ucla"], 
grades: { iml300: "F", iml400: "C", iml310: "B+"} },
{ name: "steve", height: 70, 
school: ["otis"] },
{ name: "jill", height: 77, 
school: ["usc"] }
]

```

---

## Sample Data Display

```html
<div class="student">
<h2 class="6footer">rhazes</h2>
<ul> <li>penn state university</li>
<li>duke university</li>
<li>university of california, los angeles</li></ul>
<h3>Performance</h3>
<h5>300 level courses: poor</h5>
<h5>400 level courses: good</h5>  </div>
```

the display has used the data to make presentation decisions. e.g.
* the class of the header, expanding the university names, and aggregrating the grades into descriptions.

---
## Working with API's - Workflow

1. Decide what you want to do/display.
2. Look at the data to see what is available (why doesn't this step come before 1?)
3. Mockup a layout with dummy data
4. Code the mockup as a template
5. Fill the mockup with live data
6. Make it interactive (hookup the page to a live data source) 

---

## Spotify Interactive Example

You can check out the source code for these examples on Github.  The code is in ```week7/code/spotify-example```  

_NOTE: In order to run the examples you may need to run a local webserver **from the spotify-example directory.**  There are instructions for running a local server on the wiki [here](https://github.com/trojanmediaarts/iml400/wiki/Week-7-Resources)._