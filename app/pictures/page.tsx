import React from 'react';
import EntryCard from '../components/EntryCard';

const Page: React.FC = () => {
    return (
        <div className="space-y-12">
            <EntryCard
                title="Continuous Prompt Generation from Linear Combination of Discrete Prompt Embeddings"
                description="We trained a neural model to linearly combine sentence embeddings to produce latent prefix material which improves performance on the sequence to sequence task with BART. I think this area of reducing problem complexites in terms of linear algebra is a promising for interpretability."
                imageSrc="/wentdown.png"
                link="https://arxiv.org/abs/2312.10323"
                external={true}
            />
            <EntryCard
                title="Analyzing the Effect of Fourier Features in MRI Classification Models"
                description="We can already get >99% classification accuracy with state of the art convolutional models. We wanted to see what happens during training when we add Fourier features to the input data, so we created this visualization."
                imageSrc="/kspace.gif"
                link="https://www.arxiv.org/abs/2409.13589"
                external={true}
            />
            {/* Add more EntryCards for additional papers */}
        </div>
    );
};

export default Page;