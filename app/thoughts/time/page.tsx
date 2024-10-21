import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            <article className="max-w-prose w-full">
                <p className="text-black text-xl md:text-2xl mb-4">Time</p>
                <p className="text-black text-base md:text-lg mb-4">
                    How do we describe self-awareness? It could be an ability recognize and understand one's own thoughts, emotions, and behaviors.
                    It can allow a person to reflect on their own mental and emotional states, understand their motivations, and recognize how they are perceived by others.
                    I'm not convinced self-awareness is a fixed trait, or limited to humans. It can be cultivated and developed over time. Sometimes we go on autopilot, without conscious effort 
                    into every single action we execute. We don't ponder about every single step we take, every single word we say, or every single thought that crosses our mind; a large part of our
                    daily lives are spent in routines and habits. Dolphins and elephants can recognize themselves in a mirror, and surely that moment of self-recognition is like surfacing from the ocean of 
                    instinct. 
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                    My perspective is it's an ability to make a choice, and this ability exists on a spectrum. A choice to touch upon an unknown cognitive circuit. Sometimes it feels like we are 
                    lost in a dream, clinging to the words of left by those long gone from another era. As an animal, we are constrained to the senses that provide a given truth. So when we fall upon hard times,
                    it should be reasonable to feel things like hopelessness and despair. But the better part of us tells us to look forward to better times, because we have an ability to define a future trajectory
                    in terms of a presently defined basis of axioms and beliefs.  
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                    The experience of time seems nonlinear. Emotions appear to stretch and compress it in various dimensions. For example, time spent suffering can feel like an eternity, while time spent in joy can be evanescent.
                    Conversely, our memory of those durations can be insignificant, and memorable respectively. I can think of the past as a collection of typed memories [or observations], the present as a raw experience, and the future 
                    as a place for dreams as well as fears. So when we think about the future, we are thinking about a place that doesn't exist yet, but we can imagine it, touch it with our minds even. We can model how things will turn out, 
                    and we can make choices to influence that outcome. But we can never be certain if something will happen. 
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                    In my algorithms class we learned about this cool problem formulation called <a href="https://en.wikipedia.org/wiki/Flow_network" className="text-blue-500">flow networks</a>.
                    I'd describe it as a way to measure the number of paths that can be taken from one point on a graph to another, subject to certain constraints.
                    If life is a graph, nodes being states of being, and edges being the choices we make, then a flow network is a way to measure the number of paths we can take from one state to another.
                    If we have some state we want to reach from our current position, then we can think of possible ways to get there as a superposition of paths, the ones with the largest flow being the most likely to get us there.
                    I probably didn't need to bring up flow networks, but I think it's a cool way to think about life - we are given choices, some of which are more likely to lead us to our goals than others.
                </p>

            </article>
        </div>
    );
};

export default Page;