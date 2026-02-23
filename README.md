Question 1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

*getElementById()
এটা দিয়ে আমরা Id দিয়ে element ধরি। যেহেতু Id unique হয়, সেহেতু এটা always একটাই element return করে।

*getElementsByClassName()
মাঝে মাঝে আমাদের অনেকগুলো card বা repeated element নিয়ে কাজ করতে হয়। আমরা যদি repeated element গুলোকে একসাথে ধরতে চাই
তাহলে, সব element এর class name একই রেখে সেটাকে আমরা getElementsByClassName দিয়ে ধরতে পারি। কারণ এইটা একাধিক element return করতে পয়ারে। এটা HtmlCollection return করে। যেটা array এর মতো হলেও পুরোপুরি array না।

*querySelector()
এইয়টা Css selector এর মতো কাজ করে। চাইলে id, class, tag সব দিয়েই ধরা যায়। তবে অবশ্যই id -> #, class -> . ব্যাবহার করতে হবে। তবে এইটা শুধু প্রথম match করা element return করে।

*querySelectorAl()
সব কিছু querySelector এর মতোই কিন্তু এটা সবগুলা ম্যাচিং এলিমেন্ট return করে NodeList একারে।

---------------------x---------------x-------------------x--------------------x------------------------

Question 2 : How do you create and insert a new element into the DOM?

নতুন element make করতে আমরা document.createElement() use করি। তারপর সেটার মধ্যে innerText or innerHtml সেট করে append করে দেই। নিচে আমি একটা উদাহরণসরুপ :

<section id="parent"> </section>
let parent = document.getElementById('parent')

let p = document.createElement('p')
p.innerText = 'My name is Apurbo'

parent.appendChild(p)


---------------------x---------------x-------------------x--------------------x------------------------


Questin 3 : What is Event Bubbling? And how does it work?

এটা মানে একটা ইভেন্ট প্রথমে তার নিজের element এর ভেতর চলে। তারপর ধীরে ধীরে তার parent তারপর সেই parent er parent এভাবে করে উপরের দিকে যায়। যদি একটা বাটনে eventListiner run করা হয় তাহলে প্রথমে ইভেন্টটা বাটনের মধ্যে চলবে। তারপর বাটনের প্যারেন্ট এর কাছে যাবে, তারপর section এর মধ্যে যাবে এভাবে করে body তে যাবে, তারপর সরাসরি document পর্যন্তও যেতে পয়ারে।
মানে event নিচে থেকে উপরে যায়। আর এটাকেই বলে event bubbling.


---------------------x---------------x-------------------x--------------------x------------------------


Question 4 : What is Event Delegation in JavaScript? Why is it useful?

যদি একাধিক element কে কোন কারনে ধরে operation চালানোর প্রয়োজন পরে তাহলে প্রতিটি element a eventListiner না চালিয়ে সেই element এর parent এ চালিয়ে দিলে event.target দিয়ে কোন element a click হচ্ছে তা detect করা যাবে। আবার event.target.parenNode দিয়েও element এর parent কে ধরে প্রয়োজনমতো কাজ সারা যায়।

Why is it useful :

কম কোড করা লাগে।
মেমরী কম use করায় Performance ভালো হয়।
ইত্যাদি...🙄


---------------------x---------------x-------------------x--------------------x------------------------


Question 5 : What is the difference between preventDefault() and stopPropagation()

*preventDefault()
এইটা browser er default behavior বন্ধ করে। যেমন form submit করলে পেজ অটো রিলোড হয়। এইটা use করলে আর reload hobena.

*stopPropagation()
এটা event bubbling বন্ধ করে। যদি প্রয়োজন পড়ে selected element ছাড়া bubbling তার parent এ যাবেনা। তাহলে সেটা থামানোর জন্য এইটা ব্যাবহার করা হয়। তাহলে event আর উপরে যাবেনা।



