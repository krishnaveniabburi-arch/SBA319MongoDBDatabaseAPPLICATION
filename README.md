book review 
created bookreview express server node mongodb application 
created blogDB database and connected to mongoose i see my created data in mongoDB as BLOGDB(comments,posts,users) 
created routes and connected ti DB
created GET,POST,PUT/PATCH,DELETE requested i tested all requests 
when testing 
--after delete request trying to test comments(post,patch)
not getting out put 
-- before deleting i got PUT/PATCH request worked correctly 
i am not sure where i am doing wrong
--every time i doing GET request and copy the USER_ID and doing patch Post request.
http://localhost:3000
post http://localhost:3000
http://localhost:3000/user1/6a5b6b1e607a6a4b8a695d4d
DELETE http://localhost:3000/user1/6a5b6b1e607a6a4b8a695d4d
POST create post http://localhost:3000/post1
PATCH post http://localhost:3000/post1/6a5b749adceb2df05cda741b
DELETE http://localhost:3000/post1/6a5b749adceb2df05cda741b

VALIDATION
http://localhost:3000/user1
i did validate with wrong data and got the mesg validation failed give the correct data 

finally isee my created data in Mongo DB
