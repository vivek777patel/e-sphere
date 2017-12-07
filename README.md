# Flask based REST APIs with Docker

Steps To Setup Docker for python flask based application :

--> Create a docker file named "Dockerfile" in your root directory of application 

    (For more details of this file commands check Dockerfile of this repository)
    
--> In order to build a docker image with the above created file use following command from the root directory of application 

    (where your Dockerfile is present)
    
    --> docker build -t myapplication:latest .
    
                  where, myapplication : the name of your docker image (from which you can refer your application in docker)
                  
                         latest : is the tag you would like to give to your application (for version control of your application)
                         
                         . : for current directory
                         
--> To run the docker image which is created from above command :

    --> docker run -d -p 5000:5000 myapplication:latest
    
                -d option to run your docker image in dispatched mode
                
                -p option to publish your docker port 5000 (second 5000) to your local environment port 5000 (first 5000)
                
Youtube video URL:

