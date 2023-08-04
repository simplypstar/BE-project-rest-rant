# BE Project REST-Rant

BE-REST-Rant is an app where users can review restaurants.

# Routes Table
 **Method** | **Path**                  | **Purpose**                                          
------------|---------------------------|------------------------------------------------------
 GET        | /                         | Home page                                            
 GET        | /places                   | Places index page                                    
 POST       | /places                   | Create new place                                     
 GET        | /places/new               | Form page for creating a new place                   
 GET        | /places/:id               | Details about a particular place                     
 PUT        | /places/:id               | Update a particular place                            
 GET        | /places/:id/edit          | Form page for editing an existing place              
 DELETE     | /places/:id               | Delete a particular place                            
 POST       | /places/:id/rant          | Create a rant \(comment\) about a particular place   
 DELETE     | /places/:id/rant/:rantId  | Delete a rant \(comment\) about a particular place   
 GET        | \*                        | 404 page  \(matches any route not defined above\)    



# Places Table
 **City**    | **State** | **Cuisines** | **Pics** 
-------------|-----------|--------------|----------
 Raleigh     | NC        | American     |          
 Charlotte   | NC        | Chinese      |          
 Rocky Mount | NC        | Japanese     |          
 Roanoke     | VA        | American     |          
 Roanoke     | VA        | Chinese      |            



# Places array format
 **Field Name** | **Data Type** 
----------------|----------------
 name           | string         
 city           | string         
 state          | string         
 cuisines       | string         
 pic            | string (a URL) 

# Rant Model Table
 **Field** | **Type** | **Notes**                                          
-----------|----------|------------------------------------------------------
 author    | string   | Name of comment's writer; defaults to Anonymous
 rant      | Boolean  | Each comment is either a rant (negative) or a rave (positive). Defaults to false.
 stars     | number   | 1 to 5 star rating in increments of 0.5; required, no default
 content   | string   | The written content of the comment; defaults to an empty string


# References:
*************
How can I show special characters like "e" with accent acute over it in HTML page? 
- used to show an e with a tilde in the word Entree
https://stackoverflow.com/questions/3812949/how-can-i-show-special-characters-like-e-with-accent-acute-over-it-in-html-pag

How to open a hyperlink in a new tab. The rel attribute sets the relationship between your page and the linked URL. Setting it to noopener noreferrer is to prevent a type of phishing known as tabnabbing.
- used for the footer that appears on each page
https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/

CSS grid-template-columns Property
- used to format the grid of food on the home page
https://www.w3schools.com/cssref/pr_grid-template-columns.php

How to create a sticky footer
- used to create the footer that displays on each page
https://css-tricks.com/couple-takes-sticky-footer/




