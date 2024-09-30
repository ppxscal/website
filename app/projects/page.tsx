import React from 'react';
import EntryCard from '../components/EntryCard';

const Page: React.FC = () => {
    return (
        <div>
         <div className="space-y-12">
         <EntryCard
            title="Mantis"
            description="A scientific workbench, with user-enabled RAG and programatic computation with latent materials of multi-modal deep learning models."
            imageSrc="/elmantis.png"
            link="https://home.withmantis.com"
            external={true} // Add this line
        />

        <EntryCard
            title="Neural Notes"
            description="An AI companion for performing jazz improvisation in alterating trades. Addresses imperpect timing in human input and generates a probabalisitc model of the next note to play in a sequence. Working on hosting a demo " 
            imageSrc="/elneuro.png"
            link="/thoughts/recent-thoughts"
        />
        </div>
        </div>

    );
};

export default Page;