import React from 'react'
export default function TeamCard({members}) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col justify-between pb-[39.6px] rounded-[3px] bg-white/5">
            <img src={member.image} className="w-full mb-[40px] rounded-t-[3px]" alt="team member" />
            <div>
              <div className="ms-[44.5px]">
                <h5 className="text-[18px] font-bold">{member.name}</h5>
                <p className='text-[14px] font-medium text-white/60'>{member.job_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
