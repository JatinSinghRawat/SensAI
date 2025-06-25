import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main className="flex-grow overflow-y-auto p-4 md:p-8">
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Binary Explorer"
          topic="Neural Network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e" />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff" />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#BDE7FF" />
      </section>

      <section className='home-section'>
        <CompanionList 
        title="Recently Completed Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"/>
        <CTA />
      </section>

    </main>
  )
}

export default Page