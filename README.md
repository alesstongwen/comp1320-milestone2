# **Term Project Milestone 2**
The following Milestone is your final major challenge for our COMP1320 course. While we will still cover more concepts before the final exam, this will definitely be the most challenging thing you work on in this course. Take it slow…plan carefully. Don’t jump directly into writing code, take some time to read what the code you’re given is doing.
## **Tasks:**
#### **Task 1:**
Study the starter code given to you. The first thing you should do is analyze it and begin trying to understand how the flow of http requests works within it. When you have a rough idea of how things are working, move onto Task 2. 

▢ Make sure before doing anything that you push the starter code to a new repository on Github and submit your github link to the learning hub dropbox.

#### **Task 2: Create the home page**
In the browser, if I visit [localhost:3000](http://localhost:3000/) then I should see the following:

![ref1](https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2F2270989b-92ee-42e1-bed9-01bb129d37a7%2FUntitled.png?table=block&id=3263bddc-20fa-45b8-93b7-a5f4413c4396&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=2000&userId=&cache=v2)

Where does this data come from? Observe the file data.json:

![ref1](https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2F869a93dc-087e-4a7c-b4dd-a1a2b75caa0c%2FUntitled.png?table=block&id=f1b9df0c-3cd3-4a9b-a93f-b7e0401f951a&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=2000&userId=&cache=v2)

There are 2 actions you can take from the home page:
#### **Action1: File Upload:**
Clicking this should open up a file upload dialogue screen like this:

![ref1](https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2Fed49f1d1-387d-47fb-85f9-2a1f01e8a5ed%2FUntitled.png?table=block&id=6ecc0611-64cd-4b34-96b8-71668151faa0&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=2000&userId=&cache=v2)


From here, you should choose **1 single png image to upload.** Once you have selected it, your code should do the following:

1. Upload the image to that user’s photos folder.

2. Add that image the that user’s database array. 

![ref1](https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2F2f0d5a45-8e97-4591-a5af-6842518aa433%2FUntitled.png?table=block&id=06d408fd-666e-4fd2-81ff-4efa3190cbcc&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=2000&userId=&cache=v2)

You will need to use a library called formidable to do this.

<https://www.npmjs.com/package/formidable>

#### **Action 2: View a Profile:**
<img src="https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2F8718d0c4-b5d7-4ebc-8762-2df02e49b421%2FUntitled.png?table=block&id=41137e9e-15ee-4161-af1a-d7b852eb220a&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=860&userId=&cache=v2" alt="image" width="300" height="auto">


If you click on the username of a user, it should show you that user’s Instagram profile. 

Go to [localhost:3000/feed](http://localhost:3000/feed) to see a sample profile. 

![ref1](https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2F9dbf53fc-369d-4b37-9cb7-80885d24ed60%2FUntitled.png?table=block&id=9d20732e-d902-4450-bc7f-9b53f6715099&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=2000&userId=&cache=v2)


Things that need to be changed:

- The username should not be janedoe\_, but rather, john123. 

- The posts, followers, and following should be updated. 

- The description should be updated.

- The photos shown should reflect the photos the user has in their photos folder.

#### **Task 3:**
![ref1](https://alesstongwen.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc23b6d9b-79fe-4169-9748-f549bde8163a%2F2932987a-75ce-4772-a074-31b15cde4111%2FUntitled.png?table=block&id=0b42fffc-5e9a-464e-81a6-36444fd522d4&spaceId=c23b6d9b-79fe-4169-9748-f549bde8163a&width=2000&userId=&cache=v2)


EJS is a template system. You define HTML pages in the EJS syntax and you specify where various data will go in the page. Then, your app combines data with the template and "renders" a complete HTML page where EJS takes your data and inserts it into the web page according to how you've defined the template.

Refactor your code so that it uses EJS templating rather than the ugly html template strings. We want our HTML to be inside a seperate file rather than inside a huge string!

<https://ejs.co/>

inject variable to a different file 
