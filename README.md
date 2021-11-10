# Cryptocurrency_Comparison
For Windows:
1) git clone https://github.com/aditipatil138/Cryptocurrency_Comparison.git
2) cd into Cryptocurrency_Comparison folder
3) npm install
4) npm start
5) The app running on  http://localhost:3000/

Answers to the Questionnaire:
1) Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
- I have used React for the front end and have developed a website using react itself. Due to the limited time I could not implement the backend and then call it in front end, I was working on it but understanding how to implement the backend would take some more time. The website will give you Prices of Bitcoin and Ethereum from two (any) different exchanges/sources and will provide recommendation depending on data. I am using axios to fetch the data directly.
2) Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
- I would say I have used a lot of variables in the code instead I could have directly called the data wherever needed instead of always assignin the data to variable and then call it.
3) If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
- Scaling the system. Scale-up or Scale down
- Seperating single server to multiple servers as users increase.
- Using Load Balancer
4) What are some other enhancements you would have made, if you had more time to do this implementation
 - I could implement the backend and then call the data in frontend. That can be achieved by giving permissions to CORS policiy, using data frames in backend and using proxy in the frontend.
 - I could have displayed data from more than two sources, given comparison graphs, graphs for predictions or past variations in prices.
 - Enhanced the frontend to make it more attractive and userfriendly. 
