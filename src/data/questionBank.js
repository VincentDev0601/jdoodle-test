const allQuestions = [
  {
    id: 1,
    question:
      "Write a program that takes a number N as the input, and prints it to the output.",
    input_format: "The only line contains a single integer.",
    output_format: "Output the answer in a single line.",
    testcase: [
      {
        input: "123",
        output: "123\n",
        testResult: null,
      },
      {
        input: "434242",
        output: "434242\n",
        testResult: null,
      },
      {
        input: "6456",
        output: "6456\n",
        testResult: null,
      },
      {
        input: "56756757567657567",
        output: "56756757567657567\n",
        testResult: null,
      },
      {
        input: "675",
        output: "675\n",
        testResult: null,
      },
    ],
  },
  {
    id: 2,
    question:
      "Chef and Chefina are playing with dice. In one turn, both of them roll their dice at once. They consider a turn to be good if the sum of the numbers on their dice is greater than Given that in a particular turn Chef and Chefina got X and Y on their respective dice, find whether the turn was good.",
    input_format:
      "Container two integers, second one is the one that gets computed",
    output_format: "Prints out YES or NO string",
    testcase: [
      {
        input: "1 4",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "3 4",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "4 2",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "2 6",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "3 4",
        output: "YES\n",
        testResult: null,
      },
    ],
  },
  {
    id: 3,
    question:
      "Given two integers A and B, write a program to add these two numbers and output it.",
    input_format:
      "The first line contains an integer T, the total number of test cases. Then follow T lines, each line contains two Integers A and B.",
    output_format:
      "For each test case, add A and B and display the sum in a new line.",
    testcase: [
      {
        input: "1 2",
        output: "3\n",
        testResult: null,
      },
      {
        input: "7000 200",
        output: "7200\n",
        testResult: null,
      },
      {
        input: "60 200",
        output: "260\n",
        testResult: null,
      },
      {
        input: "10 200",
        output: "300\n",
        testResult: null,
      },
      {
        input: "100 20",
        output: "120\n",
        testResult: null,
      },
    ],
  },
  {
    id: 4,
    question:
      "Chef wants to become fit for which he decided to walk to the office and return home by walking. It is known that Chef's office is X km away from his home. If his office is open on days in a week, find the number of kilometers Chef travels through office trips in a week.",
    input_format:
      "Each test case contains of a single line consisting of single integer X.",
    output_format:
      "For each test case, output the number of kilometers Chef travels through office trips in a week.",
    testcase: [
      {
        input: "1",
        output: "10\n",
        testResult: null,
      },
      {
        input: "3",
        output: "30\n",
        testResult: null,
      },
      {
        input: "7",
        output: "70\n",
        testResult: null,
      },
      {
        input: "12",
        output: "30\n",
        testResult: null,
      },
      {
        input: "10",
        output: "100\n",
        testResult: null,
      },
    ],
  },
  {
    id: 5,
    question:
      "Chef is playing Ludo. According to the rules of Ludo, a player can enter a new token into the play only when he rolls a on the die. In the current turn, Chef rolled the number X on the die. Determine if Chef can enter a new token into the play in the current turn or not.",
    input_format:
      "each test case contains one integer. X — the number rolled by the Chef on the die.",
    output_format:
      "For each test case, output YES if the Chef can enter a new token in the game. Otherwise, output NO.",
    testcase: [
      {
        input: "1",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "6",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "3",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "4",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "3",
        output: "NO\n",
        testResult: null,
      },
    ],
  },
  {
    id: 6,
    question:
      "In Chefland, a tax of rupees is deducted if the total income is strictly greater than rupees. Given that total income is X rupees, find out how much money you get.",
    input_format:
      "Each test case contains a single integer X — your total income.",
    output_format:
      "For each test case, output on a new line, the amount of money you get.",
    testcase: [
      {
        input: "5",
        output: "5\n",
        testResult: null,
      },
      {
        input: "105",
        output: "95\n",
        testResult: null,
      },
      {
        input: "101",
        output: "91\n",
        testResult: null,
      },
      {
        input: "100",
        output: "100\n",
        testResult: null,
      },
      {
        input: "200",
        output: "210\n",
        testResult: null,
      },
    ],
  },
  {
    id: 7,
    question:
      "Chef's dog binary hears frequencies starting from Hertz to Hert (both inclusive). If Chef's commands have a frequency of X Hertz, find whether binary can hear them or not.",
    input_format:
      "Each test case consists of a single integer X - the frequency of Chef's commands in Hertz",
    output_format: "Prints out YES or NO string",
    testcase: [
      {
        input: "42",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "67",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "402",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "45000",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "45005",
        output: "NO\n",
        testResult: null,
      },
    ],
  },
  {
    id: 8,
    question:
      "Chef has recently moved into an apartment. It takes minutes for Chef to reach office from the apartment. Chef left for the office X minutes before Chef was supposed to reach. Determine whether or not Chef will be able to reach on time.",
    input_format: "Each test case consists of a single integer X.",
    output_format:
      "For each test case, output YES if Chef will reach on time, NO otherwise.",
    testcase: [
      {
        input: "30",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "60",
        output: "YES\n",
        testResult: null,
      },
      {
        input: "14",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "29",
        output: "NO\n",
        testResult: null,
      },
      {
        input: "29",
        output: "YES\n",
        testResult: null,
      },
    ],
  },
  {
    id: 9,
    question:
      "Alice and Bob were having an argument about which of them is taller than the other. Charlie got irritated by the argument, and decided to settle the matter once and for all. Charlie measured the heights of Alice and Bob, and got to know that Alice's height is X centimeters and Bob's height is Y centimeters. Help Charlie decide who is taller. It is guaranteed that X!=Y",
    input_format:
      "The first and only line of each test case contains two integers X and Y, as described in the problem statement.",
    output_format: "A if Alice is taller than Bob, else output B",
    testcase: [
      {
        input: "150 160",
        output: "B\n",
        testResult: null,
      },
      {
        input: "160 150",
        output: "A\n",
        testResult: null,
      },
      {
        input: "260 250",
        output: "A\n",
        testResult: null,
      },
      {
        input: "110 100",
        output: "A\n",
        testResult: null,
      },
      {
        input: "102 201",
        output: "B\n",
        testResult: null,
      },
    ],
  },
  {
    id: 10,
    question:
      "King loves to go on tours with his friends. King has N cars that can seat 5 people each and M cars that can seat 7 people each. Determine the maximum number of people that can travel together in these cars.",
    input_format:
      "N and M — the number of 5-seaters and 7-seaters, respectively.",
    output_format:
      "For each test case, output on a new line the maximum number of people that can travel together.",
    testcase: [
      {
        input: "4 8",
        output: "76\n",
        testResult: null,
      },
      {
        input: "2 13",
        output: "101\n",
        testResult: null,
      },
      {
        input: "14 5",
        output: "105\n",
        testResult: null,
      },
      {
        input: "8 8",
        output: "96\n",
        testResult: null,
      },
      {
        input: "2 13",
        output: "101\n",
        testResult: null,
      },
    ],
  },
];

function resetIDofQuestions(questions) {
  for (let i = 0; i < questions.length; i++) {
    questions[i].id = i + 1;
  }
  return questions;
}

function getShortlistedQuestions(allQuestions) {
  const randomQuestions = allQuestions
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  return randomQuestions;
}

const questionBank = resetIDofQuestions(getShortlistedQuestions(allQuestions));

export { questionBank };
