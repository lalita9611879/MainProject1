const qBank=[
    {
        question:'What is the capital of Tamilnadu?',
        answers:["Bangalore","Hyderabad","Chennai","Mumbai"],
        correct:"Chennai",
        questionId:"099099"

    },
    {
        question:"'OS' computer abbreviation usually means ?",	
        answers:["Order of Significance","Open Software","Operating System","Optical Sensor"],
        correct:"Operating System",
        questionId:"3456789"

    },
    {
        question:"	'.MOV' extension refers usually to what kind of file?",	
        answers:["Image file","Animation/movie file","Audio file","MS Office document"],
        correct:"Animation/movie file",
        questionId:"2211969"

    },

    {
        question:'The Battle of Plassey was fought in',
        answers:["1757","1782","1748","1764"],
        correct:"1757",
        questionId:"183452"

    },
    {
        question:"Tripitakas are sacred books of",
        answers:["Buddhists","Hindus","Jains","None of the above"],
        correct:"Buddhists",
        questionId:"267908"

    },
    {
        question:"The great Victoria Desert is located in",
        answers:["Canada","WestAfrica","Australia","North America"],
        correct:"Australia",
        questionId:"1310938"

    },
    {
        question:"Which sign of Zodiac is represented by Crab",
        answers:["Cancer","Libra","Virgo","Sagittarus"],
        correct:"Cancer",
        questionId:"1436873"

    },
    {
        question:"Who is depicted on the US hundred dollar bill?",
        answers:["Benjamin Franklin","George Washington","Abraham Lincoln","Thomas Jefferson"],
        correct:"Benjamin Franklin",
        questionId:"3182461"
    },
    {
        question:"Which of the following is used in pencils?",
        answers:["Graphite","Silicon","Charcoal","Phosphorous"],
        correct:"Graphite",
        questionId:"123456"
    },
    {
        question:"The India's highest annual rainfall is reported at",
        answers:["Namchi, Sikkim","Churu, Rajasthan","Mawsynram, Meghalaya","Chamba, Himachal Pradesh"],
        correct:"Mawsynram, Meghalaya",
        questionId:"789101"
    },
    {
        question:"'Teacher's Day' is observed on which of the date?",
        answers:["September 5","January 30","November 14","October 2"],
        correct:"September 5",
        questionId:"676767"
    },
    {
        question:"The members of the Rajya Sabha are elected by",
        answers:["The people","Lok Sabha","Elected members of the legislative assembly","Elected members of the legislative council"],
        correct:"Elected members of the legislative assembly",
        questionId:"121212"
    },
    {
        question:"January 15 is celebrated as the",
        answers:["Republic Day","Ugadhi","Teachers' Day","Army Day"],
        correct:"Army Day",
        questionId:"232323"
    },
    {
        question:"The World Environment Day is celebrated on",
        answers:["April 7","June 5","August 6","June 16"],
        correct:"June 5",
        questionId:"343434"
    },
    {
        question:"The birthday of which of the leader in India is observed as Children's day?",
        answers:["Mahatma Gandhi","S.Radhakrishnan","Rajiv Gandhi","Jawaharlal Nehru"],
        correct:"Jawaharlal Nehru",
        questionId:"454545"
    },
    {
        question:"Which day is observed as World Food Day?",
        answers:["September 10","August 16","November 4","October 16"],
        correct:"October 16",
        questionId:"5656567"
    },
    {
        question:"Who wrote the line: ' A thing of beauty is a joy forever'?",
        answers:["John Keats","Robert Browing","P.B.Shelley","William Wordsworth"],
        correct:"John Keats",
        questionId:"7878789"
    },
    {
        question:"	Dandia is a popular dance of?",
        answers:["Punjab","Gujarat","Tamil Nadu","Maharashtra"],
        correct:"Gujarat",
        questionId:"9999999"
    },
    {
        question:"What is part of a database that holds only one type of information?",
        answers:["Report","Field","Record","File"],
        correct:"Field",
        questionId:"1616167"
    },
    {
        question:"The letters, DOS stand for",
        answers:["Data Out System","Disk Out System","Disk Operating System","Data Operating System"],
        correct:"Disk Operating System",
        questionId:"2657431"
    },

    {
        question:"The Salal Project is on the river",
        answers:["Chenab","Jhelum","Ravi","Sutlej"],
        correct:"Chenab",
        questionId:"8121516"

    }
];

export default (n=5) => 
Promise.resolve(qBank.sort(()=> 0.5 - Math.random()).slice(0,n));
