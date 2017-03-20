![Screenshot](https://github.com/kris03/AP-17/blob/master/mini_ex6/Sk%C3%A6rmbillede%20.png)

[Run the program](https://rawgit.com/kris03/AP-17/master/mini_ex6/index.html)

After our guest lecture I was very inspired by making something with an organic character. So during the week I have seen hours of YouTube videos to get an understanding of the different syntax and features for organic growth and perling noise amoung others.

I would like to use for loops, which I had not used much and was very impressed by the possibilities that can occur when using noise. So I decided to dig into it and try to get a basic understanding of how to use it.

So, therefor my program ended out being a Perlin noise flow field.

The program includes the following rules:
- The values of the 3 axes increase every time the program runs draw.
- The vectors are pointing in the direction acoording to an angel based on noise values of all 3 axes multiplied by TWO_PI. 
- Particles have to follow the vectors - they have to find the neerest vector and apply it as a force.
- When the particles gets to an edge, they will return to the opposite side of the canvas so they don't disappear.
- There is a speed limit to the acceleration to make sure that the particles are not just “pushed” by the acceleration function to move faster and faster.
