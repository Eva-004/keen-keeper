import React from 'react';

const SummaryCards = ({title,count}) => {
    return (
        <div>
            <div className="card  bg-base-100 card-sm shadow-sm">
                <div className="card-body text-center space-y-1">
                    <h2 className="font-semibold text-3xl text-[##244D3F]">{count}</h2>
                    <p className='text-[#64748B]'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryCards;