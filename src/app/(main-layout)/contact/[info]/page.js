import React from 'react';
export const metadata = {
    title: "Contact Info Page",
    description: "Next JS Practice Project",
  };
const infoPage = ({params}) => {
    console.log(params);
    return (
        <div>
            Info Page of {params.info} 
        </div>
    );
};

export default infoPage;