# docker

1. Open a terminal and run command `run docker-compose up`.
2. Open another terminal and run `npm run start`.
3. Open a web Navigator page and navigate to `http://localhost:8080/create`
    - If you want to create a person instance add the params:
        - name
        - birth
        - adopt
    - You need to create at least 1 people and then you can create the parent.
        - For example to create a person and a child:
            - Navigate to `http://localhost:8080/create?name=child&birth=01/01/2000`
            - Then the parent `http://localhost:8080/create?name=parent&birth=01/01/1980&adopt=child`
    - You can only add 2 parents to a child. 
4. If you want to verify the class well working without the server, you can run `node index.js`.
    - In index.js exists code to test and play with the data and verify the algorythm.
    