'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, projectCategories } from '../_data/site';

const filters = ['All', ...projectCategories];

export default function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? featuredProjects : featuredProjects.filter((project) => project.category === filter);

  return (
    <>
      <div className="filter-tabs projects-page-tabs" role="tablist" aria-label="Filter projects by category">
        {filters.map((item) => (
          <button key={item} type="button" className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>
        ))}
      </div>
      <div className="projects-grid projects-page-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              <span>{project.category}</span>
            </div>
            <div className="project-info">
              <div><h3>{project.title}</h3><p>{project.location}</p></div>
              <p className="project-text">{project.text}</p>
              <Link href="/contact">Discuss a similar project <ArrowUpRight size={15} /></Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
