import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { teamMembers, timeline, awards, facilities } from "../../data/about";

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero / Story */}
        <section className="py-14 md:py-20 border-b border-border">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">Our Story</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-text mb-5 leading-tight">
              A Legacy of Warmth &amp; Elegance
            </h1>
            <p className="text-secondary-text text-sm leading-relaxed mb-4">
              Founded in 1998 on the iconic Marine Drive, Hotel Mahal was born from a simple belief — that every guest deserves to feel at home, even far from it. What began as a 40-room boutique property has grown into one of Mumbai's most celebrated destinations, blending heritage architecture with modern comforts.
            </p>
            <p className="text-secondary-text text-sm leading-relaxed">
              Over two decades later, we remain a family-owned hotel with an unwavering commitment to personalised service, sustainable hospitality, and creating memories that last a lifetime.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-14 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", text: "To deliver exceptional hospitality experiences that celebrate India's rich culture while embracing global standards of comfort and service." },
              { title: "Our Vision", text: "To be the most trusted and beloved hotel destination in India — where every stay becomes a cherished story worth retelling." },
              { title: "Our Values", text: "Warmth, integrity, sustainability, and an obsessive attention to detail in every interaction with our guests and community." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-lg bg-section-bg border border-border">
                <h3 className="text-base font-semibold text-primary-text mb-3">{item.title}</h3>
                <p className="text-sm text-secondary-text leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="py-14 border-b border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">What We Offer</p>
          <h2 className="text-2xl font-semibold text-primary-text mb-8">Hotel Facilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facilities.map((f) => (
              <div key={f.label} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-white hover:shadow-sm transition-shadow">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-sm font-medium text-primary-text">{f.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-14 border-b border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">The People</p>
          <h2 className="text-2xl font-semibold text-primary-text mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-5 rounded-lg border border-border bg-white text-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4 ${member.color}`}>
                  {member.initials}
                </div>
                <p className="text-sm font-semibold text-primary-text">{member.name}</p>
                <p className="text-xs text-primary mb-3">{member.role}</p>
                <p className="text-xs text-secondary-text leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 border-b border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Our Journey</p>
          <h2 className="text-2xl font-semibold text-primary-text mb-10">Milestones</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                  </div>
                  <div className="relative sm:pl-8">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white hidden sm:block -translate-x-[calc(50%+0.5px)]" />
                    <p className="text-sm font-semibold text-primary-text mb-1">{item.title}</p>
                    <p className="text-xs text-secondary-text leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Recognition</p>
          <h2 className="text-2xl font-semibold text-primary-text mb-8">Awards &amp; Accolades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award) => (
              <div key={award.id} className="p-5 rounded-lg border border-border bg-section-bg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-primary-text mb-1">{award.title}</p>
                <p className="text-xs text-primary font-medium mb-1">{award.year}</p>
                <p className="text-xs text-secondary-text">{award.body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageContainer>
  );
};

export default AboutPage;