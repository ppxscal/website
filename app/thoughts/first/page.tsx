import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-white h-screen flex flex-col items-center justify-center p-4">
            <article className="max-w-prose">
                <p className="text-black text-2xl mb-4">Starting from Scratch</p>
                <p className="text-black text-sm mb-4">
                    My first exposure to programming was learning HTML when I was 11.
                    It's been 10 years since then, and only now have I decided to apply my amassed knowledge to a personal project.
                    Currently, I'm a senior at MIT, and I'm about to graduate. I wanted to make a website to document my thoughts and experiences as I transition from student to adult.
                    As it is currently, it looks pretty bad; but I'm excited to see how it will look after I spend some time on it.
                </p>
                <p className="text-black text-sm mb-4">
                    Probably my biggest reason is I wanted to construct an online presence independent of social media.
                    If I made an Instagram, Twitter, Medium, you name it, I would be subject to the policies of those platforms.
                    I wanted to make something that is under my control, and would last for as long as I had money to pay for it.
                    I also have opinions that I don't want to die with me.
                </p>
                <p className="text-black text-sm mb-4">
                    Though wise men at their end know dark is right, <br />
                    Because their words had forked no lightning they <br />
                    Do not go gentle into that good night. <br />
                    <br />
                    - Dylan Thomas
                </p>
            </article>
        </div>
    );
};

export default Page;
