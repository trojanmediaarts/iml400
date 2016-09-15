<!-- $theme: gaia -->

<!-- page_number: true -->
<!-- *page_number: false -->
<!-- *template: invert -->

IML 400 Creative Coding for the Web
====
## Arrays, DOM and CSS Shapes
### Meeting 3:    09.08.16

---

## Agenda
1. Tutorial	
	* Github workflow
	* Advance our animals
		* Arrays part II
		* Objects
		* Web Document API DOM
		* Animation ?
		* Crude UI ?
---

## Workflow: Github Setup

This is **strongly**  recommended to help improve your workflow.  

Yes, it is going to feel "weird" at first, but stick with it and work through it.  

---
## Workflow: Github Setup
### The Motivation

You are going to be developing your website on your local machine...  

... and copying your files to Storm...  

what happens when you accidentally copy over a file that you meant to keep?  

what happens when you are working on a larger project and have different versions of files?

---

how can you iterate your code without being scared that you are going to break things?  

*there is a better way than saving  files with different suffixes!*

---


## Github can help!!

#### Setup

1) Download the Github Desktop tool (google: github desktop tool) and download it  
2) Follow along as we create a repository for your iml400 website and for your code exercises. 

---

## Github can help!!

If you let it!  

1) Commit early
Commit while you are working on features. Don't wait until you are done.
2) Commit often
You don't need to commit as often as you would save, but fairly often (play around with different intervals, e.g. every 5 saves, commit)  

Git makes it **very** easy to get previous versions of code back

---

## Git Demo

1) Updating the Course landing page
2) Spirit Animal extended example

---

## For next week you are going to be building an IML400 Totem

---

## Spirit Animal Totem

![55% center](images/TotemPoleAlgonquinPark.jpg)

---

## Spirit Animal Totem

Everyone is going to building totems using their spirit animal and the spirit animals of everyone else in the class.  

---

## Spirit Animal Totem

_Yes...this does have the potential to be a goat rodeo...but that is part of the fun :-)_

---

# How this is going to work

You are going to create your animal using a spec.  

Your classmates will be cloning your repository to integrate your code and build a totem.  

Today in class I will be demonstrating the work flow as I introduce new concepts. 

---

## Spirit Animal Refactor

1) Make sure that your spirit animal is caged! (i.e. there is a single root element container element)

_this may break things; you can fix them during the assignment_  

2) Make sure that your CSS only uses ID selectors.
	* IDs should be in the form of: `#<your stormid>-<descriptor>`  _omit the angle brackets_
		* e.g `#rspell-leg_L, #rspell-beak, ...` 	

---

## Spirit Animal Refactor

3) Name your CSS file `<your stormid>-spiritAnimal.css` _(omit the angle brackets)_


---

## Objects

Objects represent nouns in a computer system/program.  

If you think about it a noun is an abstract concept.  

e.g. person is the word that represents the concept of ‘humanness’.  

Paired with the abstract concept of a person is a concrete version of a person: i.e. me, you, Bob and Jamie are instances of a person.  

You can also have other abstract concepts related to the abstract concept of person.  

e.g. a Teacher is a person. So is a student. And the concrete representations of teacher would be me and you would be a student.

---

## Object Oriented Programming

OOP is a way to represent this relationship in computer code. It is _an_ effective way to build programs that do things / perform tasks.  

<small>(side note: It is **not** the only way or necessarily the best way in all cases)</small>  

We are not going to be covering OOP in this class, but it is extremely helpful to understand this model of thinking when doing web work. This is the dominate mode of thinking, representing and programming in CSS and Javascript.

---

## Object example

Let’s meet Gyll:

```javascript
var gyll = { 
name: 'gyll',
age: 28
}

console.log(gyll.name)

```


---


```javascript
function sayHello(aName) {
  if( aName != null) {
    console.log("Hello I am " + aName)
  } else {
     console.log("You can't introduce yourself without a name, Duh!")
  }
}

//Let’s give gyll some behavior

var gyll = { 
   name: 'gyll',
   sayHello: function() {
      console.log("Hello my name is Gyll")
   }
}

console.log(gyll.sayHello())

function isInHighSchool(obj) {
   return obj.age <= 19
} 

if( isInHighSchool(gyll) ) {
  console.log('are you going to college?')  
} else {
 console.log('are you in college?')
}
```

---

## Objects of Interest

#### DOM
An HTML document is represented as a tree of objects called `Nodes`.  

Just like nouns these objects have properties (i.e. adjectives ) and have methods ( they can do things, follow commands ). Remember methods are just functions that are associated with an object.


This HTML Document would be represented by this Node Tree.

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
  <p id="para1"><img /></p>
  <p id="para2”>Some text here</p>
</body>
</html>
```


---

## DOM Exploration

Let’s explore this simple DOM using the Chrome Javascript console.

```javascript
document
document.childElementCount
document.childNodes  //slightly confusing because of DOCTYPE
document.children
```

To find out what these do we need to get comfortable with the documentation
[Mozilla Web Document API](https://developer.mozilla.org/en-US/docs/Web/API/Document)

---

lets cache (save the html element so that we don’t have to keep typing ```document.children[0]```

```
var $html = document.children[0]
```

Now we can loop (iterate, access all) of the children of the html tag:

```
for(var i = 0; i < $html.childElementCount; i++ ) {
  console.log( $html.children[i].tagName )
}
```

---

we can also access the number of children for HTML’s children

```javascript
for(var i = 0; i < $html.childElementCount; i++ ) {
  console.log('Hi, I am the ' + $html.children[i].tagName + ' tag ')
  console.log('\t and I have ' + $html.children[i].childElementCount + ' children ')
}
```

---

Once we have accessed a node we can change it. Some nodes are live (i.e. making changes will change their view in the browser)

```
for(var i = 0; i < $html.childElementCount; i++ ) {
  if( $html.children[i].tagName.toLowerCase() == 'body' ) {
     $html.children[i].style.color = 'red';
     $html.children[i].style.fontSize = '20px';
   }
}
```

---

## Alternatives

Being able to access our HTML document interactively is heaps useful. But this method is a bit cumbersome and tedious. Imagine a document with thousands of nodes. To find one you would have to loop through all of the nodes checking the tagnames until you found the one that you wanted to access.  

```
document.getElementsByTagName
document.getElementsByClassName
document.getElementById
```

---
and by CSS style selector access

```javascript
document.querySelector()
document.querySelectorAll()
```

---


Javascript Style access:
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

styles that are accessible from the style property:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference


---

Set Text of a node (innerHTML or textContent)
$html.getElementsByTagName("p")[0].textContent = "Dis is da text"
"Dis is da text"

Get Text of a node (innerHTML or textContent):
$html.getElementsByTagName("p")[0].innerHTML