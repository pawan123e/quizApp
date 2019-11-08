export const html =[
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Mark Language'],
        correct: 1
    },
    {
        question: 'Who is making the Web standards?',
        options: ['Mozilla', 'The World Wide Web Consortium', 'Google', 'Microsoft'],
        correct: 2
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        options: ['<heading>', '<h1>', '<h6>', '<head>'],
        correct: 2
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<break>', '<lb>', '<br>', '<hr>'],
        correct: 3
    }, 
    {
        question: 'What is the correct HTML for adding a background color?',
        options: ['<body style="background-color:yellow;">', '<body bg ="yellow">', '<bg>yellow</bg>', '<background>yellow</background>'],
        correct: 1
    },
    {
        question: 'Choose the correct HTML element to define important text',
        options: ['<important>', '<b>', '<i>', '<strong>'],
        correct: 4
    },
    {
        question: 'Choose the correct HTML element to define imphasized text',
        options: ['<i>', '<lb>', '<em>', '<italic>'],
        correct: 3
    },
    {
        question: 'Which character is used to indicate an end tag?',
        options: ['*', '/', '<', '^'],
        correct: 2
    },
    {
        question: 'Which of these elements are all <table> elements?',
        options: ['<table><tr><td>', '<table><tr><tt>', '<table><head><tfoot>', '<thead><body><tr>'],
        correct: 1
    },
    {
        question: 'How can you make a numbered list?',
        options: ['<list>', '<ol>', '<ul>', '<dl>'],
        correct: 2
    },   
]

export const css =[
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Cascading Sheet Style', 'Colourful Style Sheets', 'Creative Style Sheets'],
        correct: 1
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        options: ['<stylesheet>mystyle.css</stylesheet>', '<link rel="stylesheet" type="type/css" href="mystyle.css">', '<style src="mystyle.css">'],
        correct: 2
    },
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        options: ['At the end of the document', 'In the <body> section', 'In the <head> section'],
        correct: 3
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<css>', '<style>', '<script>'],
        correct: 2
    }, 
    {
        question: 'Which HTML attribute is used to define inline styles?',
        options: ['class', 'styles', 'style', 'font'],
        correct: 3
    },
    {
        question: 'Which is the correct CSS syntax?',
        options: ['body:color=black;', '{body:color=black;}', '{body;color:black;}', 'body{color:black;}'],
        correct: 4
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        options: ['/*this is a comment */', '//this is a comment//', '// this is a comment', '"this is a comment'],
        correct: 3
    },
    {
        question: 'Which property is used to change the background color?',
        options: ['background-color', 'color', 'bgcolor'],
        correct: 1
    },
    {
        question: 'How do you add a background color for all <h1> elements?',
        options: ['h1 {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', 'all.h1 {background-color:#FFFFFF;}'],
        correct: 1
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        options: ['fgcolor', 'color', 'text-color'],
        correct: 3
    },   
]

export const javascript =[
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<javascript>', '<script>', '<js>', '<scripting>'],
        correct: 2
    },
    {
        question: `What is the correct JavaScript syntax to change the content of the HTML element below? \n<p id="demo">This is a demonstration.</p>`,
        options: ['document.getElementByName("p").innerHTML="Hello World!";', 'document.getElementById("p").innerHTML="Hello World!";', 'document.getElement("p").innerHTML="Hello World!";', '#demo.innerHTML="Hello World!";'],
        correct: 2
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        options: ['The <head> section', 'Both the <head> section and the <body> section are correct', 'The <body> section'],
        correct: 3
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: ['<script src="xxx.js">', '<script name="xxx.js">', '<script href="xxx.js">'],
        correct: 1
    }, 
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        options: ['False', 'True'],
        correct: 2
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['msg("Hello World");', 'msgBox("Hello World");', 'alert("Hello World");'],
        correct: 3
    },
    {
        question: 'How do you create a function in JavaScript?',
        options: ['function:myFunction()', 'function myFunction()', 'function = myFunction()'],
        correct: 2
    },
    {
        question: 'How do you call a function named "myFunction"?',
        options: ['call function myFunction()', 'myFunction()', 'call myFunction()'],
        correct: 2
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        options: ['if(i == 5)', 'if i == 5 then', 'if i = 5 then', 'if i = 5'],
        correct: 1
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options: ['if i =!5 then', 'if (i <> 5)', 'if (i != 5)', 'if i <> 5'],
        correct: 3
    },   
]