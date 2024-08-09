import React from 'react';
import EntryCard from '../components/EntryCard';

const Page: React.FC = () => {
    return (
        <div className="space-y-12">
        <EntryCard
            title="Hello World (7-28-24)"
            description="Looking for food in Boston with my friend Albert"
            imageSrc="/boston_al.jpg"
            link="/thoughts/first"
            />
        <EntryCard
            title="Ramblings (8-9-24)"
            description="Random Thoughts"
            imageSrc="/pretty.jpg"
            link="/thoughts/thinking"
        />
        </div>
    );
};

export default Page;