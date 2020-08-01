//////////Difference between Object(ES5) and Map(ES6)////////////////


//here i take a eg of quiz game to explain difference b/w both Object and Map//



/*
//1. Using Object


    function Question(question, answers, correct) {     //Create a function constructor
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {       //Defining dsiplay method into it's prototype because it will not attach to one of ques but it will be in its protoype.
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)')
        }
    }
//Question with options and correct answer
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);
    var q2 = new Question('Is corona virus is not a pandemic disease?',
                          ['yes', 'no', 'dont know'],
                          1);

//Question with options and correct answer
    var questions = [q1, q2];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

//Taking answer

    var answer = parseInt(prompt('Please select the correct answer.')); //Use parseInt because correct answer is in integer form
    questions[n].checkAnswer(answer);
*/


//2. Using Map(ES6)
// Map is much easier than object because here we can easily check its size, manipulate it and many more

/*
const question = new Map();
question.set.('question',Is covid-19 is an pandemic disease');
question.set(1,'yes');	//In map we can use string,number,boolean and function as key but in object only string is used as a key(Important).
question.set(2,'no');
question.set(3,'not sure');
question.set(true,'Correct Answer');
question.set(false,'wrong answer');
question.set('correct',1);

//Displaying ques with answer
console.log(question.get('question');;	//Set is used to set a value in map and get is used to fetch a value from map
for(let[key,value] of question.entries()){
	if(typeof(key)==='number')
		console.log(`Answer ${key}:${value}`);
}
const ans=parseInt(prompt("enter the answer");
console.log(question.get(ans===question.get('correct;)));
*/


we can also delete element from the map:
question.delete(3);		//input is key
can delete eveything: 
question.clear();
can also check size:
question.size();