const photo = document.getElementById("photo");
const _name = document.getElementById("name");
const job = document.getElementById("job");
const comment = document.getElementById("comment");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");


const reviews = [
    {
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "brandi love",
        job: "mommy",
        comment: "My husband and I went for dinner in restaurant X and really enjoyed the atmosphere. The food was fresh and delicious and the best part was that the chef sent us a dessert they created that day. We were delighted."
    },
    {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "mixwell cañellas",
        job: "jett",
        comment: "I got a pair of boots from store X and I’m very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that’s a plus!"
    },
    {
        img: "https://randomuser.me/api/portraits/women/67.jpg",
        name: "lana rhoades",
        job: "student",
        comment: "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us. Thanks to its scheduling feature, we don’t need staff to work outside of business hours."
    },
    {
        img: "https://randomuser.me/api/portraits/men/79.jpg",
        name: "avova hasbullah",
        job: "omen",
        comment: "This app allows me to do [problem] from my smartphone where I want and when I want to. The interface is easy to navigate and I find everything I need quickly. I can’t wait for [feature]!"
    },
    {
        img: "https://randomuser.me/api/portraits/women/72.jpg",
        name: "riley reid",
        job: "cowgirl",
        comment: "Dr. X is an excellent professional. All staff was kind and made me feel very comfortable. I’m also very satisfied with the final result!.”"
    },
    {
        img: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "nukkye lituano",
        job: "raze",
        comment: "The experience was great. The massage was very relaxing and spending a day there was a great idea. All facilities are clean. The choice of saunas/pools is very remarkable."
    },
    {
        img: "https://randomuser.me/api/portraits/women/71.jpg",
        name: "kendra lust",
        job: "teacher",
        comment: "Flowers were fresh and beautiful. They offered free delivery for orders over $99 which is great. Prices are reasonable for the quality you get."
    },
    {
        img: "https://randomuser.me/api/portraits/men/81.jpg",
        name: "meddo miu",
        job: "killjoy",
        comment: "[Name of agent] was very professional. She was patient and showed us 20+ properties until we found the perfect one. She carefully listened to our needs and helped us find exactly what we were looking for."
    },
    {
        img: "https://randomuser.me/api/portraits/women/82.jpg",
        name: "luxury mur",
        job: "nurse",
        comment: "I had three different appointments at Conceptions, and each time the staff was well informed, friendly, and kind. You could see they really care about their customers. There are no words to thank them enough."
    },
    {
        img: "https://randomuser.me/api/portraits/men/52.jpg",
        name: "hoody hod",
        job: "sage",
        comment: "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and room service was always on time. Will be coming back!"
    }
]



let i = 0;
function person(i){
    photo.src = reviews[i].img;
    _name.innerText = reviews[i].name;
    job.innerText = reviews[i].job;
    comment.innerText = reviews[i].comment;
}
nextBtn.addEventListener("click",()=>{
    if(i>=reviews.length){
        i=0;
    }
    person(i);
    i++;
});

prevBtn.addEventListener("click",()=>{
    if(i<0){
        i=9;
    }
    person(i);
    i--;
});