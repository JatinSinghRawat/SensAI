import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {
  const companions = await getAllCompanions({limit:3});
  const recentSesssionsCompanions = await getRecentSessions( {limit:10} )
  console.log(recentSesssionsCompanions);
  return (
    <main className="flex-grow overflow-y-auto h-full p-4 md:p-8">
      <h1>Popular Companions</h1>

      <section className='home-section'>
        {companions.map((companion)=>(
          <CompanionCard
          key={companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}/>
        ))}
      </section>
      <section className='home-section'>
        <CompanionList 
        title="Recently Completed Sessions"
        sessions={recentSesssionsCompanions}
        classNames="w-2/3 max-lg:w-full"/>
        <CTA />
      </section>

    </main>
  )
}

export default Page