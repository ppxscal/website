import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            <article className="max-w-prose w-full">
                <p className="text-black text-xl md:text-2xl mb-4">Ramblings</p>
                <p className="text-black text-base md:text-lg mb-4">
                    A skill I am always trying to cultivate is the ability to detach from my ego and objectively assess a given situation. I realize that my perception of the truth is framed 
                    by the perceptions of those around me. If I consider words that don't violate any of my prior beliefs, I am quick to accept them as fact, and I've found that to be hurtful to me. I think it's important to recognize
                    the importance of fidelity in navigating this fog we call life. An example I would bring up is the role of contemporary media;
                    a big problem I see is that stories and articles are pushed around with a particular narrative or agenda. It seems like the goal of many media institutions isn't to provide the truth,
                    rather to persuade the reader into considering a situation in a different light, often aligning with shareholder interests, not necessarily the common good. 
                </p>

                <p className="text-black text-base md:text-lg mb-4">
                    I've been thinking a lot about the future of Artificial Intelligence, particularly the bounds of capability. On one end, the contemporary state-of-the-art language models can already implement algorithms, brainstorm,
                    and critically assess large amounts of data very quickly, which has proven to be incredibly useful in the work setting. On the other end, the language models are only becoming more capable with scaling compute and data,
                    and there's been fierce competition in the industry to produce the most intelligent and impressive model that can answer any question you throw at it with incredible accuracy. In particular, Elon Musk's xAI has raised 6 billion dollars
                    with a 24 billion dollar valuation in their series B round: their mission is to "Understand the Universe".
                </p>

                <p className="text-black text-base md:text-lg mb-4">
                    Let me speak a bit more about the pursuit of superintelligence. In mathematical logic, Kurt Gödel shows that there will always be
                    <a href="https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems" className="text-blue-500"> truths outside the reach of those operating in a formal system.</a> 
                    What does this mean for trillion/quadrillion parameter models exploring the space of our toughest problems like quantum gravity and the stock market? There's no guarantee that we can solve these, but we could certainly go very far. One problem that interests me is consciousness. 
                    While we could make a lot of progress in the coming decades learning about the functioning of the brain, the chemistry and physics that govern its structure, the elephant in the room is what exactly is experience and understanding. Roger Penrose's view is that if we can understand a set 
                    of axioms, we can surpass them. Surpassing them in the sense of understanding their limitations, and what lies beyond. 
                </p>

            </article>
        </div>
    );
};

export default Page;